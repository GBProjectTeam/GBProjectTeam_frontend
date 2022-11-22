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
    documents
}) => {
    const [open, setOpen] = React.useState(false)
    const documentsArray = React.useMemo(
        () => {
            if (documents) {
                return documents.documentsIds
            }
        },
        [documents]
    )
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
                {documentsArray?.map((array) => (
                    <Link key={array._id}>{array.attachedFileName}</Link>
                ))}
            </Stack>
        </Modal>
    )
}

ProjectDocuments.propTypes = {
    button: PropTypes.oneOf(['icon', 'label', 'menuItem']),
    memoProject: PropTypes.object
}
