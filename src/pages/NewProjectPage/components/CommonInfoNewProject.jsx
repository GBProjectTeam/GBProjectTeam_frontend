import React from 'react'
import { Stack, TextField } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
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
                label='Название проекта*'
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label='Дедлайн*'
                    value={deadlineValue}
                    onChange={(newValue) => {
                        setDeadlineValue(newValue)
                    }}
                    mask=''
                    renderInput={(params) =>
                        <TextField {...params} />
                    }
                />
            </LocalizationProvider>
        </Stack>
    )
}
