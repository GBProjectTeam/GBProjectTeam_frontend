import React from 'react'
import PropTypes from 'prop-types'
import {
    Stack,
    Link
} from '@mui/material'
import { Article } from '@mui/icons-material'
import { Modal } from '../../../common'

export const ProjectDocuments = ({
    button = 'label',
}) => {
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
            button={button}
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

ProjectDocuments.propTypes = {
    button: PropTypes.oneOf(['icon', 'label', 'menuItem']),
}
