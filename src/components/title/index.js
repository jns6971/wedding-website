import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography
} from '@material-ui/core';

import './title.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  imgWrapper: {
    position: 'relative',
    // marginBottom: '-22px',
    // opacity: 0,
    transform: 'translateY(20px)',
    transition: 'all .6s'
  },
  img: {
    height: 'auto',
    maxWidth: '100%'
  },
  title: {
    margin: 0
  },
  subtitle: {
    fontFamily: 'Cormorant, serif',
    fontWeight: '400',
    fontStyle: 'italic',
    fontSize: '21px',
    display: 'block',
    margin: '8px 0 0',
  }
}));

const icons = {
  'test': 'https://via.placeholder.com/55x63.png'
}

const Title = (props) => {
  const classes = useStyles();
  const titleClassName = `${classes.root} title`;
  const titleVariant = props.titleVariant || 'h2';

  const titleArray = props.title.split(' ');

  const icon = props.iconUrl || icons[props.icon];

  return (
    <Container className={titleClassName}>
      {icon && (
        <div className={classes.imgWrapper}>
          <img className={classes.img} src={icon} />
        </div>
      )}
      <Typography className={classes.title} variant={titleVariant} color='primary'>{props.dotsTitle && titleArray.map((val, i) => {
        return (<span className='title-word' key={i}>{val}</span>)
      })}{!props.dotsTitle && props.title}</Typography>
      {props.subtitle && (
        <Typography variant='h4' className={classes.subtitle} color='secondary'>{props.subtitle}</Typography>
      )}
    </Container>
  );
};

export default Title;