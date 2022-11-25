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
import { DeleteModal, ProgressOverlay } from '../../../common/index.js'
import { ProjectDocuments } from '../../ApprovalPage/components/ProjectDocuments.jsx'
import { useNavigate } from 'react-router-dom'
import { EditUserDecision } from '../../ApprovalPage/components/EditUserDecision.jsx'
import { EditProjectStatus } from '../../ApprovalPage/components/EditProjectStatus.jsx'
import { useSelector } from 'react-redux'
import { loginSelector } from '../../LoginPage/loginSlice.js'
import { projectSelector } from '../projectSlice.js'
import { useDeleteProjectMutation } from '../../../store/api'

export const ProjectActions = () => {
    const [anchorEl, setAnchorEl] = React.useState(null)

    const [
        deleteProject,
        { isSuccess: isSuccessDelete, isLoading },
    ] = useDeleteProjectMutation()

    const navigate = useNavigate()

    const { project } = useSelector(projectSelector)

    const { userId: ownerId } = useSelector(loginSelector)

    React.useEffect(
        () => {
            if (isSuccessDelete) setAnchorEl(null)
        },
        [isSuccessDelete]
    )

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
                        documents={project.documentsIds}
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
                            onSubmit={() => deleteProject(project._id)}
                            message='Вы уверены, что хотите удалить проект'
                            itemName={`${project.name}?`}
                            title='Удаление проекта'
                            button='menuItem'
                            label='Удалить проект'
                            icon={<DeleteOutline />}
                        />
                    )}
                </Stack>
            </Menu>

            <ProgressOverlay showProgressOverlay={isLoading} />
        </>
    )
}