import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DemoPage from './pages/DemoPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DemoPage />
  </StrictMode>,
);
