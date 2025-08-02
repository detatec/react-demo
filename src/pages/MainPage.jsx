import TodoList from '../components/TodoList'

export default function Page() {
    const title = "Todo List";

    return (
        <div>
            <TodoList title={title}/>
        </div>
    );
}