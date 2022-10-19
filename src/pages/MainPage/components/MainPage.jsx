import React from 'react'
import { Paper, Stack, Typography, Box, Button } from '@mui/material'
import { CommentCard } from './CommentCard'
import { StatisticItem } from './StatisticItem'
import { fakeComments } from '../constants/fakeComments'
import { fakeStatistic } from '../constants/fakeStatistics'
import { useNavigate } from 'react-router-dom'

export const MainPage = () => {
    const navigate = useNavigate()

    return (
        <Stack
            direction='row'
            justifyContent='center'
            spacing={10}
            sx={{ width: '100%' }}
            alignItems='center'
        >
            <Paper
                sx={{
                    width: '40%',
                    height: '90vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'center'
                }}
                elevation={3}
            >
                <Paper
                    elevation={3}
                    sx={{
                        width: '90%',
                        display: 'flex',
                        justifyContent: 'center',
                        height: '30%'
                    }}
                >
                    <Box sx={{ height: '40%' }}>
                        <img src='src/pages/MainPage/assets/main-page-image.jpg' alt='Фрагмент согласуемого документа' />
                    </Box>
                </Paper>

                <Stack
                    sx={{
                        width: '90%',
                        height: '60%',
                        justifyContent: 'space-between',
                    }}
                >
                    {fakeComments.map((comment) =>
                        <CommentCard key={comment.id} cardData={comment} />
                    )}
                </Stack>
            </Paper>

            <Paper
                sx={{
                    width: '40%',
                    height: '90vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                }}
                elevation={3}
            >
                <Typography
                    variant='h1'
                    textAlign='center'
                    fontFamily='serif'
                    fontSize='82'
                >
                    DocsApproval
                </Typography>

                <Stack
                    sx={{
                        width: '80%',
                        height: '45%',
                        justifyContent: 'space-between'
                    }}
                >
                    {fakeStatistic.map((item) =>
                        <StatisticItem key={item.id} itemData={item} />
                    )}
                </Stack>

                <Stack
                    alignItems='center'
                    spacing={1}
                    sx={{
                        width: '30%',
                        justifyContent: 'space-between'
                    }}
                >
                    <Button
                        color='secondary'
                        variant='outlined'
                        sx={{ borderRadius: '20px' }}
                        fullWidth
                        onClick={() => navigate('/login')}
                    >
                        Авторизироваться
                    </Button>

                    <Button
                        color='secondary'
                        variant='contained'
                        sx={{ borderRadius: '20px' }}
                        fullWidth
                        onClick={() => navigate('/registration')}
                    >
                        Зарегистрироваться
                    </Button>
                </Stack>
            </Paper>
        </Stack>
    )
}