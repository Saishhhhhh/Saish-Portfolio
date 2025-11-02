import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import letterPaths from './components/sections/letterPaths'

// Make letterPaths available globally for the animation
window.letterPaths = letterPaths;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
