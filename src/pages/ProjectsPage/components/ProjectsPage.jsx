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
import { useSelector } from 'react-redux'
import { loginSelector } from '../../LoginPage/loginSlice.js'
import { ProgressOverlay } from '../../../common/index.js'

export const ProjectsPage = () => {
    const navigate = useNavigate()

    const { data: projects, isFetching } = useGetProjectsQuery()

    const { userId } = useSelector(loginSelector)

    const getSettedStatus = (users, id) => {
        return users.filter((element) => element.userId === id)[0]?.settedStatus
    }

    const rows = React.useMemo(
        () => {
            if (!projects) {
                return []
            } else {
                return projects.map((element) => (
                    {
                        id: element._id,
                        project: element.name,
                        deadline: element.deadline.replace(/(\d{4})-(\d{2})-(\d{2}).+/, '$3.$2.$1'),
                        author: `${element.ownerId.firstName} ${element.ownerId.lastName}`,
                        status: element.status,
                        solution: getSettedStatus(element.coordinationUsers, userId)
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
                onRowClick={(params) => navigate(`/approval/${params.id}`)}
            />

            <ProgressOverlay showProgressOverlay={isFetching} />
        </Stack>
    )
}
