import React from 'react';
import {HashRouter} from 'react-router-dom';
import Header from './components/Header';
import router from './routes';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div>
        <Header/>
        {router}
      </div>
    </HashRouter>
  );
}

export default App;
