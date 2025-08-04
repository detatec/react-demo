import { demos } from './demo-set.jsx'

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

export default function DemoPage() {
    const theDemos = demos.map((demo, index) => {
        return (
            <Demo
                key={index}
                title={demo.title}
                description={demo.description}
                style={demo.style}
            >
                {demo.content} 
            </Demo>
        )
    });

    const style = {
        maxWidth: 600,
        margin: "auto"
    }

    return (
        <div className="demo-set" style={style}>
            {theDemos}
        </div>
    );
}