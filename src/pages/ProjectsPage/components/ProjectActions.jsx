import React from 'react'
import {
    Menu,
    MenuItem,
    Stack,
    Typography,
    IconButton,
} from '@mui/material'
import {
    LibraryAdd,
    MoreHoriz,
    DeleteOutline,
    Article,
    Message,
    LibraryAddCheck
} from '@mui/icons-material'

export const ProjectActions = () => {
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
                <MenuItem>
                    <Stack
                        direction='row'
                        spacing={2}
                        flex={1}
                        justifyContent='space-between'
                    >
                        <Typography>
                            Изменить статус
                        </Typography>
                        <LibraryAdd />
                    </Stack>
                </MenuItem>

                <MenuItem>
                    <Stack
                        direction='row'
                        spacing={2}
                        flex={1}
                        justifyContent='space-between'
                    >
                        <Typography>
                            Изменить решение
                        </Typography>
                        <LibraryAddCheck />
                    </Stack>
                </MenuItem>

                <MenuItem>
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
                </MenuItem>

                <MenuItem>
                    <Stack
                        direction='row'
                        spacing={2}
                        flex={1}
                        justifyContent='space-between'
                    >
                        <Typography>
                            Документы
                        </Typography>
                        <Article />
                    </Stack>
                </MenuItem>

                <MenuItem>
                    <Stack
                        direction='row'
                        spacing={2}
                        flex={1}
                        justifyContent='space-between'
                    >
                        <Typography>
                            Удалить проект
                        </Typography>
                        <DeleteOutline />
                    </Stack>
                </MenuItem>
            </Menu>
        </>
    )
}