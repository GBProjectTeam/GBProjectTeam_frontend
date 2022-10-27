import React from 'react'
import {
    Menu,
    MenuItem,
    Stack,
    Typography,
    Button,
} from '@mui/material'
import {
    AccountCircle,
    PermContactCalendar,
    ExitToApp
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
        <strong>
            <Stack
                direction='row'
                spacing={2}
                justifyContent='flex-end'
                alignItems='center'
            >
                <Button
                    variant='outlined'
                    startIcon={<AccountCircle />}
                    onClick={handleClick}
                    sx={{ borderRadius: 20 }}
                >
                    Действия
                </Button>
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
                        <PermContactCalendar />
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
                        <ExitToApp />
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
                        <ExitToApp />
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
                        <ExitToApp />
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
                        <ExitToApp />
                    </Stack>
                </MenuItem>
            </Menu>
        </strong>
    )
}