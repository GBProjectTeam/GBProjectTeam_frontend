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
    Stack,
    TextField

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
                Изменить решение
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
                        <Stack sx={{ display: 'none' }}>
                            <FormControl margin='dense'>
                                <InputLabel id='demo-simple-select-label'>Документы</InputLabel>
                                <Select
                                    labelId='demo-simple-select-label'
                                    id='demo-simple-select'
                                    value={decision}
                                    label='Документ'
                                    onChange={(event)=>setDecision(event.target.value)}
                                >
                                    <MenuItem value={10}>ГК-2018-1</MenuItem>
                                    <MenuItem value={20}>ДГ-2019-3</MenuItem>
                                </Select>
                                <TextField
                                    id='outlined-basic'
                                    label='Комментарий'
                                    variant='outlined'
                                    margin='dense'
                                />
                                <Button
                                    sx={{
                                        borderRadius: 20,
                                        minWidth: 250,
                                        alignSelf: 'center'
                                    }}
                                    size='small'
                                    variant='outlined'
                                    disabled
                                >
                                    Добавить комментарий
                                </Button>
                            </FormControl>
                        </Stack>
                    </FormControl>
                </DialogContent>
            </Dialog>
        </>
    )

}