import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Stack,
    Typography,
} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import {
    grey,
    green,
    red
} from '@mui/material/colors'
import { columns } from '../constants/columns'
import { useGetProjectsQuery } from '../../../store/api'
import { useSelector, useDispatch } from 'react-redux'
import { loginSelector } from '../../LoginPage/loginSlice.js'
import { ProgressOverlay } from '../../../common/index.js'
import { saveProject } from '../projectSlice.js'
import { format } from 'date-fns'

export const ProjectsPage = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const { data: projects, isFetching } = useGetProjectsQuery()

    const { userId } = useSelector(loginSelector)

    const getSettedStatus = (users, id) => {
        return users.filter((element) => element.userId._id === id)[0]?.settedStatus
    }

    const handleOnCellClick = (params) => {
        if (params.field === 'actions') {
            dispatch(saveProject(params.row.project))
        } else {
            navigate(`/approval/${params.id}`)
        }
    }

    const rows = React.useMemo(
        () => {
            if (!projects) {
                return []
            } else {
                return projects.map((project) => (
                    {
                        id: project._id,
                        name: project.name,
                        deadline: format(new Date(project.deadline), 'dd.MM.yyyy'),
                        author: `${project.ownerId.firstName} ${project.ownerId.lastName}`,
                        status: project.status,
                        solution: getSettedStatus(project.coordinationUsers, userId),
                        project,
                    }
                ))
            }
        },
        [projects],
    )

    return (
        <Stack
            flexDirection='column'
            flex={1}
        >
            <Typography
                variant='h2'
                align='center'
                sx={{ padding: '20px' }}
            >
                Проекты
            </Typography>

            <DataGrid
                rows={rows}
                columns={columns}
                hideFooter
                sx={{
                    '& .MuiDataGrid-columnHeader': {
                        backgroundColor: grey[300],
                    },
                    '& .MuiDataGrid-columnHeaderTitle': {
                        fontWeight: 'bold',
                    },
                    '& .status-to-be-agreed': {
                        color: green[500],
                        fontWeight: 'bold',
                    },
                    '& .status-frozen': {
                        color: grey[500],
                        fontWeight: 'bold',
                    },
                    '& .decision-agreed': {
                        color: green[500],
                        fontWeight: 'bold',
                    },
                    '& .decision-not-agreed': {
                        color: red[500],
                        fontWeight: 'bold',
                    },
                }}
                getCellClassName={(params) => {
                    if (params.field === 'status' && params.value !== null) {
                        return params.value === 'На согласовании' ? 'status-to-be-agreed' : 'status-frozen'
                    }
                    if (params.field === 'solution' && params.value !== null) {
                        return params.value === 'Согласовано' ? 'decision-agreed' : 'decision-not-agreed'
                    }
                }}
                onCellClick={handleOnCellClick}
            />

            <ProgressOverlay showProgressOverlay={isFetching} />
        </Stack>
    )
}
