import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import { MenuBar } from "./components/menu";
import { AdContainer } from "./components/adPlace";
import { OnSale } from "./components/sliders";
import { Footer } from "./components/footer";

ReactDOM.render(
  <React.StrictMode>
    <MenuBar />
    <div className='container py-4 mt-4'>
      <AdContainer />
      <OnSale />
    </div>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();