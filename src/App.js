import React from 'react';
import Sidebar from './components/Sidebar';
import Contenido from './components/Contenido';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="d-flex" style={{ display: 'flex' }}>
        <Sidebar />
        <Contenido />
      </div>
    </div>
  );
}

export default App;
