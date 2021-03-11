import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Category from './components/Category';
import BlogDetail from './components/BlogDetail';
import ProductDetail from './components/ProductDetail';
import About from './components/About';
import Agent from './components/Agent';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Register from './components/Register';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
