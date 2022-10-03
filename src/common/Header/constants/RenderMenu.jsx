import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Menu,
    MenuItem,
    Button,
    IconButton,
    Badge,
    Stack
} from '@mui/material'
import {
    AccountCircle,
    NotificationsNone,
    PermContactCalendar,
    ExitToApp
} from '@mui/icons-material'

export const RenderMenu = () => {
    const navigate = useNavigate()

    const [anchorEl, setAnchorEl] = React.useState(null)

    const open = Boolean(anchorEl)

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
                flex={1}
                justifyContent='flex-end'
                alignItems='center'
                marginRight='2%'
            >
                <IconButton
                >
                    <Badge
                        badgeContent={3}
                        color='error'
                    >
                        <NotificationsNone />
                    </Badge>
                </IconButton>

                <Button
                    variant='outlined'
                    startIcon={<AccountCircle />}
                    onClick={handleClick}
                    sx={{
                        borderRadius: 20
                    }}
                >
                    Василий Пупкин
                </Button>
            </Stack>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem
                    onClick={() => navigate('/personalArea')}
                >
                    <Stack
                        direction='row'
                        flex={1}
                    >
                        <Stack
                            direction='row'
                            flex={1}
                            justifyContent='flex-start'
                        >
                            Личный кабинет
                        </Stack>

                        <Stack
                            direction='row'
                            flex={1}
                            justifyContent='flex-end'
                        >
                            <PermContactCalendar />
                        </Stack>
                    </Stack>
                </MenuItem>

                <MenuItem
                    onClick={() => navigate('/')}
                >
                    <Stack
                        direction='row'
                        flex={1}
                    >
                        <Stack
                            direction='row'
                            flex={1}
                            justifyContent='flex-start'
                        >
                            Выйти
                        </Stack>

                        <Stack
                            direction='row'
                            flex={1}
                            justifyContent='flex-end'
                        >
                            <ExitToApp />
                        </Stack>
                    </Stack>
                </MenuItem>
            </Menu>
        </>
    )
}