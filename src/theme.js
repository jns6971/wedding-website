import { createMuiTheme }  from '@material-ui/core/styles'
const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#121f38',
      // dark: will be calculated from palette.primary.main,
      contrastText: '#fff'
    },
    secondary: {
      // light: '#0066ff',
      main: '#c78665',
      // dark: will be calculated from palette.secondary.main,
      // contrastText: '#ffcc00',
    },
  },
})
export default theme