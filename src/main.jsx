import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'

import "./assets/fonts/HelveticaNeue/HelveticaNeue.ttf";
import "./assets/fonts/HelveticaNeue/HelveticaNeueMedium.ttf";
import "./assets/fonts/HelveticaNeue/HelveticaNeue-CondensedBlack.ttf";
import "./assets/fonts/HelveticaNeue/HelveticaNeue-CondensedBold.ttf";
import "./assets/fonts/HelveticaNeue/HelveticaNeue-Bold.ttf";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
