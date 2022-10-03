import React from 'react'
import {
    Routes as Switch,
    Route,
} from 'react-router-dom'
import {
    MainPage,
    ApprovalPage,
    LoginPage
} from './pages'

export const Routes = () => (
    <Switch>
        <Route
            path='/'
            element={ <MainPage /> }
        />
        <Route
            path='/login'
            element={ <LoginPage /> }
        />
        <Route
            path='/approval'
            element={ <ApprovalPage /> }
        />
    </Switch>
)
