import React from 'react'
import {
    Stack,
    Typography,
} from '@mui/material'
import { Documents } from './Documents'
import { ProjectInfoCard } from './ProjectInfoCard'
import { ApprovalTable } from './ApprovalTable'

export const ApprovalPage = () => {
    return (
        <Stack
            spacing={2}
            flex={1}
            justifyContent='space-around'
        >
            <Typography
                variant='h2'
                align='center'
                sx={{ padding: '20px' }}
            >
                Согласование документов
            </Typography>

            <Stack
                direction='row'
                justifyContent='space-evenly'
                alignItems='center'
                spacing={2}
            >
                <Documents />
                <ProjectInfoCard />
            </Stack>

            <ApprovalTable />
        </Stack>
    )
}