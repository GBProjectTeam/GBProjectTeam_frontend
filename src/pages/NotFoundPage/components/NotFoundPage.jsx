import React from 'react'
import { Stack, Paper, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const NotFoundPage = () => {
    const navigate = useNavigate()

    React.useEffect(
        () => {
            const isNotFoundPage = location.pathname === '/not-found'

            if (!isNotFoundPage) navigate('/not-found')
        },
        []
    )

    return (
        <Paper
            sx={{
                width: '30vw',
                height: '60vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around'
            }}
            elevation={3}
        >
            <Stack
                justifyContent='space-evenly'
                alignItems='center'
                height='100%'
            >
                <Stack>
                    <Typography
                        variant='h2'
                        textAlign='center'
                    >
                        Error 404:
                    </Typography>

                    <Typography
                        variant='h4'
                        textAlign='center'
                    >
                        Страница не найдена.
                    </Typography>
                </Stack>

                <svg
                    version='1.1'
                    id='Layer_1'
                    xmlns='http://www.w3.org/2000/svg'
                    x='0px'
                    y='0px'
                    width='128px'
                    height='128px'
                    viewBox='0 0 512 512'
                    enableBackground='new 0 0 512 512'
                    className='icon-error'
                >
                    <path
                        d='M256,64c105.875,0,192,86.125,192,192s-86.125,192-192,192S64,361.875,64,256S150.125,64,256,64 M256,32
        C132.281,32,32,132.281,32,256s100.281,224,224,224s224-100.281,224-224S379.719,32,256,32L256,32z M192,144
        c-17.688,0-32,21.5-32,48c0,26.531,14.313,48,32,48s32-21.469,32-48C224,165.5,209.688,144,192,144z M320,144
        c-17.688,0-32,21.5-32,48c0,26.531,14.313,48,32,48s32-21.469,32-48C352,165.5,337.688,144,320,144z M393.594,364.813
        c7.063-5.313,8.5-15.344,3.219-22.406C363.719,298.313,311.094,272,256,272s-107.734,26.313-140.797,70.406
        c-5.313,7.063-3.875,17.094,3.188,22.406c7.078,5.281,17.094,3.844,22.406-3.219C167.859,325.531,210.922,304,256,304
        c45.063,0,88.156,21.531,115.188,57.594C374.344,365.781,379.156,368,384,368C387.344,368,390.719,366.969,393.594,364.813z'
                    />
                </svg>

                <Button
                    color='secondary'
                    variant='contained'
                    sx={{ borderRadius: '20px' }}
                    onClick={() => navigate('/')}
                >
                    На главную
                </Button>
            </Stack>
        </Paper>
    )
}
