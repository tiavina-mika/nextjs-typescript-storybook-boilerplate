import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme: any) => ({
  container: {
    composes: 'flexRow alignCenter justifyCenter',
  },
  title: {
    composes: 'font-Montserrat-regular',
    color: theme.colors.accent,
  },
}));

const Main = () => {
  const classes = useStyles();
  return (
    <main className={classes.container}>
      <h1 className={classes.title}>
        Welcome to 
        {' '}
        <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <div>
        <img src='/images/bmw.jpg' alt="" />
      </div>
    </main>
  );
};

export default Main;
