import React from 'react'
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    IconButton,
    InputAdornment,
    InputLabel,
    Paper,
    Stack,
    TextField,
    Typography,
    FilledInput,
    Link,
    Tooltip,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useLoginMutation } from '../../../store/api'
import { doRememberMe } from '../loginSlice'
import { setAnotherComp } from '../anotherCompSlice'
import { ProgressOverlay } from '../../../common/index.js'

export const LoginPage = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [isAnotherComp, setIsAnotherComp] = React.useState(false)
    const [showPassword, setShowPassword] = React.useState(false)

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [login, { isSuccess, isError, isLoading }] = useLoginMutation()

    React.useEffect(
        () => {
            if (isError) {
                navigate('/login')
            }

            if (isSuccess) {
                navigate('/projects')
            }
        },
        [isSuccess, isError],
    )

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleChange = (e) => {
        setIsAnotherComp(e.target.checked)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (!isAnotherComp) {
            dispatch(
                doRememberMe(),
            )
        } else {
            dispatch(
                setAnotherComp(),
            )
        }

        login({
            email,
            password,
        })
    }

    const formLogin = () => (
        <Stack
            component='form'
            onSubmit={onSubmit}
            method='POST'
            alignItems='flex-end'
            mx={10}
            spacing={4}
        >
            <TextField
                variant='filled'
                autoFocus
                margin='dense'
                type='email'
                placeholder='pochta@pochta.com'
                label='??????????'
                required
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <Stack width='100%' spacing={1}>
                <FormControl
                    variant='filled'
                    fullWidth
                    sx={{ bgcolor: '#e8f1fe' }}
                    required
                >
                    <InputLabel htmlFor='filled-adornment-password'>????????????</InputLabel>
                    <FilledInput
                        id='filled-adornment-password'
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        placeholder='????????????'
                        onChange={(e) => setPassword(e.target.value)}
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

                <Stack direction='row' spacing={0.5}>
                    <Typography variant='caption'>
                        ???????????? ?????????????
                    </Typography>

                    <Tooltip title='?????? ???????????? ???????????? ?????????????????? ?? ????????????????????????????'>
                        <Link
                            variant='caption'
                            href='#'
                            underline='always'
                        >
                            ????????????????????????
                        </Link>
                    </Tooltip>
                </Stack>
            </Stack>

            <Button
                type='submit'
                variant='contained'
                sx={{ borderRadius: '20px' }}
                fullWidth
                disabled={!email || !password}
                color='secondary'
            >
                ??????????
            </Button>

            <FormControlLabel
                control={
                    <Checkbox
                        checked={isAnotherComp}
                        onChange={handleChange}
                    />
                }
                label='?????????? ??????????????????'
                sx={{ alignSelf: 'flex-start' }}
            />
        </Stack>
    )

    const additionalButtons = () => (
        <Stack
            direction='row'
            spacing={1}
            justifyContent='center'
            mx={10}
        >
            <Button
                variant='outlined'
                sx={{ borderRadius: '20px' }}
                fullWidth
                onClick={() => navigate('/registration')}
                color='secondary'
            >
                ????????????????????????????????????
            </Button>

            <Button
                variant='outlined'
                sx={{ borderRadius: '20px' }}
                fullWidth
                onClick={() => navigate('/')}
                color='secondary'
            >
                ???? ??????????????
            </Button>
        </Stack>
    )

    return (
        <Stack justifyContent='space-evenly' component={Paper} height='70%' width='30%'>
            <Typography
                variant='h4'
                sx={{
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                }}
                mx={10}
            >
                ??????????????????????
            </Typography>

            {formLogin()}

            {additionalButtons()}

            {isLoading && (
                <ProgressOverlay showProgressOverlay={isLoading} />
            )}
        </Stack>
    )
}
