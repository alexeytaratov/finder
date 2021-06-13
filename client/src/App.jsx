import React, {useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import MainPage from './components/MainPage/MainPage'
import {ParseResultContext} from './context/ParseResultContext';
import './App.scss';

function App() {
  const [parseResult, setParseResult] = useState([]);

  return (
      <ParseResultContext.Provider value={{parseResult, setParseResult}}>
        <div className="app">
          <BrowserRouter>
            <MainPage /> 
          </BrowserRouter>
        </div>
      </ParseResultContext.Provider>
  )
}

export default App;
