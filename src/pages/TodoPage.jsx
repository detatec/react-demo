import TodoList from '../components/TodoList'

export default function App() {
    const title = "Todo List";

    return (
        <div>
            <TodoList title={title} />
        </div>
    );
}