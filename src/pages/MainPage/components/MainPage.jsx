import { Container, Paper, Stack, Typography, Box, Button } from '@mui/material'
import React from 'react'
import { CommentCard } from './CommentCard'
import { StatisticItem } from './StatisticItem'

const fakeComments = [
    {
        id: 0,
        avatar: 'https://i.pravatar.cc/200',
        name: 'Василий Пупкин',
        date: '1 день назад',
        text: 'Повседневная практика показывает, что укрепление и развитие структуры ' +
        ' обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития.'
    },
    {
        id: 1,
        avatar: 'https://i.pravatar.cc/200',
        name: 'Иван Ванин',
        date: '2 дня назад',
        text: 'Не следует, однако забывать, что дальнейшее развитие различных форм деятельности способствует подготовки и реализации форм развития.'
    },
    {
        id: 2,
        avatar: 'https://i.pravatar.cc/200',
        name: 'Фёдор Петров',
        date: '3 дня назад',
        text: 'С другой стороны укрепление и развитие структуры обеспечивает участие в формировании систем массового участия. '
    },
]

const fakeStatistic = [
    {
        id: 0,
        text: 'ПОЛЬЗОВАТЕЛЕЙ',
        number: 5678
    },
    {
        id: 1,
        text: 'ПРОЕКТОВ НА СОГЛАСОВАНИИ',
        number: 2167
    },
    {
        id: 2,
        text: 'ПРОЕКТОВ ВСЕГО',
        number: 3941
    },
]

const authButtonStyle = {
    width: '215px',
    borderRadius: '20px'
}

export const MainPage = () => {
    return (
        <Container maxWidth='xl' >
            <Stack direction='row' spacing={10} sx={{ width: '100%' }}>
                <Paper
                    sx={{
                        width: '50%',
                        height: '90vh',
                        padding: '40px 35px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}
                    elevation={3}>
                    <Paper elevation={3} sx={{ padding: '40px 70px' }}>
                        <img src='src/pages/MainPage/assets/main-page-image.jpg' />
                    </Paper>
                    <div>
                        {fakeComments.map((comment) =>
                            <CommentCard key={comment.id} cardData={comment} />
                        )}
                    </div>
                </Paper>
                <Paper
                    sx={{ width: '50%', padding: '40px 35px', }}
                    elevation={3}>
                    <Typography
                        variant='h1'
                        textAlign={'center'}
                        fontFamily={'serif'}
                        fontSize={82}
                        marginBottom={'80px'}
                    >DocsApproval</Typography>
                    <Box sx={{ padding: '0 80px' }}>
                        {fakeStatistic.map((item) =>
                            <StatisticItem key={item.id} itemData={item} />
                        )}
                    </Box>
                    <Stack alignItems={'center'} gap={'20px'}>
                        <Button color='secondary' sx={authButtonStyle} variant='outlined'>Авторизироваться</Button>
                        <Button color='secondary' sx={authButtonStyle} variant='contained'>Зарегистрироваться</Button>
                    </Stack>
                </Paper>
            </Stack>
        </Container>
    )
}