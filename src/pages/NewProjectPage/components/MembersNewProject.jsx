import React from 'react'
// eslint-disable-next-line max-len
import { Avatar, Button, FormControl, IconButton, InputLabel, List, ListItem, ListItemAvatar, ListItemText, MenuItem, Paper, Select, Stack } from '@mui/material'
import { Add, EditOutlined } from '@mui/icons-material'
import { fakeMembers } from '../constants/fakeMembers'

export const MembersNewProject = () => {
    return (
        <Stack
            width='100%'
            spacing={3}
        >
            <Stack spacing={3} alignItems='center'>
                <FormControl fullWidth>
                    <InputLabel id='age-select-label'>ФИО</InputLabel>
                    <Select
                        labelId='age-select-label'
                        id='age-select'
                        label='ФИО'
                        value='name'
                    >
                        {fakeMembers.map((item) =>
                            <MenuItem
                                value={item.name}
                                key={item.id}
                            >
                                {item.name}
                            </MenuItem>
                        )}

                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id='role-select-label'>Роль</InputLabel>
                    <Select
                        labelId='role-select-label'
                        id='role-select'
                        label='Роль'
                        value='name'
                    >
                        {fakeMembers.map((item) =>
                            <MenuItem
                                value={item.role}
                                key={item.id}
                            >
                                {item.role}
                            </MenuItem>
                        )}

                    </Select>
                </FormControl>

                <Button
                    variant='outlined'
                    startIcon={<Add />}
                    color='secondary'
                    sx={{ borderRadius: '20px' }}
                >
                    добавить участника
                </Button>
            </Stack>

            <List>
                {fakeMembers.map((item) =>
                    <ListItem
                        key={item.id}
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
                        <ListItemAvatar>
                            <Avatar src={item.avatar} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={item.name}
                            secondary={item.role}
                        />
                    </ListItem>
                )}
            </List>
        </Stack>
    )
}
