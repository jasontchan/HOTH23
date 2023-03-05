import { createTheme } from '@mui/material/styles'

export const muiTheme = createTheme({
    typography: {
        fontFamily: ['Inter', 'sans-serif'].join(',')
    },
    palette: {
        primary: {
            dark: '#1a1212',
            main: '#c4c4c4',
            light: '#c4c4c4'
        }
    }
})