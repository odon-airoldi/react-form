import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Import our custom CSS
import '../node_modules/bootstrap/dist/css/bootstrap.css'
// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
