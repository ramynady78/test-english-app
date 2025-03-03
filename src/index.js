import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./css-styles/navBar.css";
import "./css-styles/examsCards.css";
import "./css-styles/quick-test.css";
import "./css-styles/advanced-test.css";
import "./css-styles/exam-templete.css";
import "./css-styles/result.css";
import "./css-styles/intro-message.css";
import "./css-styles/why-choose-us.css";
import "./css-styles/future-goals.css";
import "./css-styles/footer.css";
import "./css-styles/test-details.css";
import "./css-styles/about-us.css";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './rtk/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
