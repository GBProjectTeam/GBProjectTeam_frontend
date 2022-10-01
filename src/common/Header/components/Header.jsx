import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
    AppBar,
    Box,
    Menu,
    MenuItem,
    Typography,
    Button,
    TextField,
    InputAdornment,
    IconButton,
    Badge
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

        <AppBar
            sx={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                background: 'white',
                color: 'black',
            }}
        >
            <Typography
                variant='h4'
                sx={{
                    m: 1
                }}
            >
                DocsApproval
            </Typography>

            <Button
                variant='outlined'
                onClick={() => navigate('/projects')}
                sx={{
                    borderRadius: 20,
                    m: '12px',
                    color: 'black'
                }}
            >
                Проекты
            </Button>

            <TextField
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
                    m: '10px'
                }}
            />

            <Button
                variant='outlined'
                onClick={() => navigate('/archive')}
                sx={{
                    borderRadius: 20,
                    m: '12px',
                    color: 'black'
                }}
            >
                Архив
            </Button>

            <Button
                variant='contained'
                onClick={() => navigate('/createProject')}
                startIcon={<Add />}
                sx={{
                    m: '12px',
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
                <IconButton
                    size='large'
                    aria-label='show 17 new notifications'
                    color='inherit'
                >
                    <Badge badgeContent={3} color='error'>
                        <NotificationsNone />
                    </Badge>
                </IconButton>

                <Button
                    variant='outlined'
                    startIcon={<AccountCircle />}
                    onClick={handleClick}
                    sx={{
                        m: '12px',
                        borderRadius: 20,
                        color: 'black'

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
                    onClick={() => navigate('/login')}
                >
                    Выйти
                    <ExitToApp
                        sx={{
                            marginLeft: 'auto'
                        }}
                    />
                </MenuItem>
            </Menu>

        </AppBar >

    )
}
