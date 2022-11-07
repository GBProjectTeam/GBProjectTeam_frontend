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
    const [openModal_1, setOpenModal_1] = React.useState(false)
    const [openModal_2, setOpenModal_2] = React.useState(false)
    const [openModal_3, setOpenModal_3] = React.useState(false)
    const [openModal_4, setOpenModal_4] = React.useState(false)
    const [openModal_5, setOpenModal_5] = React.useState(false)
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
                        isOpen={openModal_1}
                        onOpen={() => setOpenModal_1(true)}
                        onClose={() => setOpenModal_1(false)}
                        icon={<LibraryAdd />}
                        label='Изменить статус'
                        title='Изменить статус'
                    />

                    <Modal
                        button='menuItem'
                        isOpen={openModal_2}
                        onOpen={() => setOpenModal_2(true)}
                        onClose={() => setOpenModal_2(false)}
                        icon={<LibraryAddCheck />}
                        label='Изменить решение'
                        title='Изменить решение'
                    />

                    <Modal
                        button='menuItem'
                        isOpen={openModal_3}
                        onOpen={() => setOpenModal_3(true)}
                        onClose={() => setOpenModal_3(false)}
                        icon={<Message />}
                        label='Открыть комментарии'
                        title='Открыть комментарии'
                    />

                    <Modal
                        button='menuItem'
                        isOpen={openModal_4}
                        onOpen={() => setOpenModal_4(true)}
                        onClose={() => setOpenModal_4(false)}
                        icon={<Article />}
                        label='Документы'
                        title='Документы'
                    />

                    <Modal
                        button='menuItem'
                        isOpen={openModal_5}
                        onOpen={() => setOpenModal_5(true)}
                        onClose={() => setOpenModal_5(false)}
                        icon={<DeleteOutline />}
                        label='Удалить проект'
                        title='Удалить проект'
                    />
                </Stack>
            </Menu>
        </>
    )
}