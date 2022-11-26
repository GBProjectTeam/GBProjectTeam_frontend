import React from 'react'
import PropTypes from 'prop-types'
import {
    Button,
    FormControl,
    IconButton,
    InputLabel,
    List,
    ListItem,
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

export const MembersNewProject = ({
    updatedCoordinationUsers,
    isUpdate = false,
}) => {
    const [projectMemberId, setProjectMemberId ] = React.useState('')
    const [projectMembers, setProjectMembers] = React.useState([])

    const { project } = useSelector(newProjectSelector)
    const { userId: ownerId } = useSelector(loginSelector)

    const { data: users, isFetching } = useGetUsersQuery()

    React.useEffect(
        () => {
            if (isUpdate) {
                const members = updatedCoordinationUsers?.map(
                    (user) => {
                        const index = users?.findIndex(
                            (itemUser) => itemUser._id === user.userId._id
                        )

                        if (index) {
                            return users[index]
                        }
                    }
                )

                setProjectMembers(
                    members.map(
                        (member) => ({ id: member?._id, name: `${member?.lastName} ${member?.firstName} ${member?.patronymicName}` })
                    )
                )
            }
        },
        [updatedCoordinationUsers, users],
    )

    const usersWithoutOwner = React.useMemo(
        () => {
            if (users) {
                const filtredUsers = [...users]
                return filtredUsers.filter((user) => user._id !== ownerId)
            }

            return []
        },
        [users, ownerId, projectMembers],
    )

    const usersOptions = React.useMemo(
        () => {
            const isAddedUser = (user) =>
                projectMembers.find(item => item.id === user._id)

            const userList = () =>
                usersWithoutOwner?.reduce(
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
        },
        [users, projectMembers, usersWithoutOwner],
    )

    const dispatch = useDispatch()

    const addMember = () => {
        const user = users?.find(item => item._id === projectMemberId)
        const name = `${user.lastName} ${user.firstName} ${user.patronymicName}`

        setProjectMembers(
            (members) => [...members, { id: projectMemberId, name }]
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

        const updateProjectsMembers = [...projectMembers]

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
                {React.Children.toArray(
                    projectMembers.map((item) => (
                        <ListItem
                            secondaryAction={
                                <DeleteModal
                                    onSubmit={() => deleteMember(item.id)}
                                    message='Вы уверены, что хотите удалить участника'
                                    itemName={item?.name || ''}
                                    title='Удаление участника'
                                    button='icon'
                                    icon={<Clear />}
                                />
                            }
                        >
                            {/* <ListItemAvatar>
                            <Avatar src={item.avatar} />
                        </ListItemAvatar> */}

                            <ListItemText
                                primary={item.name}
                            />
                        </ListItem>
                    ))
                )}
            </List>

            {isFetching && (
                <ProgressOverlay showProgressOverlay={isFetching} />
            )}
        </Stack>
    )
}

MembersNewProject.propTypes = {
    updatedCoordinationUsers: PropTypes.array,
    isUpdate: PropTypes.bool,
}

