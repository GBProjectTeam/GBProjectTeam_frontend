import React from 'react'
import PropTypes from 'prop-types'
import {
    List,
    ListItemButton,
    ListItemText,
} from '@mui/material'
import { Article } from '@mui/icons-material'
import { Modal } from '../../../common'

export const ProjectDocuments = ({
    button = 'label',
    closeMenu,
    documents,
}) => {
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
            button={button}
            isOpen={open}
            onOpen={() => setOpen(true)}
            onClose={() => {
                setOpen(false)
                closeMenu()
            }}
            icon={<Article />}
            label='Документы'
            title='Документы проекта'
        >
            <List>
                {React.Children.toArray(
                    documents?.map(
                        (document) => (
                            <ListItemButton>
                                <ListItemText primary={document.attachedFileName} />
                            </ListItemButton>
                        )
                    )
                )}
            </List>
        </Modal>
    )
}

ProjectDocuments.propTypes = {
    button: PropTypes.oneOf(['icon', 'label', 'menuItem']),
    closeMenu: PropTypes.func,
    documents: PropTypes.array,
}