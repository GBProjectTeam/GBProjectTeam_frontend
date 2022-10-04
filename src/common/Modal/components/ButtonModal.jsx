import { React } from 'react'
import {
    Button,
    Dialog,
    DialogTitle,
    Typography,
    IconButton
} from '@mui/material'
import { Close, Check } from '@mui/icons-material'
import PropTypes from 'prop-types'

export const ButtonModal = (props) => {
    const {
        isOpen,
        disabled,
        allowSubmit,
        label,
        icon,
        onOpen=() =>null,
        onClose =() =>null,
        onSubmit =() =>null,
        title,
        button,
        isOutlintedVariant
    } = props

    const getButton = () => {
        if (button === 'label') {
            return (
                
                <Button
                    startIcon={icon ? { icon } : 'none'}
                    variant={isOutlintedVariant ? 'outlined' : 'contained'}
                    size='small'
                    onClick={onOpen}
                    disabled={disabled}
                    sx={{ borderRadius: '20px' }}
                >
                    {label}
                </Button>
            )
        }

        return (
            <IconButton
                aria-label='edit'
                disabled={disabled}
                size='small'
                onClick={onOpen}
            >
                {icon}
            </IconButton>
        )
    }

    return (
        <>
            {getButton()}

            <Dialog
                open={isOpen}
                onClose={onClose}
                fullWidth
            >
                <DialogTitle
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <IconButton
                        edge='end'
                        size='small'
                        onClick={onClose}
                    >
                        <Close />
                    </IconButton>

                    <Typography
                        noWrap
                        sx={{ textTransform: 'uppercase', fontWeight: 'bold'}}
                    >
                        {title}
                    </Typography>

                    <IconButton
                        edge='end'
                        disabled={!allowSubmit}
                        size='small'
                        onClick={() => onSubmit()}
                        color='info'
                    >
                        <Check />
                    </IconButton>
                </DialogTitle>
            </Dialog>
        </>
    )
}

ButtonModal.propTypes = {
    isOpen: PropTypes.bool,
    disabled:PropTypes.bool,
    allowSubmit:PropTypes.bool,
    label: PropTypes.string,
    icon: PropTypes.node,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    onSubmit: PropTypes.func,
    title: PropTypes.string,
    button: PropTypes.oneOf(['icon' | 'label']),
    isOutlintedVariant: PropTypes.bool
}
