import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './reduxtoolkit/store.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  
<Provider store={store}>
<App />
</Provider>

  
 
)