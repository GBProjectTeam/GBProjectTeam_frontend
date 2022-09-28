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
import { margin } from '@mui/system'

export const ProjectInfoCard = () => {
    return (
        <Card >
            
            <CardHeader title='Информация о проекте' />
            <CardContent>
                <Typography
                    sx={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}
                >
                    Автор проекта:
                    
                    <Typography
                        fontWeight='fontWeightBold'
                    >
                        {mainUser.name}
                    </Typography>
                
                </Typography>

                <Typography
                    sx={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                    Статус проекта:
                    
                    <Typography
                        fontWeight='fontWeightBold'
                    >
                        {mainUser.prodStatus}
                    </Typography>
                
                </Typography>

                <Typography
                    sx={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                    Решение:
                    
                    <Typography
                        fontWeight='fontWeightBold'
                        color={mainUser.decision !== 'Отклонено' ? 'green' : 'red'}
                    >
                        {mainUser.decision}
                    </Typography>
                
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
                <CardActions
                    // sx={{
                    //     display:'flex',
                    //     flexDirection:'column',
                    //     margin: '0'
                    // }}
                >
            
                    <Button
                        sx={{ borderRadius: 20, minWidth: 250 }}
                        size='small'
                        variant='outlined'
                    >
                        Изменить решение
                    </Button>
                
                    <Button
                        sx={{ borderRadius: 20, minWidth: 250 }}
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