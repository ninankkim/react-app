import './App.css';
import Greeter from './components/Greeter'
import React from 'react';

const names = [
  'Nelson',
  'Atom',
  'Emmy',
  'Sadie',
  'Cici'
]

function App() {
  return (
    <div className="App">
        <h1 className="greeting">
          Hello React!
        </h1>
        {
          names.map((name, index)=> {
            return <Greeter key={index} name = {name} />
          })
        }
    </div>
  );
}
export default App;
