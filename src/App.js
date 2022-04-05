import React from 'react';
import './style.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
        <div style={{border:'solid 1px black' , maxWidth:'100vw'}}>
          <h1 className="title red">Your name here</h1>
        </div >
        <div>
          <img src={logo} alt='imageInSrc'/>
          <img src="/logo512.png" alt='imageInPublic' />
        </div>
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/fLexgOxsZu0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
  );
}

export default App;
