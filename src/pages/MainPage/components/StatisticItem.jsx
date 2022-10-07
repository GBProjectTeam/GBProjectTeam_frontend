import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/material'

export const StatisticItem = ({ itemData }) => {
    return (
        <Box>
            <Typography
                variant='h2'
                fontWeight='200'
                color='#979797'
                fontFamily='serif'
                fontSize='28px'
            >
                {itemData.text}
            </Typography>

            <Typography
                variant='p'
                fontFamily='serif'
                fontSize='48px'
            >
                {itemData.number}
            </Typography>
        </Box>
    )
}

StatisticItem.propTypes = {
    itemData: PropTypes.object.isRequired
}