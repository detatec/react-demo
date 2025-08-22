import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DemoPage from './pages/DemoPage.jsx'
import TodoList from './components/TodoList.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DemoPage />
  </StrictMode>,
);
