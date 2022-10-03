import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/material'

export const StatisticItem = ({ itemData }) => {
    return (
        <Box sx={{ marginBottom: '40px' }}>
            <Typography
                variant='h2'
                fontWeight={200}
                color={'#979797'}
                fontFamily={'serif'}
                fontSize={28}
            >{itemData.text}</Typography>
            <Typography
                variant='p'
                fontFamily={'serif'}
                fontSize={48}
            >{itemData.number}</Typography>
        </Box>
    )
}

StatisticItem.PropTypes = {
    itemData: PropTypes.object
}