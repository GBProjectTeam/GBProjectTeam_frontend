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
    ProfilePage,
    ProjectsPage,
    NotFoundPage,
    RegistrationPage,
    EditProjectPage,
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
            path='/approval/:id'
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
            path='/profile/:id'
            element={
                <PrivateRoute>
                    <ProfilePage />
                </PrivateRoute>
            }
        />
        <Route
            path='/edit-project/:id'
            element={
                <PrivateRoute>
                    <EditProjectPage />
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
