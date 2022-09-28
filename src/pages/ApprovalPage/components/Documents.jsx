import React from 'react'
import {
    Button,
    Typography,
    Modal,
    Link,
    Stack
} from '@mui/material'
import { Article } from '@mui/icons-material'

const boxStyle = {
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
                
                <Typography variant='h4' >
                    Согласование проекта:
                </Typography>
                
                <Typography variant='h3' sx={{ fontWeight: 'bold' }}>
                    Контракт по закупке канцелярских товаров
                </Typography>
                
                <Button
                    sx={{
                        borderRadius: 20,
                        align: 'center',
                        maxWidth: 200,
                        m: '10px'
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
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Stack sx={boxStyle} >
                    
                    <Link href='#'>ГК-2018-1</Link>

                    <Link href='#'>ДГ-2019-3</Link>
                
                </Stack>
            
            </Modal>
        </>
    )
}