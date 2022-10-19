import React from 'react'
import { Stack, TextField } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import ru from 'date-fns/locale/ru'

export const CommonInfoNewProject = () => {
    const [deadlineValue, setDeadlineValue] = React.useState(null)

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
            />

            <LocalizationProvider
                dateAdapter={AdapterDateFns}
                adapterLocale={ru}
            >
                <DatePicker
                    label='Дедлайн'
                    disablePast
                    value={deadlineValue}
                    onChange={(newValue) => {
                        setDeadlineValue(newValue)
                    }}
                    mask='__.__.____'
                    renderInput={(params) =>
                        <TextField {...params} />
                    }
                />
            </LocalizationProvider>
        </Stack>
    )
}
