import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Typography,
    Button,
    Stack,
    Autocomplete,
    TextField,
    CircularProgress,
    IconButton,
    Box,
} from '@mui/material'
import { grey } from '@mui/material/colors'
import {
    Add, ArrowRightAltOutlined,
} from '@mui/icons-material'
import { useGetProjectsByFilterQuery } from '../../../store/api'

export const InputsAppBar = () => {
    const navigate = useNavigate()

    const isNewProjectPage = location.pathname === '/new-project'

    const { data: projects } = useGetProjectsByFilterQuery('status=К согласованию&status=Согласовано&status=Отклонено')

    const [open, setOpen] = React.useState(false)
    const [options, setOptions] = React.useState([])
    const loading = open && options.length === 0

    React.useEffect(() => {
        let active = true

        if (!loading) {
            return undefined
        }

        (async () => {
            if (active) {
                setOptions([...projects])
            }
        })()

        return () => {
            active = false
        }
    }, [loading])

    React.useEffect(() => {
        if (!open) {
            setOptions([])
        }
    }, [open])

    const openProject = (id) => {
        navigate(`/approval/${id}`)
    }

    return (
        <Stack
            direction='row'
            spacing={2}
            flex={2}
            justifyContent='flex-start'
            alignItems='center'
        >
            <Typography
                variant='h4'
                sx={{ color: grey[900] }}
            >
                DocsApproval
            </Typography>

            <Button
                variant='outlined'
                onClick={() => navigate('/projects')}
                sx={{ borderRadius: 20 }}
            >
                Проекты
            </Button>

            <Autocomplete
                sx={{ width: '30%' }}
                open={open}
                onOpen={() => {
                    setOpen(true)
                }}
                onClose={() => {
                    setOpen(false)
                }}
                getOptionLabel={(option) => option.name}
                options={options}
                loading={loading}
                noOptionsText='Не найдено'
                renderOption={(props, option) => (
                    <Box
                        {...props}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            borderBottom: '1px solid black'
                        }}
                    >
                        <Typography sx={{ width: '100%' }}>{option.name}</Typography>

                        <IconButton
                            sx={{ justifySelf: 'end' }}
                            onClick={() => openProject(option._id)}
                        >
                            <ArrowRightAltOutlined />
                        </IconButton>
                    </Box>

                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label='Поиск по проектам'
                        size='small'
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <React.Fragment>
                                    {loading ? <CircularProgress color='inherit' size={20} /> : null}
                                    {params.InputProps.endAdornment}
                                </React.Fragment>
                            ),
                            sx: { borderRadius: '20px' }
                        }}
                    />
                )}
            >

            </Autocomplete>

            <Button
                variant='outlined'
                onClick={() => navigate('/archive')}
                sx={{ borderRadius: 20 }}
            >
                Архив
            </Button>

            <Button
                variant='contained'
                onClick={() => navigate('/new-project')}
                startIcon={<Add />}
                sx={{ borderRadius: 20 }}
                disabled={isNewProjectPage}
            >
                Создать новый
            </Button>
        </Stack>
    )
}