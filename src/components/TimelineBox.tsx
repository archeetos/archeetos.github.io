import React, { useState } from 'react';
import { Badge, Timeline, Text, Transition } from '@mantine/core';

import { VerticalTimelineElement } from 'react-vertical-timeline-component';

import './Timeline.css';
import { TimelineItem } from 'components/TimelineInterfaces';

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
  const [flipped, setFlipped] = useState(false);
  const dateClassName = `timeline-date-style ${index % 2 === 0 ? 'align-left' : 'align-right'}`;
  return (
    <VerticalTimelineElement
      className="timeline-card-box"
      contentStyle={{
        borderRadius: '5%',
      }}
      contentArrowStyle={{
        borderRight: `7px solid  ${getCssVariable('--orange-creamsicle')}`,
      }}
      date={item.timeframe}
      dateClassName={dateClassName}
      iconClassName="timeline-icon-style"
      icon={
        <img
          src={item.icon}
          alt="Custom Icon"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%', // Make the image circular if desired
            objectFit: 'cover', // Ensure the image covers the icon area
          }}
        />
      }
    >
      {item.image && (
        <img
          src={item.image}
          alt={item.cardTitle}
          className="timeline-card-img"
        />
      )}
      <Text className="timeline-card-h2">{item.cardSubtitle}</Text>
      <div
        className="timeline-card-core"
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
      >
        <Transition
          mounted={!flipped}
          transition="pop"
          duration={400}
          timingFunction="ease"
          enterDelay={400}
          keepMounted={true}
        >
          {(styles) => (
            <div className="card-front" style={styles}>
              <Text size="s" className="timeline-card-detail">
                {item.cardDetailedText}
              </Text>
              <div>
                {item.tags?.map((tag: string, index: number) => (
                  <Badge
                    key={index}
                    color="orange"
                    variant="outline"
                    radius="lg"
                    className="badge-style"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </Transition>
        <Transition
          mounted={flipped}
          transition="pop"
          duration={400}
          timingFunction="ease"
          enterDelay={400}
          keepMounted={true}
        >
          {(styles) => (
            <div className="card-back" style={styles}>
              {item.items?.length && (
                <Timeline
                  className="nested-timeline"
                  active={1}
                  bulletSize={24}
                  lineWidth={2}
                >
                  {item.items.map((subItem, subIndex) => (
                    <Timeline.Item
                      key={subIndex}
                      title={subItem.title}
                      className="sub-tiem"
                    >
                      <Text size="xs">{subItem.description}</Text>
                    </Timeline.Item>
                  ))}
                </Timeline>
              )}
            </div>
          )}
        </Transition>
      </div>
    </VerticalTimelineElement>
  );
};

export default TimelineBox;
