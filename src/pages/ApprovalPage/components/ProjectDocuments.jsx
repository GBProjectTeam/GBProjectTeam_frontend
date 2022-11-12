import React from 'react'
import {
    Stack,
    Link
} from '@mui/material'
import { Article } from '@mui/icons-material'
import { Modal } from '../../../common'

export const ProjectDocuments = () => {
    const [open, setOpen] = React.useState('')
    return (
        <Modal
            button='label'
            isOpen={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            icon={<Article />}
            label='Документы'
            title='Документы проекта'
        >
            <Stack>
                <Link href='#'>ГК-2018-1</Link>
                <Link href='#'>ДГ-2019-3</Link>
            </Stack>
        </Modal>
    )
}