import React from 'react'
import PropTypes from 'prop-types'
import {
    Link,
    List,
    ListItem,
} from '@mui/material'
import { Article } from '@mui/icons-material'
import { Modal } from '../../../common'

export const ProjectDocuments = ({
    button = 'label',
    closeMenu = () => null,
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
                            <ListItem>
                                <Link
                                    underline='none'
                                    sx={{ cursor: 'pointer' }}
                                    target='_blank'
                                    href={`http://194.87.94.182/files/${document.attachedFileId}`}
                                >
                                    {document.attachedFileName}
                                </Link>
                            </ListItem>
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