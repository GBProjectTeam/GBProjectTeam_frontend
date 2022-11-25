import React from 'react'
import PropTypes from 'prop-types'
import { Header, Alert } from '../../../common/index.js'
import { useLocation } from 'react-router-dom'
import { Box } from '@mui/material'
import { headerHeight } from '../../../common/Header/constants/headerHeight.js'
import {
    bgApproval,
    bgArchive,
    bgNewProject,
    bgPersonal,
    bgProjects,
} from '../assets'

export const MainLayout = ({ children }) => {
    const location = useLocation()

    const isLoginPage = location.pathname === '/login'

    const isIndexPage = location.pathname === '/'

    const isNotFoundPage = location.pathname === '/not-found'

    const isRegistrationPage = location.pathname === '/registration'

    const isApprovalPage = location.pathname.includes('/approval')

    const isProjectsPage = location.pathname === '/projects'

    const isArchivePage = location.pathname === '/archive'

    const isNewProjectPage = location.pathname === '/new-project'

    const isUpdateProjectPage = location.pathname.includes('/edit-project/')

    const isPersonalPage = location.pathname === '/personal'

    const bgGradient =
    'linear-gradient(135deg, rgba(105,35,255,1) 0%, rgba(127,77,232,1) 50%, rgba(144,112,211,1) 100%)'

    const isAuthPage = !isLoginPage && !isIndexPage && !isNotFoundPage && !isRegistrationPage

    const getBackgroundImage = () => {
        switch(true) {
        case isApprovalPage:
            return `url(${bgApproval})`
        case isProjectsPage:
            return `url(${bgProjects})`
        case isArchivePage:
            return `url(${bgArchive})`
        case isNewProjectPage:
        case isUpdateProjectPage:
            return `url(${bgNewProject})`
        case isPersonalPage:
            return `url(${bgPersonal})`
        }
    }

    return (
        <Box
            sx={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                flex: 1,
                background: !isAuthPage ? bgGradient : '',
                backgroundImage: !isAuthPage
                    ? ''
                    : `linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.85)), ${getBackgroundImage()}`,
                backgroundSize: !isAuthPage ? 'none' : '100%',
            }}
        >
            {isAuthPage && <Header />}

            <Box
                component='main'
                sx={{
                    paddingTop: isAuthPage ? `${headerHeight}px` : 0,
                    mx: 2,
                    alignItems: !isAuthPage ? 'center' : 'none',
                    display: 'flex',
                    flexGrow: 1,
                    justifyContent: 'center',
                }}
            >
                {children}
            </Box>

            <Alert />
        </Box>
    )
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
}
