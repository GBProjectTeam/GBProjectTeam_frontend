import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Stack,
    Typography,
} from '@mui/material'
import {
    DataGrid
} from '@mui/x-data-grid'
import { grey } from '@mui/material/colors'
import { rows } from '../constants/rows'
import { columns } from '../constants/columns'

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
                disableVirtualization={true}
                sx={{
                    '& .MuiDataGrid-columnHeader': {
                        backgroundColor: grey[300],
                    },
                    '& .MuiDataGrid-columnHeaderTitle': {
                        fontWeight: 'bold',
                        fontSize: '150%'
                    },
                    '& .MuiDataGrid-cell': {
                        justifyContent: 'center',
                    }
                }}
                onRowClick={(params) => navigate(`/approval/${params.id}`)}
            />
        </Stack>
    )
}
