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
    CreateProjectPage,
    PersonalArea,
    ProjectsPage
} from './pages'

export const Routes = () => (
    <Switch>
        <Route
            path='/'
            element={ <MainPage /> }
        />
        <Route
            path='/login'
            element={<LoginPage />}
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
            path='/createProject'
            element={<CreateProjectPage />}
        />
        <Route
            path='/personalArea'
            element={<PersonalArea />}
        />
    </Switch>
)
