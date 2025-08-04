import Demo from '../components/Demo'
import { demos } from './demo-data'

export default function Page() {

    const theDemos = demos.map(demo => {
        return (
            <Demo 
                title={demo.title}
                description={demo.description}
                style={demo.style}>

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