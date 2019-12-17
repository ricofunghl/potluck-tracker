import React from 'react';
import Nav from './components/Nav/Nav';
import Main from './containers/Main/Main';
import classes from './App.module.css';



function App() {
  return (
    <div className={classes.App}>
      <Main />
      <Nav />
    </div>
  );
}

export default App;
