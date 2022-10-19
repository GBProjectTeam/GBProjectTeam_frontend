import React from 'react'
import {
    Button,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Stack,
    TextField,
    Typography
} from '@mui/material'
import { Add, ArticleOutlined, EditOutlined, FileDownloadOutlined } from '@mui/icons-material'
import { fakeDocs } from '../constants/fakeDocs'

export const DocsNewProject = () => {
    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <Stack
            width='100%'
            spacing={3}
        >
            <Stack spacing={3} alignItems='center'>
                <Stack
                    component='form'
                    onSubmit={onSubmit}
                    method='POST'
                    direction='row'
                    justifyContent='start'
                    alignItems='center'
                    width='100%'
                    my={0.5}
                    spacing={3}
                >
                    <IconButton component='label' size='large'>
                        <FileDownloadOutlined />
                        <input hidden accept='.doc, .docs, .pdf' multiple type='file' />
                    </IconButton>

                    <Typography>Text.pdf</Typography>
                </Stack>

                <TextField
                    variant='outlined'
                    fullWidth
                    label='Название документа'
                    required
                />

                <Button
                    type='submit'
                    variant='outlined'
                    startIcon={<Add />}
                    sx={{ borderRadius: '20px' }}
                >
                    добавить документ
                </Button>
            </Stack>

            <List>
                {fakeDocs.map((item) =>
                    <ListItem
                        key={item.id}
                        sx={{ my: 2.5 }}
                        secondaryAction={
                            <IconButton>
                                <EditOutlined />
                            </IconButton>
                        }
                    >
                        <ListItemAvatar sx={{ display: 'flex' }}>
                            <ArticleOutlined />
                        </ListItemAvatar>

                        <ListItemText primary={item.name} />
                    </ListItem>
                )}
            </List>
        </Stack>
    )
}
