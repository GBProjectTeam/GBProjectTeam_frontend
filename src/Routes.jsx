import React from 'react'
import {
    Routes as Switch,
    Route,
} from 'react-router-dom'
import { PrivateRoute } from './common/index.js'
import {
    MainPage,
    ApprovalPage,
    LoginPage,
    ArchivePage,
    NewProjectPage,
    PersonalArea,
    ProjectsPage,
    NotFoundPage,
    RegistrationPage,
} from './pages'

export const Routes = () => (
    <Switch>
        <Route
            path='/'
            element={<MainPage />}
        />
        <Route
            path='/login'
            element={<LoginPage />}
        />
        <Route
            path='/registration'
            element={<RegistrationPage />}
        />
        <Route
            path='/approval'
            element={
                <PrivateRoute>
                    <ApprovalPage />
                </PrivateRoute>
            }
        />
        <Route
            path='/projects'
            element={
                <PrivateRoute>
                    <ProjectsPage />
                </PrivateRoute>
            }
        />
        <Route
            path='/archive'
            element={
                <PrivateRoute>
                    <ArchivePage />
                </PrivateRoute>
            }
        />
        <Route
            path='/new-project'
            element={
                <PrivateRoute>
                    <NewProjectPage />
                </PrivateRoute>
            }
        />
        <Route
            path='/personalArea'
            element={
                <PrivateRoute>
                    <PersonalArea />
                </PrivateRoute>
            }
        />
        <Route
            path='not-found'
            element={<NotFoundPage />}
        />
        <Route
            path='*'
            element={<NotFoundPage />}
        />
    </Switch>
)
