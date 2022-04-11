import TimelineInfo from "./TimelineInfo";
import './Timeline.css';


const Timeline = () => (
    <>
    <h1> Timeline</h1>
    <button class="btn1"> Post</button>
    <input
            id="translationInput"
            type="text"
            placeholder="Search post"
            />
        <button class="btn1">Search</button>
    <TimelineInfo/>    
    </>
)

export default Timeline;
