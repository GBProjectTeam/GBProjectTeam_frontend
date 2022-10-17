import React from 'react'
import {
    Avatar,
    Button,
    FormControl,
    IconButton,
    InputLabel,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    MenuItem,
    Select,
    Stack
} from '@mui/material'
import { Add, EditOutlined } from '@mui/icons-material'
import { fakeMembers } from '../constants/fakeMembers'
import { fakeRoles } from '../constants/fakeRoles'

export const MembersNewProject = () => {
    return (
        <Stack
            width='100%'
            spacing={3}
        >
            <Stack spacing={3} alignItems='center'>
                <FormControl fullWidth>
                    <InputLabel id='age-select-label'>
                        ФИО
                    </InputLabel>

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
                    <InputLabel id='role-select-label'>
                        Роль
                    </InputLabel>

                    <Select
                        labelId='role-select-label'
                        id='role-select'
                        label='Роль'
                        value='role'
                    >
                        {fakeRoles.map((item) =>
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
                            <IconButton>
                                <EditOutlined />
                            </IconButton>
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
