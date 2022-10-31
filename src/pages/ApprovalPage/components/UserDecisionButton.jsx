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

export const UserDecisionButton=()=>{
    const [open, setOpen] = React.useState(false)
    const [decision, setDecision] = React.useState('')

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
                        Изменить решение
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
                        <InputLabel id='demo-simple-select-label'>Решение</InputLabel>
                        <Select
                            labelId='demo-simple-select-label'
                            id='demo-simple-select'
                            value={decision}
                            label='Решение'
                            onChange={(event)=>setDecision(event.target.value)}
                        >
                            <MenuItem value={10}>Согласовано</MenuItem>
                            <MenuItem value={20}>Откланено</MenuItem>
                        </Select>
                    </FormControl>
                </DialogContent>
            </Dialog>
        </>
    )

}