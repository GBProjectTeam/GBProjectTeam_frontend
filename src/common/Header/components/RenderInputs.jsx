import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Typography,
    Button,
    TextField,
    InputAdornment,
    Stack
} from '@mui/material'
import { grey } from '@mui/material/colors'
import {
    Add,
    Search
} from '@mui/icons-material'

export const RenderInputs = () => {
    const navigate = useNavigate()
    return (
        <Stack
            direction='row'
            spacing={2}
            flex={2}
            justifyContent='flex-start'
            alignItems='center'
        >
            <Typography
                variant='h4'
                sx={{
                    color: grey[900]
                }}
            >
                DocsApproval
            </Typography>

            <Button
                variant='outlined'
                onClick={() => navigate('/projects')}
                sx={{
                    borderRadius: 20
                }}
            >
                Проекты
            </Button>

            <TextField
                placeholder='Поиск по проектам'
                size='small'
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            <Search />
                        </InputAdornment>
                    ),
                    sx: { borderRadius: '20px' }
                }}
                variant='outlined'
                sx={{
                    width: '30%'
                }}
            />

            <Button
                variant='outlined'
                onClick={() => navigate('/archive')}
                sx={{
                    borderRadius: 20
                }}
            >
                Архив
            </Button>

            <Button
                variant='contained'
                onClick={() => navigate('/createProject')}
                startIcon={<Add />}
                sx={{
                    borderRadius: 20
                }}
            >
                Создать новый
            </Button>
        </Stack>
    )
}