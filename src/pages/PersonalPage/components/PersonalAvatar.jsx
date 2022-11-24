import React from 'react'
import {
    Button,
    Avatar,
    Stack,
    Skeleton
} from '@mui/material'
import { useUpdateAvatarMutation } from '../../../store/api'
import { useSelector } from 'react-redux'
import { loginSelector } from '../../LoginPage/loginSlice'

export const PersonalAvatar = () => {
    const { avatar } = useSelector(loginSelector)
    const [ updateAvatar, { isLoading } ] = useUpdateAvatarMutation()

    const uploadNewAvatar = (e) => {
        e.preventDefault()

        const file = e.target.files[0]
        const avatarData = new FormData()
        avatarData.append('file', file)

        updateAvatar(avatarData)
    }

    return(
        <Stack
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
            spacing={6}
        >

            {
                isLoading ?
                    <Skeleton
                        variant='circular'
                        sx={{ width: '50vh', height: '50vh' }}
                    /> :
                    <Avatar
                        alt='Remy Sharp'
                        sx={{ width: '50vh', height: '50vh' }}
                        src={avatar}
                    />
            }

            <Button
                variant='outlined'
                component='label'
                sx={{
                    borderRadius: '20px',
                    align: 'center',
                    width: 'fit-content',
                }}
            >
                Изменить фото

                <input
                    hidden
                    accept='image/*'
                    multiple type='file'
                    onChange={(e) => uploadNewAvatar(e)}
                />
            </Button>
        </Stack>
    )
}