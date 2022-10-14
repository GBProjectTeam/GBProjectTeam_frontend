import React from 'react'
import {
    Routes as Switch,
    Route,
} from 'react-router-dom'
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
            element={<ApprovalPage />}
        />
        <Route
            path='/projects'
            element={<ProjectsPage />}
        />
        <Route
            path='/archive'
            element={<ArchivePage />}
        />
        <Route
            path='/new-project'
            element={<NewProjectPage />}
        />
        <Route
            path='/personalArea'
            element={<PersonalArea />}
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
