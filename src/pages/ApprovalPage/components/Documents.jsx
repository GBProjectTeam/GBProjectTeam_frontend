import React from 'react'
import {
    Typography,
    Stack,
    Button
} from '@mui/material'
import { Create, DeleteOutline } from '@mui/icons-material'
import { DeleteModal } from '../../../common/index.js'
import { ProjectDocuments } from './ProjectDocuments.jsx'

export const Documents = () => {
    return (
        <Stack spacing={2}>
            <Typography variant='h4'>
                Согласование проекта:
            </Typography>

            <Typography variant='h3' fontWeight='fontWeightBold'>
                Контракт по закупке канцелярских товаров
            </Typography>

            <Stack direction='row' spacing={2}>
                <ProjectDocuments />

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
                    itemName='Контракт по закупке канцелярских товаров?'
                    title='Удаление проекта'
                    button='label'
                    label='Удалить проект'
                    icon={<DeleteOutline />}
                />
            </Stack>
        </Stack>
    )
}