import React from 'react'
import {
    Stack,
    Typography
} from '@mui/material'
import { PersonalAvatar } from './PersonalAvatar'
import { ModalUpdateUserInfo } from './ModalUpdateUserInfo'
import { useSelector } from 'react-redux'
import { loginSelector } from '../../LoginPage/loginSlice.js'
import { Modal } from '../../../common'
import { DeleteOutline } from '@mui/icons-material'

export const PersonalPage = () => {
    const { lastName, firstName, patronymicName, email } = useSelector(loginSelector)

    const [open, setOpen] = React.useState(false)

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

                    <Stack
                        spacing={1}
                        alignItems='center'
                        flex={1}
                    >
                        <ModalUpdateUserInfo />

                        <Modal
                            button='label'
                            isOpen={open}
                            isOutlintedVariant
                            showCheck
                            allowSubmit
                            onSubmit={() => setOpen(false)}
                            onOpen={() => setOpen(true)}
                            onClose={() => setOpen(false)}
                            icon={<DeleteOutline />}
                            label='Удалить профиль'
                            title='Удаление профиля'
                            del
                        >
                            <Typography>
                                {lastName} {firstName}, Вы уверены, что хотите удалить профиль?
                            </Typography>
                        </Modal>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}
