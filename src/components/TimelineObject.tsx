import React from 'react';
import {Pill} from '@mantine/core';
import { TimelineItem } from 'components/TimelineInterfaces'; // Import the shared interface

import './Timeline.css';

const TimelineObject: React.FC<{item: TimelineItem }> = ({item}) => {
    return (
        <div className="timeline-card-box">
        {item.image && <img src={item.image} alt={item.cardTitle} className="timeline-card-img" />}
        <h2 className="timeline-card-h2">{item.cardSubtitle}</h2>
        <p className="timeline-card-detail">{item.cardDetailedText}</p>
        
        {item.items?.length && (
          <div className="conditional-items">
            {item.items.map((subItem, subIndex) => (
              <div key={subIndex} className="sub-item">
                <h4>{subItem.title}</h4>
                <p>{subItem.description}</p>
              </div>
            ))}
          </div>
        )}
  
        <div>
          {item.tags?.map((tag: string, index: number) => (
            <Pill key={index}>
              {tag}
            </Pill>
          ))}
        </div>
      </div>
    )
}

export default TimelineObject;