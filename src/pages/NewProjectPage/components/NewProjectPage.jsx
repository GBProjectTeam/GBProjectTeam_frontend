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
import { useCreateProjectMutation } from '../../../store/api'
import { useSelector } from 'react-redux'
import { newProjectPageSelector } from '../newProjectPageSlice'
import { ProgressOverlay } from '../../../common'
import { useNavigate } from 'react-router'

export const NewProjectPage = () => {
    const [ createProject, { isLoading } ] = useCreateProjectMutation()

    const { dataForCreateNewProject } = useSelector(newProjectPageSelector)

    const navigate = useNavigate()

    React.useEffect(
        () => {
            createProject()
        },
        [],
    )

    const updateProject = () => {
        createProject(dataForCreateNewProject)
            .then(() => navigate('/approval'))
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
                Создание нового проекта
            </Typography>

            {stepsCreatingNewProject()}

            <Button
                variant='contained'
                sx={{
                    borderRadius: 20,
                    width: 'fit-content',
                    alignSelf: 'center'
                }}
                onClick={updateProject}
            >
                Создать проект
            </Button>

            {isLoading && (
                <ProgressOverlay showProgressOverlay={isLoading} />
            )}
        </Stack>
    )
}