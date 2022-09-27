import React from 'react'
import {
    Box,
    Button,
    Typography,
    Modal,
    Link,
    Stack
} from '@mui/material'
import ArticleIcon from '@mui/icons-material/Article'

const boxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

export const Documents = () => {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    return (
        <Stack>
            <Stack>
                <Typography variant='h4' >
                    Согласование проекта:
                </Typography>
                <Typography variant='subtitle1'>
                    Контракт по закупке канцелярских товаров
                </Typography>
            </Stack>
            <Button sx={{ borderRadius: 20 }}
                onClick={handleOpen}
                variant='contained'
                startIcon={<ArticleIcon />}
            >
                Документы</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box sx={boxStyle} >
                    <Typography sx={{ mt: 2 }}>
                        <Stack>
                            <Link href='#'>ГК-2018-1</Link>

                            <Link href='#'>ДГ-2019-3</Link>
                        </Stack>

                    </Typography>
                </Box>
            </Modal>
        </Stack>
    )
}