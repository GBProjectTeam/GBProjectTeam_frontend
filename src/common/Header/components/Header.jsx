import React from 'react'
import { useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
// import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
// import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import AddIcon from '@mui/icons-material/Add';

// const pages = ['ПРОЕКТЫ', 'АРХИВ', 'СОЗДАТЬ НОВЫЙ']
// const settings = ['Личный кабинет', 'Выйти']

export const Header = () => {
    const navigate = useNavigate()

    // const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null)

    // const handleOpenNavMenu = (event) => {
    //     setAnchorElNav(event.currentTarget);
    // };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    return (

        <Box
            component='main'
            sx={{
                mx: 2,
                display: 'flex',
                flexGrow: 1,
                justifyContent: 'center',
            }}
        >
            <AppBar position='static'>
                <Container maxWidth='xl'>
                    <Toolbar disableGutters>
                        <Typography
                            variant='h6'
                            noWrap
                            component='a'
                            href='/'
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            DocsApproval
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                key={'projects'}
                                onClick={() => navigate('/projects')}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {'ПРОЕКТЫ'}
                            </Button>
                            <Button
                                key={'archive'}
                                onClick={() => navigate('/archive')}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {'АРХИВ'}
                            </Button>
                            <Button
                                key={'createProject'}
                                onClick={() => navigate('/createProject')}
                                sx={{ my: 2, color: 'white', display: 'flex' }}
                                startIcon={<AddIcon />}
                            >
                                {'СОЗДАТЬ НОВЫЙ'}
                            </Button>
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title='Open settings'>
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt='Remy Sharp' src='/src/static/images/avatar/User.jpg' />
                                    <p>Василий Пупкин</p>
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id='menu-appbar'
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem key={'personalArea'} onClick={() => navigate('/personalArea')}>
                                    <Typography textAlign='center'>{'Личный кабинет'}</Typography>
                                </MenuItem>
                                <MenuItem key={'exit'} onClick={() => navigate('/exit')}>
                                    <Typography textAlign='center'>{'Выйти'}</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}
