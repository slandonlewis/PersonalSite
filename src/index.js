import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import CollapsibleExample from './Navbar.js'
import ContactInfo from './Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CollapsibleExample />
    <Home />
    <ContactInfo />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
