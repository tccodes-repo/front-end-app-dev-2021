import React from 'react';
import logo from './logo.svg';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <h1>Header 1</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sunt non quo est ab magni ex molestiae ducimus pariatur tenetur corporis consequatur itaque debitis hic reprehenderit perferendis. Est autem itaque beatae sint inventore, rerum aspernatur nesciunt pariatur, temporibus nisi provident in vel ut doloribus sit. Recusandae vero rerum eligendi voluptas.</p>
        <h2>Header 1</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sunt non quo est ab magni ex molestiae ducimus pariatur tenetur corporis consequatur itaque debitis hic reprehenderit perferendis. Est autem itaque beatae sint inventore, rerum aspernatur nesciunt pariatur, temporibus nisi provident in vel ut doloribus sit. Recusandae vero rerum eligendi voluptas.</p>
        <h3>Header 1</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sunt non quo est ab magni ex molestiae ducimus pariatur tenetur corporis consequatur itaque debitis hic reprehenderit perferendis. Est autem itaque beatae sint inventore, rerum aspernatur nesciunt pariatur, temporibus nisi provident in vel ut doloribus sit. Recusandae vero rerum eligendi voluptas.</p>
        <h4>Header 1</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sunt non quo est ab magni ex molestiae ducimus pariatur tenetur corporis consequatur itaque debitis hic reprehenderit perferendis. Est autem itaque beatae sint inventore, rerum aspernatur nesciunt pariatur, temporibus nisi provident in vel ut doloribus sit. Recusandae vero rerum eligendi voluptas.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
