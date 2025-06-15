import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='bg-linear-to-b from-[#303033] to-[#0D0D0D]'>
      <App />
    </div>
  </StrictMode>,
)
