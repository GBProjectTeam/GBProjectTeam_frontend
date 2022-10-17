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
    return (
        <Stack
            width='100%'
            spacing={3}
        >
            <Stack spacing={3} alignItems='center'>
                <Stack
                    direction='row'
                    justifyContent='start'
                    alignItems='center'
                    width='100%'
                    spacing={3}
                >
                    <IconButton>
                        <FileDownloadOutlined />
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
