import React from 'react'
import PropTypes from 'prop-types'
import { Backdrop, CircularProgress } from '@mui/material'
import { styled } from '@mui/material/styles'

const CustomBackdrop = styled(Backdrop)(
    ({ theme }) => ({
        color: theme.palette.background.default,
        zIndex: theme.zIndex.tooltip,
    }),
)

export const ProgressOverlay = (props) => {
    const {
        showProgressOverlay = false,
    } = props

    return (
        <CustomBackdrop open={showProgressOverlay}>
            <CircularProgress color='inherit' />
        </CustomBackdrop>
    )
}

ProgressOverlay.propTypes = {
    showProgressOverlay: PropTypes.bool,
}
