import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
    AppBar,
    Menu,
    MenuItem,
    Typography,
    Button,
    TextField,
    InputAdornment,
    IconButton,
    Badge,
    Stack
} from '@mui/material'
import { grey } from '@mui/material/colors'
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
                background: grey[50]
            }}
        >
            <Stack
                direction='row'
                marginTop='0.5%'
                marginBottom='0.5%'
            >
                <Stack
                    direction='row'
                    spacing={2}
                    flex={2}
                    justifyContent='center'
                    alignItems='center'
                >
                    <Typography
                        variant='h4'
                        sx={{
                            color: grey[900]
                        }}
                    >
                        DocsApproval
                    </Typography>

                    <Button
                        variant='outlined'
                        onClick={() => navigate('/projects')}
                        sx={{
                            borderRadius: 20
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
                            width: '30%'
                        }}
                    />

                    <Button
                        variant='outlined'
                        onClick={() => navigate('/archive')}
                        sx={{
                            borderRadius: 20
                        }}
                    >
                        Архив
                    </Button>

                    <Button
                        variant='contained'
                        onClick={() => navigate('/createProject')}
                        startIcon={<Add />}
                        sx={{
                            borderRadius: 20
                        }}
                    >
                        Создать новый
                    </Button>
                </Stack>

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
            </Stack>
        </AppBar >
    )
}
