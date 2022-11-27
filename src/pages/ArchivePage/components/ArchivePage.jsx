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
import { useGetProjectsByFilterQuery } from '../../../store/api'
import { format } from 'date-fns'
import { ProgressOverlay } from '../../../common'

export const ArchivePage = () => {
    const navigate = useNavigate()

    const { data: projects, isFetching } = useGetProjectsByFilterQuery('status=Согласовано&status=Отклонено')

    const rows = React.useMemo(
        () => {
            if (!projects) {
                return []
            } else {
                return projects.map((project) => (
                    {
                        id: project._id,
                        project: project.name,
                        closedAt: format(new Date(project.updatedAt), 'dd.MM.yyyy'),
                        author: `${project.ownerId.firstName} ${project.ownerId.lastName}`,
                        status: project.status,
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
                Архив
            </Typography>

            <DataGrid
                rows={rows}
                columns={columns}
                hideFooter={true}
                sx={{
                    '& .MuiDataGrid-columnHeader': {
                        backgroundColor: grey[300],
                    },
                    '& .MuiDataGrid-columnHeaderTitle': {
                        fontWeight: 'bold',
                    },
                    '& .status-agreed': {
                        color: green[500],
                        fontWeight: 'bold',
                    },
                    '& .status-not-agreed': {
                        color: red[500],
                        fontWeight: 'bold',
                    },
                }}
                getCellClassName={(params) => {
                    if (params.field === 'status' && params.value !== null) {
                        return params.value === 'Согласован' ? 'status-agreed' : 'status-not-agreed'
                    }
                    return ''
                }}
                onRowClick={(params) => navigate(`/approval/${params.id}`)}
            />

            <ProgressOverlay showProgressOverlay={isFetching} />
        </Stack>
    )
}
