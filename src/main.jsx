import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { EcommerceApp } from './EcommerceApp';
import './index.css'
import store from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <EcommerceApp />
    </Provider>
  </>
)
