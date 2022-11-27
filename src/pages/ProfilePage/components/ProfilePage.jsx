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
import { useParams, useNavigate } from 'react-router-dom'
import { useGetUserByIdQuery } from '../../../store/api'
import { ProgressOverlay } from '../../../common/index.js'

export const ProfilePage = () => {
    const [open, setOpen] = React.useState(false)

    const { userId } = useSelector(loginSelector)

    const { id } = useParams()

    const navigate = useNavigate()

    const { data: user, isFetching, isError } = useGetUserByIdQuery(id)

    React.useEffect(
        () => {
            if (isError) {
                navigate('/projects')
            }
        },
        [isError],
    )

    const isAuthUser = userId === id

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
                {user?.lastName} {user?.firstName} {user?.patronymicName}
            </Typography>

            <Stack
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}
            >
                <PersonalAvatar
                    isAuthUser={isAuthUser}
                    user={user}
                />

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
                            {user?.email}
                        </Typography>
                    </Stack>

                    {isAuthUser && (
                        <Stack
                            spacing={1}
                            alignItems='center'
                            flex={1}
                        >
                            <ModalUpdateUserInfo
                                user={user}
                            />

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
                                    {user?.lastName} {user?.firstName}, Вы уверены, что хотите удалить профиль?
                                </Typography>
                            </Modal>
                        </Stack>
                    )}
                </Stack>
            </Stack>

            <ProgressOverlay showProgressOverlay={isFetching} />
        </Stack>
    )
}
