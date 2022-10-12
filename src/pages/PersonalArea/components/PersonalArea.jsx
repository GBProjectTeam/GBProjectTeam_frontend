import React from 'react'
import {
    Stack,
    Typography
} from '@mui/material'
import { PersonlAvatar } from './PersonlAvatar'
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
                fontWeight='fontWeightBold'
            >
                Личный кабинет
            </Typography>
        
            <Typography variant='h3' align='center'>
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
                <PersonlAvatar />

                <Mail />

            </Stack>

        </Stack>
    )
}
