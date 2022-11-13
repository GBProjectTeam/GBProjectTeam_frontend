import React from 'react'
import {
    Menu,
    Stack,
    IconButton
} from '@mui/material'
import {
    LibraryAdd,
    MoreHoriz,
    DeleteOutline,
    Article,
    Message,
    LibraryAddCheck
} from '@mui/icons-material'
import { Modal } from '../../../common/index.js'

export const ProjectActions = () => {
    const [openModalChangeStatus, setOpenModalChangeStatus] = React.useState(false)
    const [openModalChangeDecision, setOpenModalChangeDecision] = React.useState(false)
    const [openModalOpenComments, setOpenModalOpenComments] = React.useState(false)
    const [openModalTheDocuments, setOpenModalTheDocuments] = React.useState(false)
    const [openModalDeleteProject, setOpenModalDeleteProject] = React.useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null)
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
                    <Modal
                        button='menuItem'
                        isOpen={openModalChangeStatus}
                        onOpen={() => setOpenModalChangeStatus(true)}
                        onClose={() => setOpenModalChangeStatus(false)}
                        icon={<LibraryAdd />}
                        label='Изменить статус'
                        title='Изменить статус'
                        children=''
                    />

                    <Modal
                        button='menuItem'
                        isOpen={openModalChangeDecision}
                        onOpen={() => setOpenModalChangeDecision(true)}
                        onClose={() => setOpenModalChangeDecision(false)}
                        icon={<LibraryAddCheck />}
                        label='Изменить решение'
                        title='Изменить решение'
                        children=''
                    />

                    <Modal
                        button='menuItem'
                        isOpen={openModalOpenComments}
                        onOpen={() => setOpenModalOpenComments(true)}
                        onClose={() => setOpenModalOpenComments(false)}
                        icon={<Message />}
                        label='Открыть комментарии'
                        title='Открыть комментарии'
                        children=''
                    />

                    <Modal
                        button='menuItem'
                        isOpen={openModalTheDocuments}
                        onOpen={() => setOpenModalTheDocuments(true)}
                        onClose={() => setOpenModalTheDocuments(false)}
                        icon={<Article />}
                        label='Документы'
                        title='Документы'
                        children=''
                    />

                    <Modal
                        button='menuItem'
                        isOpen={openModalDeleteProject}
                        onOpen={() => setOpenModalDeleteProject(true)}
                        onClose={() => setOpenModalDeleteProject(false)}
                        icon={<DeleteOutline />}
                        label='Удалить проект'
                        title='Удалить проект'
                        children=''
                    />
                </Stack>
            </Menu>
        </>
    )
}