import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header';
import Footer from './components/footer';
import HeaderMenu from './components/header-menu';


ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <HeaderMenu/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);


