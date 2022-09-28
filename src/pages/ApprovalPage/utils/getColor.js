import { green, red } from '@mui/material/colors'

export const getColor = (isAgreed) => (
    !isAgreed ? red[500] : green[500]
)
