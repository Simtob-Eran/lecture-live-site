import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Keep the pre-image layout available at /old without changing the current homepage.
if (window.location.pathname.replace(/\/+$/, '') === '/old') {
  document.body.classList.add('legacy-route')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
