export default function Demo({title, description, style, children}) {
    return (
        <div className="demo" style={style}>
            <h2 style={{textAlign: "center"}}>
                {title}
            </h2>
            <p>{description}</p>
            
            {children}
        </div>
    );
}