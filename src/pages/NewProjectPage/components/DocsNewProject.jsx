import React from 'react'
import { Button, IconButton, List, ListItem, ListItemAvatar, ListItemText, Paper, Stack, TextField, Typography } from '@mui/material'
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
                    <Paper
                        elevation='5'
                        sx={{
                            backgroundColor: '#FFFBFE',
                            borderRadius: '16px',
                            height: '56px',
                            width: '56px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <IconButton>
                            <FileDownloadOutlined color='secondary' />
                        </IconButton>
                    </Paper>

                    <Typography>Text.pdf</Typography>
                </Stack>

                <TextField
                    variant='outlined'
                    fullWidth
                    label='Название документа*'
                />

                <Button
                    variant='outlined'
                    startIcon={<Add />}
                    color='secondary'
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
                            <Paper
                                elevation='5'
                                sx={{
                                    backgroundColor: '#FFFBFE',
                                    borderRadius: '16px',
                                    height: '56px',
                                    width: '56px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <IconButton>
                                    <EditOutlined color='secondary' />
                                </IconButton>
                            </Paper>

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
