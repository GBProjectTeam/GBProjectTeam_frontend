import React from 'react'
import PropTypes from 'prop-types'
import { Header } from '../../../common/index.js'
import { useLocation } from 'react-router-dom'
import { Box } from '@mui/material'
import { headerHeight } from '../../../common/Header/constants/headerHeight.js'

export const MainLayout = ({ children }) => {
    const location = useLocation()

    const isLoginPage = location.pathname === '/login'

    const isIndexPage = location.pathname === '/'

    const isNotFoundPage = location.pathname === '/not-found'

    const isRegistrationPage = location.pathname === '/registration'

    const isApprovalPage = location.pathname === '/approval'

    const isProjectsPage = location.pathname ==='/projects'

    const isArchivePage = location.pathname ==='/archive'

    const isNewProjectPage = location.pathname ==='/new-project'

    const isPersonalPage = location.pathname ==='/personal'

    const bgGradient =
    'linear-gradient(135deg, rgba(105,35,255,1) 0%, rgba(127,77,232,1) 50%, rgba(144,112,211,1) 100%)'

    const isAuthPage = !isLoginPage && !isIndexPage && !isNotFoundPage && !isRegistrationPage

    const getBackgroundImage =(page)=>{
        switch(page){
        case isApprovalPage:
            return 'url(/assets/bg-image-approval-page.jpg)'
        case isProjectsPage:
            return 'url(./assets/bg-image-projects-page.jpg)'
        case isArchivePage:
            return 'url(./assets/bg-image-archive-page.jpg)'
        case isNewProjectPage:
            return 'url(./assets/bg-image-create-new-project-page.jpg)'
        case isPersonalPage:
            return 'url(./assets/bg-image-personal-page.jpg)'
        }
    }

    return (
        <Box
            sx={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                flex: 1,
                background: !isAuthPage ? bgGradient : getBackgroundImage(location.pathname),
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
        </Box>
    )
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
}
