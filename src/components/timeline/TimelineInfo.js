import React from 'react';
import timelineData from './data';
import TimelineItem from './TimelineItem';

<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
const TimelineInfo = () =>
    timelineData.length > 0 && (           
        <div className="timeline-container">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );

<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
export default TimelineInfo;
