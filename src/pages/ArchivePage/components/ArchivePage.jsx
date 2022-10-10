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

export const ArchivePage = () => {
    const navigate = useNavigate()
    return (
        <Stack
            flexDirection='column'
            direction='flex'
            flex={1}
            sx={{
                '& .header-class-name': {
                    fontWeight: 'bold',
                    backgroundColor: grey[300],
                    border: 1,
                    fontSize: '150%',
                },
                '& .cell-class-name': {
                    border: 1,
                },
            }}
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
                    borderTop: 1
                }}
                onRowClick={(params) => navigate(`/approval/${params.id}`)}
            />
        </Stack>
    )
}
