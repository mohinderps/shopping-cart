import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import {BrowserRouter as Router} from 'react-router-dom';
import store from './Store';

const render = function() {
  ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
}
render();

store.subscribe(() => {
  render();
});
