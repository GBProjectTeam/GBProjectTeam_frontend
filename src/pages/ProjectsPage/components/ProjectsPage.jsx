import React from 'react'
import {
    useNavigate
} from 'react-router-dom'
import {
    Stack,
    Typography,
} from '@mui/material'
import {
    DataGrid
} from '@mui/x-data-grid'
import {
    grey,
    green
} from '@mui/material/colors'
import {
    rows
} from '../constants/rows'
import {
    columns
} from '../constants/columns'

export const ProjectsPage = () => {
    const navigate = useNavigate()
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
                hideFooter={true}
                disableColumnMenu={true}
                sx={{
                    '& .MuiDataGrid-columnHeader': {
                        backgroundColor: grey[300],
                    },
                    '& .MuiDataGrid-columnHeaderTitle': {
                        fontWeight: 'bold',
                        fontSize: '150%'
                    },
                    '& .my-status-if-agreeing': {
                        color: green[500],
                        fontWeight: 'bold',
                    },
                    '& .my-status-agreeing-else': {
                        fontWeight: 'bold',
                    },
                }}
                getCellClassName={(params) => {
                    if (params.field === 'status' && params.value !== null) {
                        return params.value === 'На согласовании' ? 'my-status-if-agreeing' : 'my-status-agreeing-else'
                    }
                    return ''
                }}
                onRowClick={(params) => navigate(`/approval/${params.id}`)}
            />
        </Stack>
    )
}
