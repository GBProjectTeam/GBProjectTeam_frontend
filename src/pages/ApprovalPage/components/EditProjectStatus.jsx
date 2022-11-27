import React from 'react'
import PropTypes from 'prop-types'
import {
    DialogContent,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material'
import { Modal } from '../../../common'
import { useGetReferenceEnumQuery, useChangeStatusMutation } from '../../../store/api'
import { useSelector } from 'react-redux'
import { projectSelector } from '../../ProjectsPage/projectSlice'
import { ProgressOverlay } from '../../../common/index.js'
import { without } from 'lodash'

export const EditProjectStatus = ({
    button = 'label',
    closeMenu = () => null,
}) => {
    const [open, setOpen] = React.useState(false)
    const [status, setStatus] = React.useState('')
    const [oldStatus, setOldStatus] = React.useState('')

    const [
        changeStatus,
        { isLoading: isUpdateProject, isSuccess: isSuccessUpdate }
    ] = useChangeStatusMutation()

    const { data: projectStatuses, isFetching } = useGetReferenceEnumQuery('ProjectStatus')

    const { project } = useSelector(projectSelector)

    const updatingProject = () => {
        const newStatus = {
            projectId: project._id,
            status,
            message: '',
        }

        changeStatus(newStatus)
    }

    const isAllDecisionsAgreed = () => {
        const usersAgreed = project.coordinationUsers.filter(
            (user) => {
                if (user?.settedStatus === 'Согласовано') {
                    return user
                }
            }
        )

        return usersAgreed.length === project.coordinationUsers.length
    }

    const statuses = React.useMemo(
        () => {
            if (projectStatuses) {
                const allStatuses = Object.values(projectStatuses)

                if (isAllDecisionsAgreed()) {
                    return allStatuses
                } else {
                    return without(allStatuses, 'Согласовано')
                }
            } else {
                return []
            }
        },
        [projectStatuses],
    )

    React.useEffect(
        () => {
            if (open && statuses) {
                statuses.map(
                    (statusEl) => {
                        if (statusEl === project.status) {
                            setStatus(statusEl)
                            setOldStatus(statusEl)
                        }
                    }
                )
            }
        },
        [open, statuses]
    )

    React.useEffect(
        () => {
            if (isSuccessUpdate) {
                setOpen(false)
                closeMenu()
            }
        },
        [isSuccessUpdate],
    )

    const isLoading = isUpdateProject || isFetching

    const allowSubmit = !!status && oldStatus !== status

    return (
        <Modal
            button={button}
            isOpen={open}
            isOutlintedVariant
            allowSubmit={allowSubmit}
            onSubmit={updatingProject}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            label='Изменить статус проекта'
            title='Изменение статуса проекта'
            showCheck
            isStack
        >
            <DialogContent>
                <FormControl fullWidth>
                    <InputLabel id='demo-simple-select-label'>Статус</InputLabel>
                    <Select
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        value={status}
                        label='Статус'
                        onChange={(event) => setStatus(event.target.value)}
                    >
                        {statuses && (
                            React.Children.toArray(
                                statuses.map(
                                    (statusesItem) => (
                                        <MenuItem value={statusesItem}>
                                            {statusesItem}
                                        </MenuItem>
                                    )
                                )
                            )
                        )}
                    </Select>
                </FormControl>
            </DialogContent>

            <ProgressOverlay showProgressOverlay={isLoading} />
        </Modal>
    )
}

EditProjectStatus.propTypes = {
    button: PropTypes.oneOf(['icon', 'label', 'menuItem']),
    closeMenu: PropTypes.func,
}
