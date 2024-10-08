import React, { useState, useEffect } from 'react';
import { Badge, Timeline, Text, Transition } from '@mantine/core';
import { TimelineItem } from 'components/TimelineInterfaces';

import './Timeline.css';

const mantineTextMarginOverride = {
  root: 'mantine-text-margin-override',
};

interface TimelineHoverViewProps {
  item: TimelineItem;
  flipState: boolean;
}

const TimelineHoverView: React.FC<TimelineHoverViewProps> = ({
  item,
  flipState,
}) => {
  const [flipped, setFlipped] = useState(flipState);

  // Use an effect to synchronize the internal state with the prop
  useEffect(() => {
    const timer = setTimeout(() => {
      setFlipped(flipState);
    }, 200);

    return () => clearTimeout(timer);
  }, [flipState]);

  return (
    <div className="timeline-card-core">
      <Transition
        mounted={!flipped}
        transition="pop"
        duration={350}
        timingFunction="ease"
        enterDelay={360}
        keepMounted={true}
      >
        {(styles) => (
          <div className="card-front" style={styles}>
            <Text
              classNames={mantineTextMarginOverride}
              size="xs"
              fs="italic"
              fw={300}
            >
              {item.cardDetailedText}
            </Text>
            <div className="badge-box">
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
        duration={350}
        timingFunction="ease"
        enterDelay={360}
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
                  <Timeline.Item key={subIndex} title={subItem.title}>
                    <Text
                      classNames={mantineTextMarginOverride}
                      size="xs"
                      c="dimmed"
                      fw={300}
                    >
                      {subItem.startDate} - {subItem.endDate}
                    </Text>
                    <Text
                      classNames={mantineTextMarginOverride}
                      size="xs"
                      fw={300}
                    >
                      {subItem.description}
                    </Text>
                  </Timeline.Item>
                ))}
              </Timeline>
            )}
          </div>
        )}
      </Transition>
    </div>
  );
};

export default TimelineHoverView;
