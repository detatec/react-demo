import TodoList from "../components/TodoList";

const todoDemo = {
    title: "Todo List Demo",
    description: "Um pequeno component que permite gerir uma lista de coisas por fazer",
    style: null,

    content: (
        <div style={{width: "fit-content", margin:"auto"}}>
            <TodoList 
                title="Todo List"
                width={500}
                height={400}
            />
        </div>
    ),
}

export const demos = [
    todoDemo,
];