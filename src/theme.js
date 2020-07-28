import { createMuiTheme }  from '@material-ui/core/styles';
import muli from './fonts/muli';
import cormorant from './fonts/cormorant';
import learningcurve from './fonts/learningcurve';

const headings = {
	fontFamily: ['muli', 'sans-serif'],
	margin: '25px 0',
	textTransform: 'uppercase',
	fontWeight: 300,
	lineHeight: '1.3em',
	wordWrap: 'break-word'
}

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#818491',
      main: '#121f38',
      hover: '#4caf50',
      contrastText: '#fff'
    },
    secondary: {
    	main: '#c78665',
    	contrastText: '#fff'
    }
  },
  typography: {
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    
    body1: {
    	fontFamily: ['muli', 'sans-serif'],
    	margin: '10px 0',
    	fontSize: '15px',
    	fontWeight: 300,
    	lineHeight: '25px'
    },
    h1: {
    	...headings,
    	fontSize: '40px',
    	letterSpacing: '.095em'
    },
    h2: {
    	...headings,
	    fontSize: '33px;',
    	letterSpacing: '.095em'
    },
    h3: {
    	...headings,
    	fontSize: '17px',
    	letterSpacing: '.055em',
    },
    h4: {
    	...headings,
	    fontFamily: ['cormorant', 'serif'],
	    fontSize: '17px',
	    fontStyle: 'italic',
	    fontWeight: 400,
	    textTransform: 'none',
	    lineHeight: '1.4em'
    },
    h5: {
    	...headings,
    	fontSize: '14px',
	    lineHeight: '1.7em',
	    letterSpacing: '.14em',
	    fontWeight: 400
    },
    h6: {
    	...headings,
    	fontSize: '11px',
	    lineHeight: '1.82em',
	    letterSpacing: '.12em',
	    fontWeight: 600
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [muli]
      },
    },
    MuiToolbar: {
    	regular: {
    		height: '100%',
    	}
    }
  },
})
export default theme;