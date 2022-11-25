import React from 'react'
import PropTypes from 'prop-types'
import {
    DialogContent,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField, Stack,
} from '@mui/material'
import { Modal, ProgressOverlay } from '../../../common/index.js'
import { useGetReferenceEnumQuery, useAddDecisionMutation } from '../../../store/api.js'
import { useSelector } from 'react-redux'
import { projectSelector } from '../../ProjectsPage/projectSlice.js'
import { useNavigate } from 'react-router-dom'
import { loginSelector } from '../../LoginPage/loginSlice.js'

export const EditUserDecision = ({
    button = 'label',
    closeMenu,
}) => {
    const [open, setOpen] = React.useState(false)
    const [oldDecision, setOldDecision] = React.useState('')
    const [decision, setDecision] = React.useState('')
    const [message, setMessage] = React.useState('')

    const { userId } = useSelector(loginSelector)

    const navigate = useNavigate()

    const { data: userDecisons, isFetching, isError } = useGetReferenceEnumQuery('UserDecision')

    const [
        addDecision,
        { isLoading: isUpdateProject, isSuccess: isSuccessUpdate }
    ] = useAddDecisionMutation()

    const { project } = useSelector(projectSelector)

    const decisions = React.useMemo(
        () => {
            if (userDecisons) {
                return Object.values(userDecisons)
            } else {
                return []
            }
        },
        [userDecisons],
    )

    React.useEffect(
        () => {
            if (open && project) {
                project.coordinationUsers.map(
                    (user) => {
                        if (user.userId._id === userId && user.settedStatus !== 'К рассмотрению') {
                            setDecision(user.settedStatus)
                            setOldDecision(user.settedStatus)
                        }
                    }
                )
            }
        },
        [open, project]
    )

    React.useEffect(
        () => {
            if (isError) {
                navigate('/projects')
            }
        },
        [isError],
    )

    React.useEffect(
        () => {
            if (isSuccessUpdate) {
                setOpen(false)
                navigate('/projects')
                closeMenu()
            }
        },
        [isSuccessUpdate],
    )

    const isLoading = isUpdateProject || isFetching

    const allowSubmit = !!decision && oldDecision !== decision

    const updatingProject = () => {
        const newDecision = {
            projectId: project._id,
            status: decision,
            message,
        }

        addDecision(newDecision)
    }

    return (
        <Modal
            button={button}
            isOpen={open}
            isOutlintedVariant
            showCheck
            allowSubmit={allowSubmit}
            onSubmit={updatingProject}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            label='Изменить решение'
            title='Изменение решения'
            isStack
        >
            <DialogContent>
                <Stack spacing={2}>
                    <FormControl fullWidth>
                        <InputLabel>Решение</InputLabel>
                        <Select
                            value={decision}
                            label='Решение'
                            onChange={(event) => setDecision(event.target.value)}
                        >
                            {decisions && (
                                React.Children.toArray(
                                    decisions.map(
                                        (decisionItem) => (
                                            <MenuItem value={decisionItem} >
                                                {decisionItem}
                                            </MenuItem>
                                        )
                                    )
                                )
                            )}
                        </Select>
                    </FormControl>

                    <TextField
                        fullWidth
                        label='Комментарий'
                        multiline
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </Stack>
            </DialogContent>

            <ProgressOverlay showProgressOverlay={isLoading} />
        </Modal>
    )
}

EditUserDecision.propTypes = {
    button: PropTypes.oneOf(['icon', 'label', 'menuItem']),
    closeMenu: PropTypes.func,
}