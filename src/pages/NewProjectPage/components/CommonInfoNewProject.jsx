import React from 'react'
import { Stack, TextField } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import ru from 'date-fns/locale/ru'
import { useDispatch, useSelector } from 'react-redux'
import { newProjectSelector, saveNewProjectName, saveNewProjectDeadline } from '../newProjectSlice'

export const CommonInfoNewProject = () => {
    const { project } = useSelector(newProjectSelector)

    const dispatch = useDispatch()

    return (
        <Stack
            width='100%'
            spacing={3}
        >
            <TextField
                variant='outlined'
                fullWidth
                label='Название проекта'
                required
                value={project.name}
                onChange={(e) => {
                    dispatch (
                        saveNewProjectName(e.target.value)
                    )
                }}
            />

            <LocalizationProvider
                dateAdapter={AdapterDateFns}
                adapterLocale={ru}
            >
                <DatePicker
                    label='Дедлайн'
                    disablePast
                    value={project.deadline ? new Date(project.deadline) : null}
                    onChange={(newValue) => {
                        dispatch (
                            saveNewProjectDeadline(Date.parse(newValue))
                        )
                    }}
                    mask='__.__.____'
                    renderInput={(params) =>
                        <TextField
                            {...params}
                        />
                    }
                />
            </LocalizationProvider>
        </Stack>
    )
}
