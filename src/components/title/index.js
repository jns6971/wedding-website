import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography
} from '@material-ui/core';

import './title.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  }
}));


const Title = (props) => {
  const classes = useStyles();
  const titleClassName = `${classes.root} title`;
  const titleVariant = props.titleVariant || 'h2';

  return (
    <Container className={titleClassName}>
      <Typography variant={titleVariant}>{props.titleArray.map((val, i) => {
        return (<span className='title-word' key={i}>{val}</span>)
      })}</Typography>
    </Container>
  );
};

export default Title;