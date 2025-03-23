import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Header/>
      <main>
        <article>
          <h2>My first React App</h2>
          <p>My first React App</p>
        </article>
      </main>
      <Footer />
    </div>
  );
 }
}

export default App;
