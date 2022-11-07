import React from 'react'
import { Stack, TextField } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import ru from 'date-fns/locale/ru'
import { useDispatch, useSelector } from 'react-redux'
import { newProjectPageSelector } from '../newProjectPageSlice'
import { saveNewProjectFormValues } from '../newProjectPageSlice'

export const CommonInfoNewProject = () => {
    const { dataForCreateNewProject } = useSelector(newProjectPageSelector)

    const dispatch = useDispatch()

    const newProjectOnChange = (value, name) => {
        dispatch (
            saveNewProjectFormValues({ name, value })
        )
    }

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
                value={dataForCreateNewProject.projectName}
                onChange={
                    (e) => newProjectOnChange(e.target.value, 'projectName')
                }
            />

            <LocalizationProvider
                dateAdapter={AdapterDateFns}
                adapterLocale={ru}
            >
                <DatePicker
                    label='Дедлайн'
                    disablePast
                    value={new Date(dataForCreateNewProject.deadline) || null}
                    onChange={(newValue) =>
                        newProjectOnChange(Date.parse(newValue), 'deadline')
                    }
                    mask='__.__.____'
                    renderInput={(params) =>
                        <TextField {...params} />
                    }
                />
            </LocalizationProvider>
        </Stack>
    )
}
