import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Menu,
    MenuItem,
    Button,
    IconButton,
    Badge,
    Stack,
    Typography
} from '@mui/material'
import {
    AccountCircle,
    NotificationsNone,
    PermContactCalendar,
    ExitToApp
} from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { loggedOut } from '../../../pages/LoginPage/loginSlice.js'

export const MenuAppBar = () => {
    const navigate = useNavigate()

    const [anchorEl, setAnchorEl] = React.useState(null)

    const dispatch = useDispatch()

    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleExit = () => {
        navigate('/')
        dispatch(
            loggedOut(),
        )
    }    
        
    const handleClickPersonal = () => {
        navigate('/personal')
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
                <IconButton>
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
                    sx={{ borderRadius: 20 }}
                >
                    Василий Пупкин
                </Button>
            </Stack>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClickPersonal}>
                    <Stack
                        direction='row'
                        spacing={2}
                        flex={1}
                        justifyContent='space-between'
                    >
                        <Typography>
                            Личный кабинет
                        </Typography>
                        <PermContactCalendar />
                    </Stack>
                </MenuItem>

                <MenuItem onClick={handleExit}>
                    <Stack
                        direction='row'
                        spacing={2}
                        flex={1}
                        justifyContent='space-between'
                    >
                        <Typography>
                            Выйти
                        </Typography>
                        <ExitToApp />
                    </Stack>
                </MenuItem>
            </Menu>
        </>
    )
}