import React from 'react'
import {
    Typography,
    Card,
    CardContent,
    CardActions,
    Button,
    CardHeader
} from '@mui/material'
import { mainUser } from '../constants/mainUser'

export const ProjectInfoCard = () => {
    return (
        <Card >
            <CardHeader title='Информация о проекте' />
            <CardContent>

                <Typography >
                    Автор проекта: {mainUser.name}
                </Typography>

                <Typography >
                    Статус проекта: {mainUser.prodStatus}
                </Typography>

                <Typography >
                    Решение: {mainUser.decision}
                </Typography>

            </CardContent>

            <CardContent
                sx={{
                    minWidth: 275,
                    padding: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}
            >
                <CardActions >
                    <Button sx={{ borderRadius: 20, minWidth: 250 }}
                        size='small'
                        variant='outlined'
                    >
                        Изменить решение
                    </Button>
                </CardActions>
                <CardActions >
                    <Button sx={{ borderRadius: 20, minWidth: 250 }}
                        size='small'
                        variant='outlined'
                    >
                        Изменить статус проекта
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}