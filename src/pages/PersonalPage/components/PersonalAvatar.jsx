import React from 'react'
import {
    Button,
    Avatar,
    Stack
} from '@mui/material'

export const PersonalAvatar = () => {
    return(
        <Stack
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
            spacing={6}
        >
            <Avatar
                alt='Remy Sharp'
                sx={{ width: '50vh', height: '50vh' }}
            />

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
                />
            </Button>
        </Stack>
    )
}