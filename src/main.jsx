import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { store } from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Ulvi } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Ulvi>
        <App />
      </Ulvi>

    </Provider>
  </React.StrictMode>,
)
