import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/globalStyles.css'
import './styles/variables.css'

import Home from './pages/home/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
