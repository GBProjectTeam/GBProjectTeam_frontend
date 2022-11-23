import React from 'react'
import {
    Stack,
    Typography,
    Button
} from '@mui/material'
import { ProjectInfoCard } from './ProjectInfoCard'
import { ApprovalTable } from './ApprovalTable'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { ProgressOverlay } from '../../../common'
import { useGetProjectByIdQuery } from '../../../store/api'
import { Create, DeleteOutline } from '@mui/icons-material'
import { DeleteModal } from '../../../common/index.js'
import { ProjectDocuments } from './ProjectDocuments.jsx'

export const ApprovalPage = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const { data: project, isFetching, isError } = useGetProjectByIdQuery(id)
    const memoProject = React.useMemo(
        () => {
            if (project) {
                return project[0]
            }
        },
        [project]
    )
    React.useEffect(
        () => {
            if (isError) {
                navigate('/projects')
            }
        },
        [isError],
    )

    const documents = () => (
        <Stack spacing={2}>
            <Typography variant='h4'>
                Согласование проекта:
            </Typography>

            <Typography variant='h3' fontWeight='fontWeightBold'>
                {memoProject?.name}
            </Typography>

            <Stack direction='row' spacing={2}>
                <ProjectDocuments documents={memoProject} />

                <Button
                    variant='outlined'
                    startIcon={<Create />}
                    sx={{
                        borderRadius: '20px',
                        align: 'center',
                        width: 'fit-content',
                    }}
                >
                    Редактировать проект
                </Button>

                <DeleteModal
                    onSubmit={() => null}
                    message='Вы уверены, что хотите удалить проект'
                    itemName={memoProject?.name}
                    title='Удаление проекта'
                    button='label'
                    label='Удалить проект'
                    icon={<DeleteOutline />}
                />
            </Stack>
        </Stack>
    )

    return (
        <Stack
            spacing={2}
            flex={1}
            justifyContent='space-around'
        >
            <Typography
                variant='h2'
                align='center'
                sx={{ padding: '20px' }}
            >
                Согласование документов
            </Typography>

            <Stack
                direction='row'
                justifyContent='space-evenly'
                alignItems='center'
                spacing={2}
            >
                {documents()}
                <ProjectInfoCard information={memoProject} />
            </Stack>

            <ApprovalTable users={memoProject} />

            <ProgressOverlay showProgressOverlay={isFetching} />
        </Stack>
    )
}