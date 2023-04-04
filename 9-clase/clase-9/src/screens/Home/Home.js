import React, { Component } from 'react'
import ContenedorCards from '../../components/ContenedorCards/ContenedorCards';
import ContenedorCategorias from '../../components/ContenedorCategorias/ContenedorCategorias'
import Characters from '../../components/Characters/Characters';
import ContenedorRickMorty from '../../components/ContenedorRickMorty/ContenedorRickMorty';


export default class Home extends Component {
  render() {
    return (
      <>
        <h1>My App in React</h1>
        <main>
          <ContenedorCards />
          <h2>Categories in database</h2>
          <ContenedorCategorias />
          <h3>Personajes de peliculas</h3>
          <Characters />
        </main>
      </>
    )
  }
}
