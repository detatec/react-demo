import { listOfDemos } from './DemoSet.jsx';

export default function DemoPage() {
    const style = {
        maxWidth: 600,
        margin: "auto"
    }

    return (
        <div className="demo-set" style={style}>
            { listOfDemos }
        </div>
    );
}