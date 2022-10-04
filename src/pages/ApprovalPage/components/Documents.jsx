import React from 'react'
import {
    Button,
    Typography,
    Modal,
    Link,
    Stack
} from '@mui/material'
import { Article } from '@mui/icons-material'
import { ButtonModal } from '../../../common/Modal/components/ButtonModal'

const stackStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
}

export const Documents = () => {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <>
            <Stack spacing={2}>
                <Typography variant='h4'>
                    Согласование проекта:
                </Typography>

                <Typography variant='h3' fontWeight='fontWeightBold'>
                    Контракт по закупке канцелярских товаров
                </Typography>

                <Button
                    sx={{
                        borderRadius: 20,
                        align: 'center',
                        maxWidth: 200,
                    }}
                    onClick={handleOpen}
                    variant='contained'
                    startIcon={<Article />}
                >
                    Документы
                </Button>
            </Stack>

            <Modal
                open={open}
                onClose={handleClose}
            >
                <Stack sx={stackStyle} >
                    <Link href='#'>ГК-2018-1</Link>
                    <Link href='#'>ДГ-2019-3</Link>
                </Stack>
            </Modal>

            <ButtonModal button='edit' />
        </>
    )
}