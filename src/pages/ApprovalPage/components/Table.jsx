import React from 'react'
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper
} from '@mui/material'

const style={
    topRow:{
        backgroundColor: '#e0e0e0'
    }
}

export const ApprovalTable=()=>{
    function createData(name, status, comment) {
        return { name, status, comment }
    }

    const rows = [
        createData('Петров Виктор Фёдорович', 'отклонено', 'Комментарий'),
        createData('Колмагорская Екатерина Викторовна', 'согласовано', ''),
        createData('Евсюков Дмитрий Анатольевич', 'согласовано', ''),
    ]

    return(
        <TableContainer component={Paper}>
            <Table aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell align='center' width={700} style={style.topRow}>Согласующий</TableCell>
                        <TableCell align='center' style={style.topRow}>Решение</TableCell>
                        <TableCell align='center' style={style.topRow}>Комментарий</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        // eslint-disable-next-line react/jsx-key
                        <TableRow>
                            <TableCell align='center'>{row.name}</TableCell>
                            <TableCell align='center'>{row.status}</TableCell>
                            <TableCell align='center'>{row.comment}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

