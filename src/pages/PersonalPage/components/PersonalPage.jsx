import React from 'react'
import {
    Stack,
    Typography
} from '@mui/material'
import { PersonalAvatar } from './PersonalAvatar'
import { ModalUpdateUserInfo } from './ModalUpdateUserInfo'
import { useSelector } from 'react-redux'
import { loginSelector } from '../../LoginPage/loginSlice.js'

export const PersonalPage = () => {
    const { lastName, firstName, patronymicName, email } = useSelector(loginSelector)

    return (
        <Stack flex={1}>
            <Typography
                variant='h2'
                align='center'
                sx={{ padding: '20px' }}
            >
                Личный кабинет
            </Typography>

            <Typography variant='h4' align='center'>
                {lastName} {firstName} {patronymicName}
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

                <Stack
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                    spacing={5}
                >
                    <Stack >
                        <Typography variant='h4'>
                            Почта:
                        </Typography>

                        <Typography variant='h4' fontWeight='fontWeightBold'>
                            {email}
                        </Typography>
                    </Stack>

                    <ModalUpdateUserInfo />
                </Stack>
            </Stack>
        </Stack>
    )
}
