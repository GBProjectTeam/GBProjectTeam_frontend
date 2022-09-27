
import React from 'react'
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
    Stack,
    Button,
    Typography
} from '@mui/material'
import { rows } from '../constants/Rows'

export const ApprovalTable = () => {
    return (
        <Stack
            spacing={2}
            justifyContent='space-around'>
            <Typography variant='h4' align='center' >
                Лист Согласования
            </Typography>
            <TableContainer component={Paper}>
                <Table aria-label='simple table'>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'
                                width={700}
                                sx={{
                                    backgroundColor: '#e0e0e0',
                                    fontSize: 20
                                }}
                            >
                                Согласующий</TableCell>
                            <TableCell align='center'
                                width={700}
                                sx={{
                                    backgroundColor: '#e0e0e0',
                                    fontSize: 20
                                }}
                            >
                                Решение</TableCell>
                            <TableCell align='center'
                                width={700}
                                sx={{
                                    backgroundColor: '#e0e0e0',
                                    fontSize: 20
                                }}
                            >
                                Комментарий</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell align='center' >{row.name}</TableCell>

                                <TableCell align='center'>
                                    <Typography
                                        sx={{ fontWeight: 'bold' }}
                                        color={row.status !== 'Отклонено' ? '#4caf50' : '#ff3d00'}
                                    >
                                        {row.status}
                                    </Typography>
                                </TableCell>

                                <TableCell align='center'>{row.comment}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Stack direction='row' justifyContent='end'>
                <Button variant='outlined'
                    sx={{
                        width: 300,
                        borderRadius: 20,
                        m: '10px'
                    }}
                >
                    Открыть на комментарии</Button>
            </Stack>
        </Stack>
    )
}

