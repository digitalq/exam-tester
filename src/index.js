import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/components.css';
// import './assets/css/components.css.map';
// import './assets/css/custom.css';
// import './assets/css/custom.css.map';
import './assets/css/reverse.css';
// import './assets/css/style.css.map';
import './assets/css/rtl.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-social/bootstrap-social.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

import "owl.carousel/dist/assets/owl.carousel.min.css";

import "@fortawesome/fontawesome-free/css/all.css";

import "@mdi/font/css/materialdesignicons.min.css";

import "bootstrap-timepicker/css/bootstrap-timepicker.min.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
);

