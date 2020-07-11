import React from 'react';
import {
  BrowserRouter as Router,
  NavLink as Link,
  Switch,
  Route
} from 'react-router-dom';

import Home from './pages/home';
import OurStory from './pages/our-story';
import Reception from './pages/reception';
import Registry from './pages/registry';
import RSVP from './pages/rsvp';
import NoMatch from './pages/no-match';

import Header from './components/header';
import Footer from './components/footer';


import './App.css';

function App() {
  return (
  	<Router>
	    <div className="App">
	    	<Header />

	    	<Switch>
				  <Route exact path='/' component={Home} />
				  <Route path='/our-story' component={OurStory} />
				  <Route path='/reception' component={Reception} />
				  <Route path='/registry' component={Registry} />
				  <Route path='/rsvp' component={RSVP} />
				  <Route component={NoMatch} />
				</Switch>

				<Footer />
	    </div>
	  </Router>
  );
}

export default App;
