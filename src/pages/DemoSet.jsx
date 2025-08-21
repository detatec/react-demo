import TodoList from '../components/TodoList.jsx';

export const listOfDemos = [
    <TodoDemo key={0}/>,
];

function Demo({title, description, style, children}) {
    return (
        <div className="demo" style={style}>
            <h2 className="demo-title" style={{textAlign: "center"}}>
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
            style={null}
        >
            <TodoList 
                title={'Todo List Demo'}
                width={500}
                height={400}
            />
        </Demo>
    )
}
