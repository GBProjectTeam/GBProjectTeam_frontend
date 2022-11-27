import React from 'react'
import PropTypes from 'prop-types'
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
    Stack,
    Typography
} from '@mui/material'
import { getColor } from '../utils/getColor.js'

export const ApprovalTable = ({ project }) => {
    const users = React.useMemo(
        () => {
            if (project) {
                return project.coordinationUsers
            }
        },
        [project]
    )

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
                                Решение
                            </TableCell>

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
                        {React.Children.toArray(
                            users?.map((user) => (
                                <TableRow>
                                    <TableCell align='center' >
                                        {user.userId.lastName} {user.userId.firstName}
                                    </TableCell>

                                    <TableCell align='center'>
                                        <Typography
                                            fontWeight='fontWeightBold'
                                            color={getColor(user.settedStatus)}
                                        >
                                            {user.settedStatus}
                                        </Typography>
                                    </TableCell>

                                    <TableCell align='center'>
                                        {user?.message}
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Stack>
    )
}

ApprovalTable.propTypes = {
    project: PropTypes.object
}
