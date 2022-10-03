import React from 'react'
import {
    AppBar,
    Stack
} from '@mui/material'
import { grey } from '@mui/material/colors'
import { RenderInputs } from '../constants/RenderInputs'
import { RenderMenu } from '../constants/RenderMenu'

export const Header = () => {
    return (
        <AppBar
            sx={{
                background: grey[50]
            }}
        >
            <Stack
                direction='row'
                marginTop='0.5%'
                marginBottom='0.5%'
            >
                {RenderInputs()}
                {RenderMenu()}
            </Stack>
        </AppBar >
    )
}