import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DemoPage from './pages/DemoPage.jsx'
import TodoList from './components/TodoList.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <DemoPage /> */}
    <TodoList
      title={'Todo List'}
      width={500}
      height={400}
    />
  </StrictMode>,
);
