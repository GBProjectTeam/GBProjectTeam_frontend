import React from 'react'
import { Button,
    Dialog,
    DialogTitle,
    IconButton,
    Typography,
    DialogContent,
    FormControl,
    InputLabel,
    Select,
    MenuItem,

} from '@mui/material'
import { Close, Check } from '@mui/icons-material'

export const ProjectStatusButton=()=>{
    const [open, setOpen] = React.useState(false)
    const [status, setStatus] = React.useState('')

    return(
        <>
            <Button
                sx={{ borderRadius: 20, minWidth: 250 }}
                size='small'
                variant='outlined'
                onClick={() => setOpen(true)}
            >
                Изменить статус проекта
            </Button>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                fullWidth
            >
                <DialogTitle
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <IconButton
                        edge='end'
                        size='small'
                        onClick={() => setOpen(false)}
                        color='error'
                    >
                        <Close />
                    </IconButton>

                    <Typography
                        noWrap
                        sx={{
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            alignSelf: 'center'
                        }}
                    >
                        Изменить статус проекта
                    </Typography>

                    <IconButton
                        edge='end'
                        size='small'
                        color='info'
                    >
                        <Check />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <FormControl fullWidth>
                        <InputLabel id='demo-simple-select-label'>Статус</InputLabel>
                        <Select
                            labelId='demo-simple-select-label'
                            id='demo-simple-select'
                            value={status}
                            label='Статус'
                            onChange={(event)=>setStatus(event.target.value)}
                        >
                            <MenuItem value={10}>На согласовании</MenuItem>
                            <MenuItem value={20}>Закрыт</MenuItem>
                        </Select>
                    </FormControl>
                </DialogContent>
            </Dialog>
        </>
    )

}