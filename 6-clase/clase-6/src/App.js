import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'

import Home from './containers/Home';
import About from './containers/About'
import Admin from './containers/Admin'

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/about/:id' component={ About } />
        <Route path='/admin' component={ Admin } />    
      </Switch>
      <Footer />
    </>
  );
}

export default App;
