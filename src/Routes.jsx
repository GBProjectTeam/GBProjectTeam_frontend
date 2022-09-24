import React from 'react'
import {
    Routes as Switch,
    Route,
} from 'react-router-dom'
import {
    ApprovalPage,
    LoginPage
} from './pages'

export const Routes = () => (
    <Switch>
        <Route
            path='/login'
            element={ <LoginPage /> }
        />
        <Route
            path='/'
            element={ <ApprovalPage /> }
        />
        <Route
            path='/approval'
            element={ <ApprovalPage /> }
        />
    </Switch>
)
