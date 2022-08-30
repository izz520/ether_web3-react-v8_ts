import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//引入框架
import Layout from './Layout';
//引入Store
import { Provider } from "react-redux";
//引入Store
import { store } from "./store/index";
//引入web3-react
import Web3Provider from './web3/Web3Provider';
//引入国际化
import "./i18n"
import ThemeWapper from './components/ThemeWapper';
import GlobalStyle from './theme/global';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <Web3Provider>
      <ThemeWapper>
        <GlobalStyle />
        <Layout>
          <App />
        </Layout>
      </ThemeWapper>
    </Web3Provider>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
