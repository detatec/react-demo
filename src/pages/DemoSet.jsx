import TodoList from '../components/TodoList.jsx';

export const listOfDemos = [
    <TodoDemo key={0}/>,
];

export function Demo({
    title,
    description,
    children,
}) {
    return (
        <div className="demo">
            <h2 className="demo-title">
                {title}
            </h2>
            <p className="demo-desc">
                {description}
            </p>
            <div className="demo-content">
                {children}
            </div>
        </div>
    );
}

export function TodoDemo() {
    const title = 'Todo List Demo';
    const desc  = 'Um pequeno componente que permite gerir uma lista de coisas por fazer.';
    
    return (
        <Demo
            title={title}
            description={desc}
        >
            <TodoList title={'Todo List Demo'} />
        </Demo>
    )
}
