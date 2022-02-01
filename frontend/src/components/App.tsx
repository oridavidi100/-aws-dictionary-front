import React from 'react';
import '../App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Word from './Word';
import Home from './Home';
import WordAndPos from './WordAndPos';
import NotFound from './NotFound';
import RandomWord from './RandomWord';
function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/:word/:partOfSpeech' element={<WordAndPos />} />
          <Route path='/:word' element={<Word />} />
          <Route path='/part-of-speech/:part' element={<RandomWord />} />
          <Route path='/' element={<Home />} />
          <Route path='/NotFound' element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
