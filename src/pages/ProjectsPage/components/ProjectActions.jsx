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
    Message,
    Edit,
} from '@mui/icons-material'
import { DeleteModal } from '../../../common/index.js'
import { ProjectDocuments } from '../../ApprovalPage/components/ProjectDocuments.jsx'
import { useNavigate } from 'react-router-dom'
import { EditUserDecision } from '../../ApprovalPage/components/EditUserDecision.jsx'
import { EditProjectStatus } from '../../ApprovalPage/components/EditProjectStatus.jsx'

export const ProjectActions = () => {
    const [anchorEl, setAnchorEl] = React.useState(null)

    const navigate = useNavigate()

    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        event.stopPropagation()
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
                    <EditUserDecision button='menuItem' />

                    <EditProjectStatus button='menuItem' />

                    <ProjectDocuments button='menuItem' />

                    <MenuItem
                        onClick={() => navigate('/edit-project')}
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

                    <MenuItem
                        onClick={() => navigate('/project-comments')}
                        sx={{ width: '100%' }}
                    >
                        <Stack
                            direction='row'
                            spacing={2}
                            flex={1}
                            justifyContent='space-between'
                        >
                            <Typography>
                                Открыть комментарии
                            </Typography>

                            <Message />
                        </Stack>
                    </MenuItem >

                    <DeleteModal
                        onSubmit={() => null}
                        message='Вы уверены, что хотите удалить проект'
                        itemName='Контракт по закупке канцелярских товаров?'
                        title='Удаление проекта'
                        button='menuItem'
                        label='Удалить проект'
                        icon={<DeleteOutline />}
                    />
                </Stack>
            </Menu>
        </>
    )
}