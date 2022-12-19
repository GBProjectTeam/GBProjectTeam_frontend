import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Typography,
    Button,
    Stack,
    Autocomplete,
    TextField,
    CircularProgress,
    ListItemButton,
    ListItemText,
} from '@mui/material'
import { grey } from '@mui/material/colors'
import {
    Add,
} from '@mui/icons-material'
import { useGetProjectsByFilterQuery } from '../../../store/api'

export const InputsAppBar = () => {
    const navigate = useNavigate()

    const isNewProjectPage = location.pathname === '/new-project'

    const { data: projects } = useGetProjectsByFilterQuery('status=К согласованию&status=Согласовано&status=Отклонено')

    const [open, setOpen] = React.useState(false)
    const [options, setOptions] = React.useState([])
    const [circular, setCircular] = React.useState(false)

    const loading = open && options.length === 0

    React.useEffect(() => {
        let active = true

        if (!loading) {
            return undefined
        }

        (async () => {
            if (active) {
                setOptions([...projects])
                setCircular(false)
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
        setOpen(false)
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
                    setCircular(true)
                }}
                onClose={() => {
                    setOpen(false)
                }}
                getOptionLabel={(option) => option.name}
                options={options}
                loading={loading}
                noOptionsText='Не найдено'
                loadingText={options?.length === 0 && !circular ? 'Нет доступных проектов' : 'Загрузка...'}
                renderOption={(props, option) => (
                    <ListItemButton
                        {...props}
                        key={option._id}
                        onClick={() => openProject(option._id)}
                    >
                        <ListItemText primary={option.name} />
                    </ListItemButton>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label='Поиск и переход к проекту'
                        size='small'
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <>
                                    {circular ? <CircularProgress color='inherit' size={20} /> : null}
                                    {params.InputProps.endAdornment}
                                </>
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