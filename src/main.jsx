import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TodoPage from './pages/TodoPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoPage />
  </StrictMode>,
)
