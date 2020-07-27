import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import queryString from 'query-string';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


import Home from './pages/home';
import OurStory from './pages/our-story';
import Reception from './pages/reception';
import Registry from './pages/registry';
import RSVP from './pages/rsvp';
import NoMatch from './pages/no-match';

import Header from './components/header';
import Footer from './components/footer';

import theme from './theme';
import './App.css';

const RSVP_DISPLAY_DATE = '07-Nov-2020';
const SHOW_WEDDING = false;

/**
 * Use current date is before hardcoded string date parameter
 * @param {String}
 * @returns {boolean}
 */
const beforeCurrentDate = (date) => {
	const _date = date || RSVP_DISPLAY_DATE;
	const currentDate = new Date();
	const displayRSVPDate = new Date(Date.parse(_date.replace(/-/g, " ")));

	return displayRSVPDate <= currentDate;
};

/**
 * check if RSVP is in url params
 */
const overrideRSVP = () => {
	const urlParams = queryString.parse(window.location.search);
	return urlParams['rsvp'] !== undefined;
}

/**
 * check if Wedding is in url params
 */
const overrideWedding = () => {
  const urlParams = queryString.parse(window.location.search);
  return urlParams['wedding'] !== undefined;
}

function App() {
  const showRSVP = overrideRSVP() || beforeCurrentDate(RSVP_DISPLAY_DATE);
  const showWedding = overrideWedding() || SHOW_WEDDING;

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
        	<Header showRSVP={showRSVP} showWedding={showWedding} />

        	<Switch>
      		  <Route exact path='/' component={Home} />
      		  <Route path='/our-story' component={OurStory} />
      		  <Route path='/reception' component={Reception} />
      		  <Route path='/registry' component={Registry} />
      		  {showRSVP && 
      		  	<Route path='/rsvp' component={RSVP} />
      		  }
      		  <Route component={NoMatch} />
      		</Switch>

      		<Footer showRSVP={showRSVP} showWedding={showWedding} />
        </div>
       </ThemeProvider>
    </Router>
  );
}

export default App;
