import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import store from './store';
import router from './router'; 
 
ReactDOM.render(
  <Provider >{router}</Provider>,
  document.getElementById('root')
);
