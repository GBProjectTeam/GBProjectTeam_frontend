import React from 'react'
import {
    Typography,
    Stack
} from '@mui/material'
import { Article } from '@mui/icons-material'
import { Modal } from '../../../common/Modal/components/Modal'

export const Documents = () => {
    const [open, setOpen] = React.useState(false)

    return (
        <>
            <Stack spacing={2}>

                <Typography variant='h4'>
                    Согласование проекта:
                </Typography>

                <Typography variant='h3' fontWeight='fontWeightBold'>
                    Контракт по закупке канцелярских товаров
                </Typography>

                <Modal
                    button='label'
                    isOpen={open}
                    onOpen={() => setOpen(true)}
                    onClose={() => setOpen(false)}
                    icon={<Article />}
                    label='Документы'

                />
            </Stack>

        </>
    )
}