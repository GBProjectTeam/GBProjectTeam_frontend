import React from 'react'
import {
    Stack,
    Typography,
    TextField
} from '@mui/material'
import { Modal } from '../../../common/Modal/components/Modal'

export const Mail = () => {
    const [open, setOpen] = React.useState(false)

    return (
        <Stack
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
            spacing={5}
        >
            <Stack >
                <Typography variant='h4'>
                    Почта:
                </Typography>

                <Typography variant='h4' fontWeight='fontWeightBold'>
                    vasiliy-pupkin@gmail.com
                </Typography>
            </Stack>

            <Modal
                button='label'
                isOutlintedVariant
                isOpen={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                label='Изменить данные'
                showCheck
                title='Изменить данные'
            >
                <TextField
                    id='outlined-basic'
                    label='Почта'
                    variant='outlined'
                    fullWidth
                />
            </Modal>
        </Stack>
    )
}