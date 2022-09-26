import React from 'react'
import PropTypes from 'prop-types'
import { Header } from '../../../common/index.js'
import { useLocation } from 'react-router-dom'
import { Box } from '@mui/material'
import { headerHeight } from '../../../common/Header/constants/headerHeight.js'

export const MainLayout = ({
    children,
}) => {
    const location = useLocation()

    const isLoginPage = location.pathname === '/login'

    return (
        <Box
            sx={{
                height: '100vh',
                width: '100vw',
                // display: 'flex',
                flex: 1,
                flexDirection: 'row'
            }}
        >
            {!isLoginPage && <Header />}

            <Box
                component='main'
                sx={{
                    paddingTop: !isLoginPage ? `${headerHeight}px` : 0,
                    mx: 2,
                    alignItems: isLoginPage ? 'center' : 'none',
                    display: 'flex',
                    flexGrow: 1,
                    justifyContent: 'center',
                }}
            >
                {children}
            </Box>
        </Box>
    )
}

MainLayout.propTypes = {
    children: PropTypes.node,
}
