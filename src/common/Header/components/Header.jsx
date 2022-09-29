import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Box,
    Menu,
    MenuItem,
    Typography,
    Button,
    TextField,
    InputAdornment
} from '@mui/material'
import {
    Add,
    Search,
    AccountCircle,
    NotificationsNone,
    PermContactCalendar,
    ExitToApp
} from '@mui/icons-material'

export const Header = () => {

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

        <Box
            sx={{
                display: 'flex',
                alignItems: 'flex-start'
            }}
        >
            <Typography
                variant='h4'
                sx={{
                    margin: 1
                }}
            >
                DocsApproval
            </Typography>

            <Button
                variant='outlined'
                onClick={() => navigate('/projects')}
                sx={{
                    borderRadius: 10,
                    margin: 1
                }}
            >
                Проекты
            </Button>

            <TextField
                id='outlined-basic'
                placeholder='Поиск по проектам'
                size='small'
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            <Search />
                        </InputAdornment>
                    )
                }}
                variant='outlined'
                sx={{
                    margin: 1
                }}
            />

            <Button
                variant='outlined'
                onClick={() => navigate('/archive')}
                sx={{
                    borderRadius: 20,
                    margin: 1
                }}
            >
                Архив
            </Button>

            <Button
                variant='contained'
                onClick={() => navigate('/createProject')}
                startIcon={<Add />}
                sx={{
                    margin: 1,
                    borderRadius: 20

                }}
            >
                Создать новый
            </Button>

            <Box
                sx={{
                    display: 'flex',
                    marginLeft: 'auto',
                    alignItems: 'center'
                }}
            >
                <NotificationsNone
                    sx={{
                        margin: 1
                    }}
                />

                <Button
                    variant='outlined'
                    startIcon={<AccountCircle />}
                    onClick={handleClick}
                    sx={{
                        margin: 1,
                        borderRadius: 20

                    }}
                >
                    Василий Пупкин
                </Button>
            </Box>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem
                    onClick={() => navigate('/personalArea')}
                >
                    Личный кабинет
                    <PermContactCalendar
                        sx={{
                            marginLeft: 'auto'
                        }}
                    />
                </MenuItem>

                <MenuItem
                    onClick={() => navigate('/exit')}
                >
                    Выйти
                    <ExitToApp
                        sx={{
                            marginLeft: 'auto'
                        }}
                    />
                </MenuItem>
            </Menu>

        </Box >
    )
}
