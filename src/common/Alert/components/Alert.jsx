import React from 'react'
import {
    Snackbar,
    Alert as MuiAlert,
    AlertTitle, IconButton,
} from '@mui/material'
import { showAlertSelector, hideAlert } from '../showAlertSlice.js'
import { Close } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'

export const Alert = () => {
    const { isShowAlert, severity, message } = useSelector(showAlertSelector)

    const dispatch = useDispatch()

    const handleOnClose = () => {
        dispatch(
            hideAlert(),
        )
    }

    return (
        <Snackbar
            open={isShowAlert}
            autoHideDuration={severity !== 'error' ? 6000 : null}
            onClose={handleOnClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
            <MuiAlert severity={severity} sx={{ width: '10vw' }}>
                <AlertTitle sx={{ textTransform: 'capitalize', display: 'flex', justifyContent: 'space-between' }}>
                    {severity}

                    <IconButton
                        edge='end'
                        size='small'
                        onClick={handleOnClose}
                    >
                        <Close />
                    </IconButton>
                </AlertTitle>

                {message}
            </MuiAlert>
        </Snackbar>
    )
}
