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
    Stack,
} from '@mui/material'
import { Add, Clear } from '@mui/icons-material'
import { useGetUsersQuery } from '../../../store/api'
import { DeleteModal, ProgressOverlay } from '../../../common/index'
import { useDispatch, useSelector } from 'react-redux'
import { newProjectSelector, updateMembers } from '../newProjectSlice'
import { loginSelector } from '../../LoginPage/loginSlice.js'

export const MembersNewProject = () => {
    const [projectMemberId, setProjectMemberId ] = React.useState('')
    const [projectMembers, setProjectMembers] = React.useState([])

    const { project } = useSelector(newProjectSelector)
    const { userId } = useSelector(loginSelector)

    const { data: users, isFetching } = useGetUsersQuery()

    const usersWithoutOwner = React.useMemo(
        () => {
            if (users) {
                return users.filter((user) => user._id !== userId)
            }

            return []
        },
        [users, userId],
    )

    const generateUserList = (allUsers, checkedUsers) => {
        const isAddedUser = (user) =>
            checkedUsers.find(item => item.id === user._id)

        const userList = () =>
            allUsers?.reduce(
                (acc, item) =>
                    isAddedUser(item)
                        ? [...acc]
                        : [...acc, item],
                [])

        const usersForSelect = userList()

        if (usersForSelect?.length === 0) {
            return (
                <MenuItem
                    value={1}
                    key={1}
                >
                    None
                </MenuItem>
            )
        }

        return usersForSelect?.map(
            (item) => (
                <MenuItem
                    value={item._id}
                    key={item._id}
                >
                    {`${item.lastName} ${item.firstName} ${item.patronymicName}`}
                </MenuItem>
            )
        )
    }

    const usersOptions = React.useMemo(
        () => generateUserList(usersWithoutOwner, projectMembers),
        [users, projectMembers],
    )

    const dispatch = useDispatch()

    const addMember = () => {
        const user = users?.find(item => item._id === projectMemberId)
        const name = `${user.lastName} ${user.firstName} ${user.patronymicName}`
        const avatar = `http://194.87.94.182/users/${user._id}/avatar`

        setProjectMembers(
            (members) => [...members, { id: projectMemberId, name, avatar }]
        )

        dispatch (
            updateMembers(
                project.coordinationUsers.length > 0
                    ? [...project.coordinationUsers, { userId: projectMemberId }]
                    : [{ userId: projectMemberId }]
            )
        )

        setProjectMemberId( '')
    }

    const deleteMember = (id) => {
        const index = projectMembers.findIndex(item => item.id === id)

        const updateProjectsMembers = projectMembers

        if (index !== -1) {
            updateProjectsMembers.splice(index, 1)

            setProjectMembers(updateProjectsMembers)
        }

        dispatch(
            updateMembers(
                updateProjectsMembers.length > 0
                    ? updateProjectsMembers.map(
                        (member) => ({ userId: member.id })
                    )
                    : []
            )
        )
    }

    return (
        <Stack
            width='100%'
            spacing={3}
        >
            <Stack
                spacing={3}
                alignItems='center'
            >
                <FormControl fullWidth>
                    <InputLabel id='age-select-label'>
                        Участник
                    </InputLabel>

                    <Select
                        labelId='age-select-label'
                        id='age-select'
                        label='Участник'
                        value={projectMemberId}
                        onChange={(e) =>
                            setProjectMemberId(e.target.value)
                        }
                        endAdornment={
                            <IconButton
                                sx={{ visibility: projectMemberId ? 'visible' : 'hidden' }}
                                onClick={() => setProjectMemberId('')}
                            >
                                <Clear />
                            </IconButton>
                        }
                    >
                        {usersOptions}
                    </Select>
                </FormControl>

                {/* <FormControl fullWidth required>
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
                </FormControl> */}

                <Button
                    variant='outlined'
                    startIcon={<Add />}
                    sx={{ borderRadius: '20px' }}
                    onClick={addMember}
                    disabled={!projectMemberId}
                >
                    добавить участника
                </Button>
            </Stack>

            <List>
                {projectMembers.map((item) => (
                    <ListItem
                        key={item.id}
                        secondaryAction={
                            <DeleteModal
                                onSubmit={() => deleteMember(item.id)}
                                message='Вы уверены, что хотите удалить участника'
                                itemName={item.name}
                                title='Удаление участника'
                                button='icon'
                                icon={<Clear />}
                            />
                        }
                    >
                        <ListItemAvatar>
                            <Avatar src={item.avatar} />
                        </ListItemAvatar>

                        <ListItemText
                            primary={item.name}
                            // secondary={item.role}
                        />
                    </ListItem>
                ))}
            </List>

            {isFetching && (
                <ProgressOverlay showProgressOverlay={isFetching} />
            )}
        </Stack>
    )
}
