import { green, red, grey } from '@mui/material/colors'

export const getColor = (value) => {
    switch (value) {
    case 'Согласовано':
        return green[500]
    case 'Отклонено':
        return red[500]
    default:
        return grey[500]
    }
}
