import React from 'react'
import {
    Routes as Switch,
    Route,
} from 'react-router-dom'
import {
    ApprovalPage,
    LoginPage
} from './pages'

import { ArchivelPage } from './pages/ArchivePage/components/ArchivePage'
import { ProjectsPage } from './pages/ProjectsPage/components/ProjectsPage'
import { CreateProjectPage } from './pages/CreateProjectPage/components/CreateProjectPage'
import { PersonalArea } from './pages/PersonalArea/components/PersonalArea'

export const Routes = () => (
    <Switch>
        <Route
            path='/login'
            element={<LoginPage />}
        />
        <Route
            path='/'
            element={<ApprovalPage />}
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
            element={<ArchivelPage />}
        />
        <Route
            path='/createProject'
            element={<CreateProjectPage />}
        />
        <Route
            path='/personalArea'
            element={<PersonalArea />}
        />
        <Route
            path='/exit'
            element={<LoginPage />}
        />
    </Switch>
)
