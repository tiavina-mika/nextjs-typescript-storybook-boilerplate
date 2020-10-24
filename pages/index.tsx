import React from 'react';
import Head    from 'next/head';
import { createUseStyles } from 'react-jss';

import Main from '../components/home/main/Main';

const useStyles = createUseStyles({
  container: {
    composes: 'flexRow alignCenter justifyCenter',
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </div>
  );
};

export default Home;
