import React from 'react'
import PropTypes from 'prop-types'
import {
    Stack,
    TextField,
    FormControl,
    InputLabel,
    FilledInput,
    InputAdornment,
    IconButton, Typography
} from '@mui/material'
import { Modal, ProgressOverlay } from '../../../common/index.js'
import { Create, Visibility, VisibilityOff } from '@mui/icons-material'
import { useUpdateUserMutation } from '../../../store/api'

const initialUpdateUser = {
    lastName: '',
    firstName: '',
    patronymicName: '',
    email: '',
    password: '',
}

const reducer = (state, action) => {
    if (!action.length) {
        return initialUpdateUser
    }

    const attrs = Object.fromEntries(
        action.map(
            (attr) => [attr.id, attr.value],
        )
    )

    return {
        ...state,
        ...attrs,
    }
}

const init = () => {
    return initialUpdateUser
}

export const ModalUpdateUserInfo = ({
    user,
}) => {
    const [open, setOpen] = React.useState(false)
    const [updatedUser, dispatch] = React.useReducer(reducer, initialUpdateUser, init)
    const [oldPassword, setOldPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')
    const [showOldPassword, setShowOldPassword] = React.useState(false)
    const [showPassword, setShowPassword] = React.useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)

    const [updateUser, { isLoading }] = useUpdateUserMutation()

    React.useEffect(
        () => {
            dispatch([
                { id: 'firstName', value: user?.firstName },
                { id: 'lastName', value: user?.lastName },
                { id: 'patronymicName', value: user?.patronymicName },
                { id: 'email', value: user?.email },
            ])
        },
        [],
    )

    const allowSubmit = user?.firstName !== updatedUser.firstName
        || user?.lastName !== updatedUser.lastName
        || user?.patronymicName !== updatedUser.patronymicName
        || user?.email !== updatedUser.email

    const handleClickShowOldPassword = () => {
        setShowOldPassword(!showOldPassword)
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleClickShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword)
    }

    const onSubmit = () => {
        updateUser({
            email: updatedUser.email,
            lastName: updatedUser.lastName,
            firstName: updatedUser.firstName,
            patronymicName: updatedUser.patronymicName,
        })

        setOpen(false)
    }

    return (
        <Modal
            button='label'
            isOutlintedVariant
            isOpen={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            label='???????????????? ????????????'
            showCheck
            allowSubmit={allowSubmit}
            title='???????????????? ????????????'
            onSubmit={onSubmit}
            icon={<Create />}
        >
            <Stack spacing={4}>
                <TextField
                    variant='filled'
                    autoFocus
                    margin='dense'
                    type='text'
                    placeholder='????????????'
                    label='??????????????'
                    fullWidth
                    value={updatedUser.lastName}
                    onChange={(e) => {
                        dispatch([
                            { id: 'lastName', value: e.target.value },
                        ])
                    }}
                />

                <TextField
                    variant='filled'
                    autoFocus
                    margin='dense'
                    type='text'
                    placeholder='????????'
                    label='??????'
                    fullWidth
                    value={updatedUser.firstName}
                    onChange={(e) => {
                        dispatch([
                            { id: 'firstName', value: e.target.value },
                        ])
                    }}
                />

                <TextField
                    variant='filled'
                    autoFocus
                    margin='dense'
                    type='text'
                    placeholder='????????????????'
                    label='????????????????'
                    fullWidth
                    value={updatedUser.patronymicName}
                    onChange={(e) => {
                        dispatch([
                            { id: 'patronymicName', value: e.target.value },
                        ])
                    }}
                />

                <TextField
                    variant='filled'
                    autoFocus
                    margin='dense'
                    type='email'
                    placeholder='pochta@pochta.com'
                    label='??????????'
                    fullWidth
                    value={updatedUser.email}
                    onChange={(e) => {
                        dispatch([
                            { id: 'email', value: e.target.value },
                        ])
                    }}
                />

                <Typography align='center' variant='h7'>
                    ???????????????? ????????????
                </Typography>

                <FormControl variant='filled' sx={{ bgcolor: '#e8f1fe' }}>
                    <InputLabel htmlFor='filled-adornment-old-password'>???????????? ????????????</InputLabel>
                    <FilledInput
                        id='filled-adornment-old-password'
                        type={showOldPassword ? 'text' : 'password'}
                        value={oldPassword}
                        placeholder='???????????? ????????????'
                        onChange={(e) => setOldPassword(e.target.value)}
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton
                                    aria-label='toggle password visibility'
                                    onClick={handleClickShowOldPassword}
                                    edge='end'
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        sx={{ bgcolor: '#e8f1fe', ':hover': { bgcolor: '#e8f1fe' } }}
                    />
                </FormControl>

                <FormControl variant='filled' sx={{ bgcolor: '#e8f1fe' }}>
                    <InputLabel htmlFor='filled-adornment-password'>?????????? ????????????</InputLabel>
                    <FilledInput
                        id='filled-adornment-password'
                        type={showPassword ? 'text' : 'password'}
                        value={updatedUser.password}
                        placeholder='?????????? ????????????'
                        onChange={(e) => {
                            dispatch([
                                { id: 'password', value: e.target.value },
                            ])
                        }}
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton
                                    aria-label='toggle password visibility'
                                    onClick={handleClickShowPassword}
                                    edge='end'
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        sx={{ bgcolor: '#e8f1fe', ':hover': { bgcolor: '#e8f1fe' } }}
                    />
                </FormControl>

                <FormControl variant='filled' sx={{ bgcolor: '#e8f1fe' }}>
                    <InputLabel htmlFor='filled-adornment-confirm-password'>?????????????????????? ?????????? ????????????</InputLabel>
                    <FilledInput
                        id='filled-adornment-confirm-password'
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        placeholder='?????????????????????? ?????????? ????????????'
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton
                                    aria-label='toggle confirm password visibility'
                                    onClick={handleClickShowConfirmPassword}
                                    edge='end'
                                >
                                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        sx={{ bgcolor: '#e8f1fe', ':hover': { bgcolor: '#e8f1fe' } }}
                    />
                </FormControl>
            </Stack>

            {isLoading && (
                <ProgressOverlay showProgressOverlay={isLoading} />
            )}
        </Modal>
    )
}

ModalUpdateUserInfo.propTypes = {
    user: PropTypes.object,
}
