import React from 'react'
import PropTypes from 'prop-types'
import { Modal } from '../../Modal/components/Modal.jsx'
import { Typography } from '@mui/material'

export const DeleteModal = (props) => {
    const {
        onSubmit,
        message,
        itemName,
        icon,
        button,
        label,
        title,
    } = props

    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <Modal
            button={button}
            isOpen={isOpen}
            isOutlintedVariant
            showCheck
            allowSubmit
            error
            onSubmit={() => onSubmit()}
            onOpen={() => setIsOpen(true)}
            onClose={() => setIsOpen(false)}
            icon={icon}
            label={label}
            title={title}
            del
        >
            {message}:
            <Typography>
                {itemName}
            </Typography>
        </Modal>
    )
}

DeleteModal.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,
    itemName: PropTypes.string.isRequired,
    label: PropTypes.string,
    icon: PropTypes.node,
    title: PropTypes.string.isRequired,
    button: PropTypes.oneOf(['icon', 'label']).isRequired,
}
