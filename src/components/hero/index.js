import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import './hero.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: '#fff'
  },
  background: {
    padding: '12% 0',
    backgroundPosition: '0 50%',
    backgroundSize: '100%',
    overflow: 'hidden',
  },
}));

const Hero = (props) => {
  const classes = useStyles();

  const heroClassName = `${classes.root} hero`;

  return (
    <div className={heroClassName} color='secondary'>
      <div className={classes.background} style={{backgroundImage: "url(" + props.bgImage + ")"}}>
        {props.children}
      </div>
    </div>
  );
};

export default Hero;