import React from 'react'
import Saludar from './components/Saludar/Saludar'
import Navbar from './components/Navbar/Navbar';
import ContenedorCards from './components/ContenedorCards/ContenedorCards';
function App() {
  return (
    <>
      <Navbar/>
      <h1>My App in React</h1>
      <main>
        <ContenedorCards />
      </main>
    </>
  );
}

export default App;
