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
        <AppBar sx={{ background: grey[50] }}>
            <Stack
                direction='row'
                m='0.5%'
                justifyContent='space-between'
                flex={1}
            >
                {RenderInputs()}
                {RenderMenu()}
            </Stack>
        </AppBar >
    )
}