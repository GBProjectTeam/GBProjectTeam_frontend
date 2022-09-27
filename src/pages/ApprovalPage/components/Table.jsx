/* eslint-disable no-unused-vars */
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

const styleTable = {
    disagree: {
        color: '#ff3d00'
    },
    agree: {
        color: '#4caf50'
    }

}

const rows = [
    {
        id:'01',
        name:'Петров Виктор Фёдорович',
        status:'Отклонено',
        comment:'Пункт 3.1: Изменить количество закупаемого товара с 5 до 10'
    },
    {
        id:'02',
        name:'Колмагорская Екатерина Викторовна',
        status:'Согласовано',
        comment:' '
    },
    {
        id:'03',
        name:'Евсюков Дмитрий Анатольевич',
        status:'Согласовано',
        comment:' '
    }
]
export const ApprovalTable = () => {
    const getColor = (solution) => {
        return solution !== 'Отклонено' ? styleTable.agree : styleTable.disagree
        // if(solution.status==='Отклонено'){
        //     return styleTable.disagree
        // }else{
        //     return styleTable.disagree
        // }
    }
    return (
        <Stack>
            <Typography variant='h4' align='center' sx={{ padding: '20px' }}>
                Лист Согласования
            </Typography>
            <TableContainer component={Paper}>
                <Table aria-label='simple table'>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'
                                width={700}
                                sx={{ backgroundColor: '#e0e0e0',
                                    fontSize: 20 }}
                            >
                                Согласующий</TableCell>
                            <TableCell align='center'
                                width={700}
                                sx={{ backgroundColor: '#e0e0e0',
                                    fontSize: 20 }}
                            >
                                Решение</TableCell>
                            <TableCell align='center'
                                width={700}
                                sx={{ backgroundColor: '#e0e0e0',
                                    fontSize: 20 }}
                            >
                                Комментарий</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell align='center' sx={{ fontWeight: 'bold' }}>{row.name}</TableCell>

                                <TableCell align='center'
                                    style={getColor(row.status)}
                                    sx={{ fontWeight: 'bold' }}>{row.status}</TableCell>

                                <TableCell align='center'>{row.comment}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Stack direction='row' justifyContent='end'>
                <Button variant='outlined'
                    sx={{ width: 300,
                        borderRadius: 20,
                        m:'10px' }}
                >
                    Ответить на комментарий</Button>
            </Stack>
        </Stack>
    )
}

