import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import wordReducer from './reducer/rootReducer';
const wordstore = createStore(wordReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={wordstore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
