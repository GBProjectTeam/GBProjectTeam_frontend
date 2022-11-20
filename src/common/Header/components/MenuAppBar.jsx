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
    Avatar
} from '@mui/material'
import {
    NotificationsNone,
    PermContactCalendar,
    ExitToApp
} from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { loggedOut, loginSelector } from '../../../pages/LoginPage/loginSlice.js'

export const MenuAppBar = () => {
    const { lastName, firstName, avatar } = useSelector(loginSelector)

    const navigate = useNavigate()

    const [anchorEl, setAnchorEl] = React.useState(null)

    const dispatch = useDispatch()

    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleExit = () => {
        navigate('/')
        dispatch(
            loggedOut(),
        )
    }

    const handleClickPersonal = () => {
        navigate('/personal')
        setAnchorEl(null)
    }

    return (
        <>
            <Stack
                direction='row'
                spacing={2}
                justifyContent='flex-end'
                alignItems='center'
            >
                <IconButton>
                    <Badge
                        badgeContent={3}
                        color='error'
                    >
                        <NotificationsNone />
                    </Badge>
                </IconButton>

                <Button
                    variant='outlined'
                    startIcon={
                        <Avatar
                            alt='Remy Sharp'
                            sx={{ width: '30px', height: '30px' }}
                            src={avatar}
                        />
                    }
                    onClick={handleClick}
                    sx={{ borderRadius: 20 }}
                >
                    {firstName} {lastName}
                </Button>
            </Stack>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
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

                <MenuItem onClick={handleExit}>
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
        </>
    )
}