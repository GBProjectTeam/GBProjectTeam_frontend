

import React from 'react'
import {
    Stack,
    Box,
    Typography,
    Button,
    Paper
} from '@mui/material'
import ArticleIcon from '@mui/icons-material/Article';
import { ApprovalTable } from './Table'

const styles = {
    button: {
        margin: 5
    },
    table: {
        margin: 20
    },
    padding: {
        padding: 20
    }
};


export const ApprovalPage = () => {
    return (

        <Stack spacing={2} flex={1} style={styles.table} >
            <Typography variant='h2' align='center'>
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
                    <Typography variant='subtitle1' gutterBottom>
                        Контракт по закупке канцелярских товаров
                    </Typography>
                    <Button variant='outlined' startIcon={<ArticleIcon />}>Документы</Button>
                </Box>
                <Box
                    sx={{
                        width: 300,
                        height: 350,
                    }}
                    component={Paper}
                    style={styles.padding}
                >
                    <Typography variant='h5' align='center'>
                        Информация о проекте
                    </Typography>
                    <Stack direction="row">
                        <Typography variant='h7' >
                            Управляющий проектом:
                        </Typography>
                        <Typography gutterBottom>
                            Иванов Иван Иванович
                        </Typography>
                    </Stack>
                    <Stack direction="row">
                        <Typography variant='h7' >
                            Статус проекта:
                        </Typography>
                        <Typography gutterBottom>
                            отклонен
                        </Typography>
                    </Stack>
                    <Stack direction="row">
                        <Typography variant='h7' >
                            Решение:
                        </Typography>
                        <Typography gutterBottom>
                            отклонен
                        </Typography>
                    </Stack>
                    <Stack>
                        <Button variant='outlined' style={styles.button}>Изменение решения</Button>
                        <Button variant='outlined' >Изменение статуса проекта</Button>
                    </Stack>
                </Box>
            </Stack>
            <Box>
                <Typography variant='h5' align='center'>
                    Лист Согласования
                </Typography>
                <ApprovalTable />
            </Box>
            <Stack direction="row" justifyContent="end">
                <Button variant='outlined'
                    sx={{ width: 300 }}
                    style={styles.answerButton}>Ответить на комментарий</Button>
            </Stack>
        </Stack>
    )
}