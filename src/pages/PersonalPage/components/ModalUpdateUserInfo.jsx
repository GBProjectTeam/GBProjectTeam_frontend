import React from 'react'
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
import { useSelector } from 'react-redux'
import { useUpdateUserMutation } from '../../../store/api'
import { loginSelector } from '../../LoginPage/loginSlice.js'

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

export const ModalUpdateUserInfo = () => {
    const [open, setOpen] = React.useState(false)
    const [updatedUser, dispatch] = React.useReducer(reducer, initialUpdateUser, init)
    const [oldPassword, setOldPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')
    const [showOldPassword, setShowOldPassword] = React.useState(false)
    const [showPassword, setShowPassword] = React.useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)

    const { lastName, firstName, patronymicName, email } = useSelector(loginSelector)

    const [updateUser, { isSuccess, isError, isLoading }] = useUpdateUserMutation()

    React.useEffect(
        () => {
            dispatch([
                { id: 'firstName', value: firstName },
                { id: 'lastName', value: lastName },
                { id: 'patronymicName', value: patronymicName },
                { id: 'email', value: email },
            ])
        },
        [],
    )

    const allowSubmit = firstName !== updatedUser.firstName
        || lastName !== updatedUser.lastName
        || patronymicName !== updatedUser.patronymicName
        || email !== updatedUser.email

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
            label='Изменить данные'
            showCheck
            allowSubmit={allowSubmit}
            title='Изменить данные'
            onSubmit={onSubmit}
            icon={<Create />}
        >
            <Stack spacing={4}>
                <TextField
                    variant='filled'
                    autoFocus
                    margin='dense'
                    type='text'
                    placeholder='Иванов'
                    label='Фамилия'
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
                    placeholder='Иван'
                    label='Имя'
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
                    placeholder='Иванович'
                    label='Отчество'
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
                    label='Почта'
                    fullWidth
                    value={updatedUser.email}
                    onChange={(e) => {
                        dispatch([
                            { id: 'email', value: e.target.value },
                        ])
                    }}
                />

                <Typography align='center' variant='h7'>
                    Изменить пароль
                </Typography>

                <FormControl variant='filled' sx={{ bgcolor: '#e8f1fe' }}>
                    <InputLabel htmlFor='filled-adornment-old-password'>Старый пароль</InputLabel>
                    <FilledInput
                        id='filled-adornment-old-password'
                        type={showOldPassword ? 'text' : 'password'}
                        value={oldPassword}
                        placeholder='Старый пароль'
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
                    <InputLabel htmlFor='filled-adornment-password'>Новый пароль</InputLabel>
                    <FilledInput
                        id='filled-adornment-password'
                        type={showPassword ? 'text' : 'password'}
                        value={updatedUser.password}
                        placeholder='Новый пароль'
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
                    <InputLabel htmlFor='filled-adornment-confirm-password'>Подтвердить новый пароль</InputLabel>
                    <FilledInput
                        id='filled-adornment-confirm-password'
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        placeholder='Подтвердить новый пароль'
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