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

export const NewProjectPage = () => {
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
            >
                Создать проект
            </Button>
        </Stack>
    )
}