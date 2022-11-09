import React from 'react'
import {
    Button,
    DialogContent,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Stack,
    TextField

} from '@mui/material'
import { Modal } from '../../../common/index.js'
import { decisionVariants } from '../constants/decisionsVariants.js'

export const EditUserDecision = () => {
    const [open, setOpen] = React.useState(false)
    const [decision, setDecision] = React.useState('')

    return (
        <>
            <Modal
                button='label'
                isOpen={open}
                isOutlintedVariant
                showCheck
                allowSubmit
                onSubmit={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                label='Изменить решение'
                title='Изменить решение'
            >
                <DialogContent>
                    <FormControl fullWidth>
                        <InputLabel >Решение</InputLabel>
                        <Select
                            id='grouped-select'
                            value={decision}
                            label='Решение'
                            onChange={(event) => setDecision(event.target.value)}
                            defaultValue=''
                        >
                            {decisionVariants.map((item) =>
                                <MenuItem
                                    value={item.name}
                                    key={item.id}
                                >
                                    {item.decision}
                                </MenuItem>
                            )}
                        </Select>
                        <Stack sx={{ display: 'contents' }}>
                            <FormControl margin='dense'>
                                <InputLabel >Документы</InputLabel>
                                <Select
                                    id='grouped-select'
                                    value={decision}
                                    label='Документ'
                                    onChange={(event) => setDecision(event.target.value)}
                                    defaultValue=''
                                >
                                    <MenuItem value={1}>ГК-2018-1</MenuItem>
                                    <MenuItem value={2}>ДГ-2019-3</MenuItem>
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
            </Modal>
        </>
    )

}