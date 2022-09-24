import React from 'react'
import './utils/reset.sass'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './Routes'
import { MainLayout } from './layouts'
import { CssBaseline } from '@mui/material'

export const App = () => (
    <BrowserRouter>
        <CssBaseline />
        <MainLayout>
            <Routes />
        </MainLayout>
    </BrowserRouter>
)
