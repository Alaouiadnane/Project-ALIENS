import React from 'react';
import logo from './logo.svg';
import Header from './components/Layouts/Header'
import Footer from './components/Layouts/Footer'
import ListesCas from './components/ListesCas';

function App() {

  return (
    <div className="App">
        <Header/>
        <ListesCas/>
        <Footer/>
    </div>
  );
}

export default App;
