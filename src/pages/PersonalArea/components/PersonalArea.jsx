import React from 'react'
import {
    Stack,
    Typography
} from '@mui/material'
import { PersonalAvatar } from './PersonalAvatar'
import { Mail } from './Mail'

export const PersonalArea = () => {
    return (
        <Stack
            flex={1}
        >
            <Typography
                variant='h2'
                align='center'
                sx={{ padding: '20px' }}
            >
                Личный кабинет
            </Typography>

            <Typography variant='h4' align='center'>
                Василий Пупкин
            </Typography>

            <Stack
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}
            >
                <PersonalAvatar />

                <Mail />
            </Stack>
        </Stack>
    )
}
