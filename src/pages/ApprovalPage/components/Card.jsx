import React from "react";
import { Typography,
    Card,
    CardContent,
    CardActions,
    Button } from '@mui/material'

const mainUser={
    name: 'Дмитров Иван Александрович',
    prodStatus:'На согласовании',
    decision: 'Отклонено'

}

export const InformCard =()=> {
    return (
        <Card sx={{ minWidth: 275,padding: '15px' }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    Информация о проекте
                </Typography>
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
            <CardContent sx={{ minWidth: 275,padding: '15px' }} >
                <CardActions >
                    <Button sx={{ borderRadius: 20,minWidth: 250 }} size="small" variant='outlined'>Изменить решение</Button>
                </CardActions>
                <CardActions >
                    <Button sx={{ borderRadius: 20, minWidth: 250 }} size="small" variant='outlined'>Изменить статус проекта</Button>
                </CardActions>
            </CardContent>
        </Card>
    );
  }