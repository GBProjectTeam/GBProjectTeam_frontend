import React from 'react'
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
    Typography
} from '@mui/material'
import { Add, Clear } from '@mui/icons-material'
import { useGetUsersQuery } from '../../../store/api'
import { Modal, ProgressOverlay } from '../../../common/index'
import { useDispatch } from 'react-redux'
import { addUserId } from '../newProjectPageSlice'

export const MembersNewProject = () => {
    const [projectMemberId, setProjectMemberId ] = React.useState('')
    const [projectMembers, setProjectMember] = React.useState([])
    const [showDeleteMemberModal, setShowDeleteMemberModal] = React.useState(false)

    const { data: users, isFetching } = useGetUsersQuery()

    const generateUserList = (allUsers, checkedUsers) => {
        const isAddedUser = (user) =>
            checkedUsers.find(item => item.id === user._id) && true || false

        const userList = () => {
            return allUsers?.reduce(
                (acc, item) =>
                    isAddedUser(item) ? [...acc] : [...acc, item],
                [])
        }

        return userList()?.map(
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
        () => generateUserList(users, projectMembers), [users, projectMembers]
    )

    const dispatch = useDispatch()

    const addMember = () => {
        const id = projectMemberId
        const user = users?.find(item => item._id === id)
        const name = `${user.lastName} ${user.firstName} ${user.patronymicName}`

        setProjectMember(oldValues => [...oldValues, { id, name }])
        setProjectMemberId(() => '')

        dispatch (
            addUserId(id)
        )
    }

    const deleteMember = (id) => {
        setShowDeleteMemberModal(false)
        const index = projectMembers.findIndex(item => item.id === id)
        if (index !== -1) {
            projectMembers.splice(index, 1)
        }
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
                {projectMembers.map((item) =>
                    <ListItem
                        key={item.id}
                        secondaryAction={
                            <IconButton>
                                {/* <EditOutlined /> */}
                                <Modal
                                    button='icon'
                                    isOpen={showDeleteMemberModal}
                                    isOutlintedVariant
                                    showCheck
                                    allowSubmit
                                    error
                                    onSubmit={() => deleteMember(item.id)}
                                    onOpen={() => setShowDeleteMemberModal(true)}
                                    onClose={() => setShowDeleteMemberModal(false)}
                                    icon={<Clear />}
                                    label='Удалить участника'
                                    title='Удаление участника'
                                    del
                                >
                                    Вы уверены, что хотите удалить участника:
                                    <Typography>
                                        {item.name}
                                    </Typography>
                                </Modal>
                            </IconButton>
                        }
                    >
                        {/* <ListItemAvatar>
                            <Avatar src={item.avatar} />
                        </ListItemAvatar> */}

                        <ListItemText
                            primary={item.name}
                            // secondary={item.role}
                        />
                    </ListItem>
                )}
            </List>

            {isFetching && (
                <ProgressOverlay showProgressOverlay={isFetching} />
            )}
        </Stack>
    )
}
