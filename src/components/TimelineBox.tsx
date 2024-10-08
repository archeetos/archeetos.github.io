import React, { useState } from 'react';
import { Indicator, Text } from '@mantine/core';

import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { TimelineItem } from 'components/TimelineInterfaces';
import TimelineHoverView from './TimelineHoverView';
import './Timeline.css';

const getCssVariable = (variableName: string) => {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variableName)
    .trim();
};

interface TimelineBoxProps {
  item: TimelineItem;
  index: number;
}

const TimelineBox: React.FC<TimelineBoxProps> = ({ item, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (newFlipState: boolean) => {
    setIsFlipped(newFlipState);
  };

  return (
    <VerticalTimelineElement
      className="custom-timeline-element"
      contentStyle={{
        borderRadius: '5%',
        textAlign: index % 2 === 0 ? 'left' : 'right', // Use 'left' or 'right' directly
      }}
      contentArrowStyle={{
        borderRight: `7px solid  ${getCssVariable('--orange-creamsicle')}`,
      }}
      date={item.timeframe}
      dateClassName="timeline-date-style"
      iconClassName="timeline-icon-style"
      icon={
        <img
          src={item.icon}
          alt="Custom Icon"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%', // Make the image circular if desired
            objectFit: 'contain',
          }}
        />
      }
    >
      <Indicator
        label="Hover for details"
        size={16}
        position="top-center"
        offset={-10}
        color="gray"
      >
        <div
          className="timeline-card-main-container"
          onMouseEnter={() => handleFlip(true)}
          onMouseLeave={() => handleFlip(false)}
        >
          {item.image && (
            <img
              src={item.image}
              alt={item.cardTitle}
              className="timeline-card-header-img"
            />
          )}
          <Text
            classNames={{
              root: 'mantine-text-margin-override',
            }}
            c={getCssVariable('--azure')}
          >
            {item.cardSubtitle}
          </Text>
          <TimelineHoverView item={item} flipState={isFlipped} />
        </div>
      </Indicator>
    </VerticalTimelineElement>
  );
};

export default TimelineBox;
