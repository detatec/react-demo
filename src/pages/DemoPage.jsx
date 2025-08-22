import { listOfDemos } from './DemoSet.jsx';
import './DemoPage.css';

export default function DemoPage() {
    return (
        <div className="demo-set">
            { listOfDemos }
        </div>
    );
}