import React from 'react';
import Typography from '@material-ui/core/Typography';

import Hero from './../../components/hero';
import Title from './../../components/title';

const Home = () => {
  return (
    <main>
    	<Hero bgImage='https://via.placeholder.com/1920x1100.png'>
    		<Typography variant='h1'>Title 1</Typography>
    	</Hero>
    	<Title
    		iconUrl='https://via.placeholder.com/55x63.png'
    		icon='test'
    		dotsTitle={true}
    		title='This is a title'
    		titleVariant='h2'
    		subtitle='subtitle'
    	/>
      <Typography variant='h3'>Title 3</Typography>
      <Typography variant='h4'>Title 4</Typography>
      <Typography variant='h5'>Title 5</Typography>
      <Typography variant='h6'>Title 6</Typography>
      <Typography variant='body1'>Body 1</Typography>
    </main>
  );
};

export default Home;