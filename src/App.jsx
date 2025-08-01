import TodoList from './components/TodoList.jsx'

export default function App() {
    const title = "Todo home";

    return (
        <div>
            <TodoList title={title} />
        </div>
    );
}