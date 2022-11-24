import React from 'react'
import {
    Menu,
    Stack,
    IconButton,
    MenuItem,
    Typography
} from '@mui/material'
import {
    MoreHoriz,
    DeleteOutline,
    Edit,
} from '@mui/icons-material'
import { DeleteModal } from '../../../common/index.js'
import { ProjectDocuments } from '../../ApprovalPage/components/ProjectDocuments.jsx'
import { useNavigate } from 'react-router-dom'
import { EditUserDecision } from '../../ApprovalPage/components/EditUserDecision.jsx'
import { EditProjectStatus } from '../../ApprovalPage/components/EditProjectStatus.jsx'
import { useSelector } from 'react-redux'
import { loginSelector } from '../../LoginPage/loginSlice.js'
import { projectSelector } from '../projectSlice.js'

export const ProjectActions = () => {
    const [anchorEl, setAnchorEl] = React.useState(null)

    const navigate = useNavigate()

    const { project } = useSelector(projectSelector)

    const { userId: ownerId } = useSelector(loginSelector)

    const open = Boolean(anchorEl)

    const isOwner = ownerId === project?.ownerId?._id

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
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
                <IconButton
                    variant='outlined'
                    onClick={handleClick}
                    sx={{ borderRadius: 20 }}
                >
                    <MoreHoriz />
                </IconButton>
            </Stack>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <Stack
                    direction='column'
                    alignItems='flex-start'
                >
                    {!isOwner && (
                        <EditUserDecision
                            button='menuItem'
                            closeMenu={() => setAnchorEl(null)}
                        />
                    )}

                    {isOwner && (
                        <EditProjectStatus
                            button='menuItem'
                            closeMenu={() => setAnchorEl(null)}
                        />
                    )}

                    <ProjectDocuments
                        button='menuItem'
                        closeMenu={() => setAnchorEl(null)}
                    />

                    {isOwner && (
                        <MenuItem
                            onClick={() => navigate(`/edit-project/${project._id}`)}
                            sx={{ width: '100%' }}
                        >
                            <Stack
                                direction='row'
                                spacing={2}
                                flex={1}
                                justifyContent='space-between'
                            >
                                <Typography>
                                    Редактировать проект
                                </Typography>

                                <Edit />
                            </Stack>
                        </MenuItem >
                    )}

                    {isOwner && (
                        <DeleteModal
                            onSubmit={() => setAnchorEl(null)}
                            message='Вы уверены, что хотите удалить проект'
                            itemName='Контракт по закупке канцелярских товаров?'
                            title='Удаление проекта'
                            button='menuItem'
                            label='Удалить проект'
                            icon={<DeleteOutline />}
                        />
                    )}
                </Stack>
            </Menu>
        </>
    )
}