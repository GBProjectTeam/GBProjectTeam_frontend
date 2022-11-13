import React from 'react'
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    Typography,
    IconButton,
    MenuItem,
    Stack
} from '@mui/material'
import { Close, Check } from '@mui/icons-material'
import PropTypes from 'prop-types'

export const Modal = (props) => {
    const {
        isOpen,
        disabled,
        allowSubmit,
        label,
        icon,
        onOpen = () => null,
        onClose = () => null,
        onSubmit = () => null,
        title,
        button,
        isOutlintedVariant,
        children,
        showCheck,
        del,
        isStack,
    } = props

    const getButton = () => {
        if (button === 'label') {
            return (
                <Button
                    startIcon={icon ? icon : ''}
                    variant={isOutlintedVariant ? 'outlined' : 'contained'}
                    size='small'
                    onClick={onOpen}
                    disabled={disabled}
                    sx={{
                        borderRadius: '20px',
                        align: 'center',
                        width: !isStack ? 'fit-content' : null
                    }}
                    color={del ? 'error' : 'info'}
                    fullWidth
                >
                    {label}
                </Button>
            )
        }
        if (button === 'menuItem') {
            return (
                <MenuItem
                    onClick={onOpen}
                    disabled={disabled}
                    sx={{
                        width: '100%'
                    }}
                >
                    <Stack
                        direction='row'
                        spacing={2}
                        flex={1}
                        justifyContent='space-between'
                    >
                        <Typography>
                            {label}
                        </Typography>
                        {icon}
                    </Stack>
                </MenuItem >
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
                        color='error'
                    >
                        <Close />
                    </IconButton>

                    <Typography
                        noWrap
                        sx={{
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            alignSelf: 'center'
                        }}
                    >
                        {title}
                    </Typography>

                    <IconButton
                        edge='end'
                        disabled={!allowSubmit}
                        sx={{ visibility: !showCheck ? 'hidden' : 'none' }
                        }
                        size='small'
                        onClick={() => {
                            onSubmit()
                            onClose()
                        }}
                        color='info'
                    >
                        <Check />
                    </IconButton>
                </DialogTitle>

                <DialogContent>
                    {children}
                </DialogContent>
            </Dialog>
        </>
    )
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    disabled: PropTypes.bool,
    allowSubmit: PropTypes.bool,
    label: PropTypes.string,
    icon: PropTypes.node,
    onOpen: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func,
    title: PropTypes.string.isRequired,
    button: PropTypes.oneOf(['icon', 'label']).isRequired,
    isOutlintedVariant: PropTypes.bool,
    children: PropTypes.node.isRequired,
    showCheck: PropTypes.bool,
    del: PropTypes.bool,
    isStack: PropTypes.bool,
}
