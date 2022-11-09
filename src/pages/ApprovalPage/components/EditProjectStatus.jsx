import React from 'react'
import {
    DialogContent,
    FormControl,
    InputLabel,
    Select,
    MenuItem,

} from '@mui/material'
import { Modal } from '../../../common'

export const EditProjectStatus = () => {
    const [open, setOpen] = React.useState(false)
    const [status, setStatus] = React.useState('')

    return (
        <>
            <Modal
                button='label'
                isOpen={open}
                isOutlintedVariant
                allowSubmit
                onSubmit={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                label='Изменить статус проекта'
                title='Изменить статус проекта'
                showCheck
            >
                <DialogContent>
                    <FormControl fullWidth>
                        <InputLabel id='demo-simple-select-label'>Статус</InputLabel>
                        <Select
                            labelId='demo-simple-select-label'
                            id='demo-simple-select'
                            value={status}
                            label='Статус'
                            onChange={(event) => setStatus(event.target.value)}
                        >
                            <MenuItem value={10}>На согласовании</MenuItem>
                            <MenuItem value={20}>Согласован</MenuItem>
                            <MenuItem value={30}>Заморожен</MenuItem>
                        </Select>
                    </FormControl>
                </DialogContent>
            </Modal>
        </>
    )

}