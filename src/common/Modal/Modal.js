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
// import { menuSizes } from "common/header/constants/menuSizes"
// import { useAppSelector } from "store/hooks/hooks"
// import { isOpenDrawerSelector, IsOpenDrawerState } from "common/header/isOpenDrawerSlice"
// import { DeleteModal } from "modal/components/DeleteModal"

// export interface ModalProps {
//     children: React.ReactNode
//     isOpen: boolean
//     disabled?: boolean
//     allowSubmit?: boolean
//     icon?: React.ReactNode
//     label?: string
//     onOpen: () => void
//     onClose: () => void
//     onSubmit: () => void
//     title: string
//     button: "icon" | "drawer" | "label"
//     deleteMessage?: string
//     onDelete?: () => void,
//     isSuccess?: boolean
// }

export const Modal = (props) => {
    const {
        isOpen,
        disabled,
        allowSubmit,
        label,
        icon,
        onOpen,
        onClose,
        onSubmit,
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

                {/* <DialogContent>
                    {children}
                </DialogContent> */}

                {/* {onDelete && (
                    <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
                        <DeleteModal
                            deleteMessage={deleteMessage}
                            onDelete={() => onDelete()}
                            isSuccess={isSuccess}
                        />
                    </DialogActions>
                )} */}
            </Dialog>
        </>
    )
}

Modal.propTypes = {
    isOpen: PropTypes.bool,
    disabled:PropTypes.bool,
    allowSubmit:PropTypes.bool,
    label: PropTypes.string,
    icon: PropTypes.node,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    onSubmit: PropTypes.func,
    title: PropTypes.string,
    button: PropTypes.oneOf('icon' | 'label'),
    isOutlintedVariant: PropTypes.bool
}

Modal.defaultProps={
    onOpen:() =>'null',
    onClose:()=>'null',
    onSubmit:()=>'null'

}