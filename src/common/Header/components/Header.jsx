import React from 'react'
import {
    AppBar,
    Stack
} from '@mui/material'
import { grey } from '@mui/material/colors'
import { InputsAppBar } from './InputsAppBar'
import { MenuAppBar } from './MenuAppBar'

export const Header = () => {
    return (
        <AppBar sx={{ background: grey[50] }}>
            <Stack
                direction='row'
                m='0.5%'
                justifyContent='space-between'
                flex={1}
            >
                <InputsAppBar />
                <MenuAppBar />
            </Stack>
        </AppBar >
    )
}