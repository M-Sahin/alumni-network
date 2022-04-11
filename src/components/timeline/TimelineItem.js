import React from "react";

const TimelineItem = ({ data }) => (      
    <div className="timeline-item">
        <div className="timeline-item-content">
            <time>{data.date}</time>
            <p>{data.text}</p>            
            <span className="circle"></span>
            <div class="buttons">
            <div class="action_btn">
            <button class ="action_btn reply">reply</button>
            <button class ="action_btn edit">edit</button>
            </div>
            </div>
        </div>
    </div>
);

export default TimelineItem
