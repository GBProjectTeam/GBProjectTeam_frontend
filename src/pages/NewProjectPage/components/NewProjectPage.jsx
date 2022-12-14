import React from 'react'
import {
    Button,
    Divider,
    Grid,
    Stack, Typography
} from '@mui/material'
import { CommonInfoNewProject } from './CommonInfoNewProject'
import { MembersNewProject } from './MembersNewProject'
import { DocsNewProject } from './DocsNewProject'
import { useCreateProjectMutation, useUpdateProjectMutation } from '../../../store/api'
import { useDispatch, useSelector } from 'react-redux'
import { newProjectSelector, removeData } from '../newProjectSlice'
import { ProgressOverlay } from '../../../common'
import { useNavigate } from 'react-router'
import { format } from 'date-fns'

export const NewProjectPage = () => {
    const [
        createProject,
        { isLoading: isCreate, isError: isErrorCreate }
    ] = useCreateProjectMutation()
    const [
        updateProject,
        { isLoading: isUpdate, isSuccess: isSuccessUpdate }
    ] = useUpdateProjectMutation()

    const { project } = useSelector(newProjectSelector)

    const navigate = useNavigate()

    const dispatch = useDispatch()

    React.useEffect(
        () => {
            dispatch(
                removeData()
            )

            createProject()
        },
        [],
    )

    React.useEffect(
        () => {
            if (isSuccessUpdate) {
                navigate(`/approval/${project.projectId}`)
            }
        },
        [isSuccessUpdate],
    )

    React.useEffect(
        () => {
            if (isErrorCreate) {
                navigate('/projects')
            }
        },
        [isErrorCreate],
    )

    const isDisabledCreate =
        !project.projectId
        || !project.name
        || !project.coordinationUsers.length > 0
        || !project.documentsIds.length > 0

    const isLoading = isCreate || isUpdate

    const updatingProject = () => {
        updateProject({
            ...project,
            deadline: format(new Date(project.deadline), 'yyyy-MM-dd'),
        })
    }

    const stepsCreatingNewProject = () => (
        <Stack
            direction='row'
            divider={<Divider orientation='vertical' flexItem />}
            flex={1}
            spacing={2}
        >
            <Grid item xs={4} display='flex' flex={1}>
                <CommonInfoNewProject />
            </Grid>

            <Grid item xs={4} display='flex' flex={1}>
                <MembersNewProject />
            </Grid>

            <Grid item xs={4} display='flex' flex={1}>
                <DocsNewProject />
            </Grid>
        </Stack>
    )

    return (
        <Stack
            spacing={2}
            flex={1}
            justifyContent='space-around'
            my={1}
        >
            <Typography
                variant='h2'
                align='center'
            >
                ???????????????? ???????????? ??????????????
            </Typography>

            {stepsCreatingNewProject()}

            <Button
                variant='contained'
                sx={{
                    borderRadius: 20,
                    width: 'fit-content',
                    alignSelf: 'center'
                }}
                onClick={updatingProject}
                disabled={isDisabledCreate}
            >
                ?????????????? ????????????
            </Button>

            {isLoading && (
                <ProgressOverlay showProgressOverlay={isLoading} />
            )}
        </Stack>
    )
}