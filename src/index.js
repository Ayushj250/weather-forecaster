import React from 'react'
import ReactDOM from 'react-dom'
import './bootstrap/css/bootstrap.min.css'
import './App.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
