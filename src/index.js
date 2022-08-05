import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';

export const api_base_url='https://0a17-103-94-135-13.in.ngrok.io/api'
//export const api_base_url='http://bcf22bnv-env.eba-dktwj7xg.ap-south-1.elasticbeanstalk.com/api'



var root

try{
    root= ReactDOM.createRoot(document.getElementById('root'));
}catch(e){
    root=ReactDOM.createRoot(document.createElement('root'));
}
root.render(
  <React.StrictMode>
      <BrowserRouter>
            <App />
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
