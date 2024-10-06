import React, { useState } from 'react';
import { Badge, Timeline, Text, Transition } from '@mantine/core';

import './Timeline.css';
import { TimelineItem } from 'components/TimelineInterfaces';

interface TimelineBoxProps {
  item: TimelineItem;
  height: number;
  width: number;
}

const TimelineBox: React.FC<TimelineBoxProps> = ({ item, height, width }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      // style={{ height: `${height}px`, width: '100%' }}
      className="timeline-card-box"
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
    </div>
  );
};

export default TimelineBox;
