import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Menu,
    MenuItem,
    Button,
    IconButton,
    Badge,
    Stack,
    Typography,
    Avatar,
} from '@mui/material'
import {
    NotificationsNone,
    PermContactCalendar,
    ExitToApp
} from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { loggedOut, loginSelector } from '../../../pages/LoginPage/loginSlice.js'
import { useGetProjectsByFilterQuery } from '../../../store/api'
import { ProgressOverlay } from '../../ProgressOverlay/components/ProgressOverlay.jsx'

export const MenuAppBar = () => {
    const { lastName, firstName, avatar, userId } = useSelector(loginSelector)

    const navigate = useNavigate()

    const [anchorPersonalArea, setAnchorPersonalArea] = React.useState(null)
    const [anchorProjectsForConsideration, setAnchorProjectsForConsideration] = React.useState(null)

    const dispatch = useDispatch()

    const { data: projects, isFetching } = useGetProjectsByFilterQuery('status=К согласованию')

    const projectsForConsideration = React.useMemo(
        () => {
            if (projects && projects.length > 0) {
                return projects.filter(
                    (project) => {
                        const indexForConsideration = project.coordinationUsers.findIndex(
                            (user) => user.userId?._id === userId && user?.settedStatus === ''
                        )

                        return indexForConsideration !== -1
                    }
                )
            } else {
                return []
            }
        },
        [projects],
    )

    const handleClickPersonalAreaMenu = (e) => {
        setAnchorPersonalArea(e.currentTarget)
    }

    const handleClosePersonalAreaMenu = () => {
        setAnchorPersonalArea(null)
    }

    const handleClickExit = () => {
        navigate('/')
        dispatch(
            loggedOut(),
        )
    }

    const handleClickPersonal = () => {
        navigate(`/profile/${userId}`)
        setAnchorPersonalArea(null)
    }

    const handleClickProjectForConsideration = (id) => {
        navigate(`/approval/${id}`)
        setAnchorProjectsForConsideration(null)
    }

    const handleCloseProjectsForConsiderationMenu = () => {
        setAnchorProjectsForConsideration(null)
    }

    const renderPersonalAreaMenu = () => (
        <Menu
            anchorEl={anchorPersonalArea}
            open={!!anchorPersonalArea}
            onClose={handleClosePersonalAreaMenu}
        >
            <MenuItem onClick={handleClickPersonal}>
                <Stack
                    direction='row'
                    spacing={2}
                    flex={1}
                    justifyContent='space-between'
                >
                    <Typography>
                        Личный кабинет
                    </Typography>
                    <PermContactCalendar />
                </Stack>
            </MenuItem>

            <MenuItem onClick={handleClickExit}>
                <Stack
                    direction='row'
                    spacing={2}
                    flex={1}
                    justifyContent='space-between'
                >
                    <Typography>
                        Выйти
                    </Typography>
                    <ExitToApp />
                </Stack>
            </MenuItem>
        </Menu>
    )

    const renderProjectsForConsiderationMenu = () => (
        <Menu
            anchorEl={anchorProjectsForConsideration}
            open={!!anchorProjectsForConsideration}
            onClose={handleCloseProjectsForConsiderationMenu}
        >
            <Typography px={2}>
                Проекты, которые ждут Вашего решения:
            </Typography>

            {React.Children.toArray(
                projectsForConsideration.map(
                    (project) => (
                        <MenuItem
                            onClick={() => handleClickProjectForConsideration(project._id)}
                        >
                            {project.name}
                        </MenuItem>
                    )
                )
            )}
        </Menu>
    )

    return (
        <>
            <Stack
                direction='row'
                spacing={2}
                justifyContent='flex-end'
                alignItems='center'
            >
                <IconButton
                    onClick={(e) => setAnchorProjectsForConsideration(e.currentTarget)}
                    disabled={projectsForConsideration?.length === 0}
                >
                    <Badge
                        badgeContent={projectsForConsideration?.length || null}
                        color='error'
                    >
                        <NotificationsNone />
                    </Badge>
                </IconButton>

                <Button
                    variant='outlined'
                    startIcon={
                        <Avatar
                            alt='Avatar'
                            sx={{ width: '30px', height: '30px' }}
                            src={avatar}
                        />
                    }
                    onClick={handleClickPersonalAreaMenu}
                    sx={{ borderRadius: 20 }}
                >
                    {firstName} {lastName}
                </Button>
            </Stack>

            {renderPersonalAreaMenu()}

            {renderProjectsForConsiderationMenu()}

            <ProgressOverlay showProgressOverlay={isFetching} />
        </>
    )
}