import React from 'react'
import PropTypes from 'prop-types'
import {
    Button,
    Avatar,
    Stack,
    Skeleton
} from '@mui/material'
import { useUpdateAvatarMutation } from '../../../store/api'
import { ProgressOverlay } from '../../../common/index.js'

export const PersonalAvatar = ({
    isAuthUser,
    user,
}) => {
    const [ updateAvatar, { isLoading } ] = useUpdateAvatarMutation()

    const uploadNewAvatar = (e) => {
        e.preventDefault()

        const file = e.target.files[0]

        const avatarData = new FormData()
        avatarData.append('file', file)

        updateAvatar(avatarData)
    }

    const renderAvatar = React.useMemo(
        () => (
            isLoading && !user && !user._id
                ? (
                    <Skeleton
                        variant='circular'
                        sx={{ width: '50vh', height: '50vh' }}
                    />
                )
                : (
                    <Avatar
                        alt='Avatar'
                        sx={{ width: '50vh', height: '50vh' }}
                        src={user?.avatar && `http://194.87.94.182/files/${user?.avatar}`}
                    />
                )
        ),
        [isLoading, user],
    )

    return(
        <Stack
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
            spacing={6}
        >

            {renderAvatar}

            {isAuthUser && (
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
            )}

            <ProgressOverlay showProgressOverlay={isLoading} />
        </Stack>
    )
}

PersonalAvatar.propTypes = {
    isAuthUser: PropTypes.bool,
    user: PropTypes.object,
}
