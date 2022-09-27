import React from 'react'
import {
    Stack,
    Box,
    Typography,
} from '@mui/material'
import { Documents } from './Documents'
import { ApprovalTable } from './ApprovalTable'
import { ProjectInformCard } from './ProjectInfoCard'

export const ApprovalPage = () => {
    return (
        <Stack
            spacing={2}
            flex={1}
            justifyContent='space-beetwen'
        >
            <Typography variant='h2' align='center' sx={{ padding: '20px' }}>
                Согласование документов
            </Typography>
            <Stack direction='row'
                justifyContent='space-around'
                alignItems='center'
                spacing={2}>
                <Box>
                    <Documents />
                </Box>
                <ProjectInformCard />
            </Stack>
            <ApprovalTable />
        </Stack>
    )
}