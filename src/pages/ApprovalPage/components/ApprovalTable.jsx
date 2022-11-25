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
import { green, red } from '@mui/material/colors'
import { useNavigate } from 'react-router-dom'

export const ApprovalTable = () => {
    const navigate = useNavigate()

    return (
        <Stack
            spacing={2}
            justifyContent='space-evenly'
        >
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
                                Согласующий
                            </TableCell>

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
                                Комментарий
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell align='center' >{row.name}</TableCell>

                                <TableCell align='center'>
                                    <Typography
                                        fontWeight='fontWeightBold'
                                        color={row.status !== 'Отклонено' ? green[500] : red[500]}
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

            <Button
                variant='outlined'
                onClick={() => navigate('/project-comments')}
                sx={{
                    width: 'fit-content',
                    borderRadius: 20,
                    alignSelf: 'flex-end'
                }}
            >
                Открыть комментарии
            </Button>
        </Stack>
    )
}

