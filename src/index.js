import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom'
// 引入redux
import reducers from './reducers'
import { Provider } from 'react-redux';
// 我们可以使用Redux提供的applyMiddleware方法来使用一个或者是多个中间件
// compose方法合并多个中间件
import { createStore, applyMiddleware, compose } from 'redux'
// 通过thunk中间件，我们就可以实现异步的action了
import thunk from 'redux-thunk'
// 多个中间件合并与compose方法
let store = createStore(reducers, compose(
    applyMiddleware(thunk),
    // 调试代码
	window.devToolsExtension?window.devToolsExtension():f=>f
))

ReactDOM.render((
    <Provider store = {store}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
