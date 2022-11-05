import React from 'react'
import {
    Button,
    Stack,
} from '@mui/material'
import {
    LibraryAdd,
    MoreHoriz,
    DeleteOutline,
    Article,
    Message,
    LibraryAddCheck
} from '@mui/icons-material'
import { Modal } from '../../../common/index.js'

export const ProjectActions = () => {
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
            button='label'
            isOutlintedVariant={true}
            isOpen={open}
            onOpen={(event) => {
                event.stopPropagation()
                setOpen(true)
            }}
            onClose={() => setOpen(false)}
            icon={<MoreHoriz />}
            title='Действия'
        >
            <Stack
                direction='column'
                alignItems='flex-start'
            >
                <Button startIcon={<LibraryAdd />}>
                    Изменить статус
                </Button>

                <Button startIcon={<LibraryAddCheck />}>
                    Изменить решение
                </Button>

                <Button startIcon={<Message />}>
                    Открыть комментарии
                </Button>

                <Button startIcon={<Article />}>
                    Документы
                </Button>

                <Button startIcon={<DeleteOutline />}>
                    Удалить проект
                </Button>
            </Stack>
        </Modal>
    )
}