import React from 'react'
import {
    Button,
    DialogContent,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Stack,
    TextField,
    Card,
    CardHeader,
    CardContent,
    Typography,
    IconButton,
} from '@mui/material'
import { Modal } from '../../../common/index.js'
import { decisionVariants } from '../constants/decisionsVariants.js'
import { Close } from '@mui/icons-material'
import { v4 as uuidv4 } from 'uuid'

export const EditUserDecision = () => {
    const [open, setOpen] = React.useState(false)
    const [decision, setDecision] = React.useState('')
    const [document, setDocument] = React.useState('')
    const [comment, setComment] = React.useState('')
    const [allComments, setAllComments] = React.useState([])

    const comments = React.useMemo(
        () => (
            allComments.length > 0 && allComments.map(
                (commentItem) => (
                    <Card
                        key={commentItem.id}
                        sx={{ my: 2 }}
                    >
                        <CardHeader
                            title={commentItem.document}
                            action={
                                <IconButton onClick={() => deleteComment(commentItem.id)}>
                                    <Close />
                                </IconButton>
                            }
                        />

                        <CardContent>
                            <Typography
                                variant='body2'
                                color='black'
                            >
                                {commentItem.comment}
                            </Typography>
                        </CardContent>
                    </Card>
                )
            )
        ),
        [allComments],
    )

    const onSubmit = (e) => {
        e.preventDefault()

        setAllComments([...allComments, { document, comment, id: uuidv4() }])

        setDocument('')
        setComment('')
    }

    const deleteComment = (id) => {
        const index = allComments.findIndex(item => item.id === id)

        if (index !== -1) {
            const updateAllComments = [...allComments]
            updateAllComments.splice(index, 1)
            setAllComments(updateAllComments)
        }
    }

    return (
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
                    <InputLabel>Решение</InputLabel>
                    <Select
                        value={decision}
                        label='Решение'
                        onChange={(event) => setDecision(event.target.value)}
                    >
                        {React.Children.toArray(
                            decisionVariants.map((item) =>
                                <MenuItem
                                    value={item}
                                >
                                    {item.decision}
                                </MenuItem>
                            )
                        )}
                    </Select>
                </FormControl>

                {decision.decision === 'Отклонено' && (
                    <Stack
                        component='form'
                        onSubmit={onSubmit}
                        my={2}
                        spacing={2}
                    >
                        <FormControl fullWidth>
                            <InputLabel>Документ</InputLabel>
                            <Select
                                value={document}
                                label='Документ'
                                onChange={(event) => setDocument(event.target.value)}
                            >
                                <MenuItem value={'ГК-2018-1'}>
                                    ГК-2018-1
                                </MenuItem>

                                <MenuItem value={'ДГ-2019-3'}>
                                    ДГ-2019-3
                                </MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            fullWidth
                            label='Комментарий'
                            multiline
                            rows={5}
                            value={comment}
                            disabled={!document}
                            onChange={(e) => setComment(e.target.value)}
                        />

                        <Button
                            type='submit'
                            variant='contained'
                            sx={{ borderRadius: '20px' }}
                            fullWidth
                            disabled={!comment}
                            color='secondary'
                        >
                            Добавить комментарий
                        </Button>
                    </Stack>
                )}

                {comments}
            </DialogContent>
        </Modal>
    )

}