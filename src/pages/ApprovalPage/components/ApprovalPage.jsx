import React from 'react'
import {
    Stack,
    Box,
    Typography,
    Button,
} from '@mui/material'
import { Documents } from './Documents';
import { ApprovalTable } from './Table'
import { InformCard } from './Card';

const styles = {
    button: {
        margin: 5
    },
    table: {
        margin: 20,
        backgroundImage: `url(${'./BackImage.png'})`,
    },
    padding: {
        padding: 20
    },
    status: {
        color: '#ff3d00'
    }

};

export const ApprovalPage = () => {
    return (

        <Stack spacing={2} flex={1} style={styles.table} >
            <Typography variant='h2' align='center' style={styles.padding}>
                Согласование документов
            </Typography>
            <Stack direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={2}>
                <Box >
                    <Typography variant='h4' >
                        Согласование проекта:
                    </Typography>
                    <Typography variant='subtitle1' gutterBottom variant='h3'>
                        Контракт по закупке канцелярских товаров
                    </Typography>
                    <Documents />
                </Box>
                <InformCard />
            </Stack>
            <Box>
                <Typography variant='h4' align='center' style={styles.padding}>
                    Лист Согласования
                </Typography>
                <ApprovalTable />
            </Box>
            <Stack direction="row" justifyContent="end">
                <Button variant='outlined'
                    sx={{ width: 300,
                        borderRadius: 20 }}
                    style={styles.answerButton}>Ответить на комментарий</Button>
            </Stack>
        </Stack>
    )
}