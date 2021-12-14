import React from 'react'
import ReactDOM from 'react-dom'
import {App} from "./ui/App"
import 'bootstrap/dist/css/bootstrap.css';
import {store} from './store/store'


ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
)

