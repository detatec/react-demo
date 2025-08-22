import TodoList from '../components/TodoList.jsx';

export const listOfDemos = [
    <TodoDemo key={0}/>,
];

export function Demo({
    title,
    description,
    demoStyle,
    childreStyle,
    children,
}) {
    return (
        <div className="demo" style={demoStyle}>
            <h2 className="demo-title" style={{textAlign: "center"}}>
                {title}
            </h2>
            <p className="demo-desc">
                {description}
            </p>
            <div className="demo-content" style={childreStyle}>
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
            demoStyle={null}
            childreStyle={{textAlign: 'center'}}
        >
            <TodoList title={'Todo List Demo'} />
        </Demo>
    )
}
