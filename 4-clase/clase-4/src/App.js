import React from 'react'
import Navbar from './components/Navbar/Navbar';
import ContenedorCards from './components/ContenedorCards/ContenedorCards';
import ContenedorCategorias from './components/ContenedorCategorias/ContenedorCategorias'
import Characters from './components/Characters/Characters';
import Footer from './components/Footer/Footer'
function App() {
  return (
    <>
      <Navbar/>
      <h1>My App in React</h1>
      <main>
        <ContenedorCards />
        <h2>Categories in database</h2>
        <ContenedorCategorias />
        <h3>Personajes de peliculas</h3>
        <Characters />
      </main>
      <Footer />
    </>
  );
}

export default App;
