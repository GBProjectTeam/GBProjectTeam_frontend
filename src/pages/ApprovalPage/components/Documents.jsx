import React from 'react'
import {
    Typography,
    Stack,
    Link,
    IconButton
} from '@mui/material'
import { Article } from '@mui/icons-material'
import CreateIcon from '@mui/icons-material/Create'
import { Modal } from '../../../common/Modal/components/Modal'

export const Documents = () => {
    const [open, setOpen] = React.useState(false)

    return (
        <Stack spacing={2}>
            <Typography variant='h4'>
                Согласование проекта:
            </Typography>

            <Typography variant='h3' fontWeight='fontWeightBold'>
                Контракт по закупке канцелярских товаров
            </Typography>

            <Stack direction='row' spacing={2}>
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
                
                <IconButton
                    variant='contained'
                    sx={{
                        borderRadius: '5px',
                        align: 'center',
                        maxWidth: 40,
                    }}
                >
                    <CreateIcon />
                </IconButton>
            </Stack>
        </Stack>
    )
}