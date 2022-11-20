import React from 'react'
import { Button, Divider, Grid, Stack, Typography } from '@mui/material'
import { ProgressOverlay } from '../../../common/index.js'
import { CommonInfoNewProject } from '../../NewProjectPage/components/CommonInfoNewProject.jsx'
import { MembersNewProject } from '../../NewProjectPage/components/MembersNewProject.jsx'
import { DocsNewProject } from '../../NewProjectPage/components/DocsNewProject.jsx'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetProjectByIdQuery, useUpdateProjectMutation } from '../../../store/api'
import { useSelector } from 'react-redux'
import { newProjectSelector } from '../../NewProjectPage/newProjectSlice.js'
import { isEqual } from 'lodash'
import { format } from 'date-fns'

export const EditProjectPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const { data: project, isFetching, isError } = useGetProjectByIdQuery(id)

    const [
        updateProject,
        { isLoading: isUpdateProject, isSuccess: isSuccessUpdate }
    ] = useUpdateProjectMutation()

    const { project: newProject } = useSelector(newProjectSelector)

    React.useEffect(
        () => {
            if (isError) {
                navigate(`/approval/${id}`)
            }
        },
        [isError],
    )

    React.useEffect(
        () => {
            if (isSuccessUpdate) {
                navigate(`/approval/${newProject.projectId}`)
            }
        },
        [isSuccessUpdate],
    )

    const oldProject = React.useMemo(
        () => {
            if (project && project[0]) {
                return {
                    projectId: project[0]._id,
                    deadline: project[0].deadline,
                    coordinationUsers: project[0].coordinationUsers,
                    name: project[0].name,
                    documentsIds: project[0].documentsIds,
                }
            } else {
                return {}
            }
        },
        [project],
    )

    const oldProjectDocsIds = oldProject.documentsIds?.map(
        (doc) => doc._id
    )

    const oldDeadline = oldProject.deadline ? format(new Date(oldProject.deadline), 'yyyy-MM-dd') : null
    const newDeadline = newProject.deadline ? format(new Date(newProject.deadline), 'yyyy-MM-dd') : null

    const isEditedProject = isEqual(
        { ...oldProject, documentsIds: oldProjectDocsIds, deadline: oldDeadline },
        { ...newProject, deadline: newDeadline }
    )

    const isLoading = isFetching || isUpdateProject

    const updatingProject = () => {
        updateProject({
            ...newProject,
            deadline: newDeadline,
        })
    }

    const stepsUpdatingProject = () => (
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
                <MembersNewProject
                    updatedCoordinationUsers={project && project[0] ? project[0].coordinationUsers : []}
                    isUpdate
                />
            </Grid>

            <Grid item xs={4} display='flex' flex={1}>
                <DocsNewProject
                    updatedDocumentsIds={project && project[0] ? project[0].documentsIds : []}
                    isUpdate
                />
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
                Редактирование проекта
            </Typography>

            {stepsUpdatingProject()}

            <Button
                variant='contained'
                sx={{
                    borderRadius: 20,
                    width: 'fit-content',
                    alignSelf: 'center'
                }}
                onClick={updatingProject}
                disabled={isEditedProject}
            >
                Сохранить
            </Button>

            <ProgressOverlay showProgressOverlay={isLoading} />
        </Stack>
    )
}
