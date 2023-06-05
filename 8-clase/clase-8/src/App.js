import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'

import Home from './screens/Home/Home'
import About from './screens/About/About';
import Users from './screens/Users/Users';
import Personajes from './screens/Personajes/Personajes';
import UnPersonaje from './screens/UnPersonaje/UnPersonaje';
import PaginaBuscador from './screens/PaginaBuscador/PaginaBuscador';
import NotFound from './screens/NotFound/NotFound';
import  Ant  from './screens/AntDesign/Ant';
function App() {
  return (
    <>
      <Navbar/>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/about/:id?' component={About}/>
          <Route path='/users' component={Users} />
          <Route path='/personajes' component={Personajes} />
          <Route path='/unpersonaje/id/:id' component={UnPersonaje}/>
          <Route path='/busqueda' component={PaginaBuscador} />
          <Route path='/ant' component={Ant} />
          <Route component={NotFound} />
        </Switch>
      <Footer />
    </>
  );
}

export default App;
