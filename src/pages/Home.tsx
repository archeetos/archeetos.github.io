import React from 'react';
import { useState, useEffect } from 'react';
import TimelineBox from 'components/TimelineBox';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './Pages.css';

const getCssVariable = (variableName: string) => {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variableName)
    .trim();
};

const TIMELINE_HEIGHT_FACTOR = 0.21;

const TIMELINE_WIDTH_FACTOR = 0.8;

const Home: React.FC = () => {
  const items = [
    {
      cardTitle: 'Amazon',
      title: 'Aug 2015 to Sept 2022: Amazon',
      cardSubtitle: 'Software Engineering at Amazon',
      timeframe: 'Aug 2015 - Oct 2024',
      cardDetailedText: `7 year career at Amazon encompassing software engineering and engineering management.
          My roles explored low-level device software and large scale clould infrastructure.`,
      image: '/assets/images/amazon_logo.svg',
      icon: '/assets/images/amz_sm2.png',
      items: [
        {
          title: 'Software Engineer - FireOS/Android Platform',
          description: 'Software Engineering for FireOS and Android ',
          startDate: 'Aug, 2015',
          endDate: 'July 2018',
        },
        {
          title: 'Software Manager - FireOS/Android Platform',
          description: 'Software Engineering for FireOS and Android ',
          startDate: 'July, 2018',
          endDate: 'Sept 2022',
        },
      ],
      tags: [
        'Leadership and Management',
        'Android',
        'IoT',
        'AWS Cloud Infrastructure',
        'Big Data Processnig',
      ],
      // media: {
      //   type: "IMAGE",
      //   source: {
      //     url: "/assets/images/amazon_logo.svg",
      //   },
      // },
    },
    {
      cardTitle: 'Plenty',
      title: 'Oct 2022 to Jan 2024: Plenty Unlimited',
      cardSubtitle: 'Software Manager - DevOps and Operational Excellence',
      timeframe: 'Oct 2022 - Jan 2024',
      cardDetailedText: `Managed a team of 5-7 DevOps engineer responsible for developer expereince, deployment, 
        performance and SRE of Plenty's clould and on-premise software systems.
        In additon, I also led operational excellence initiatives for ~50 person software organization.`,
      image: '/assets/images/plenty_logo.svg',
      icon: '/assets/images/plenty_sm.png',
      tags: [
        'Leadership and Management',
        'AWS Cloud Infrastructure',
        'DevOps & Site Reliability',
      ],
      // media: {
      //   type: "IMAGE",
      //   source: {
      //     url: "/assets/images/plenty_logo.svg",
      //   },
      // },
    },
    {
      cardTitle: 'LogicManager',
      title: '2024-Now: LogicManager',
      cardSubtitle: 'Technical Software Lead',
      timeframe: 'May 2024 - Present',
      cardDetailedText: `Leading a team of 4 engineers building features for a full-stack enterprise-grade web-app.`,
      image: '/assets/images/lm_logo.png',
      icon: '/assets/images/lm_sm.png',
      tags: [
        'Leadership and Management',
        'Full-stack web-app',
        'React',
        'Java',
      ],
      // media: {
      //   type: "IMAGE",
      //   source: {
      //     url: "/assets/images/plenty_logo.svg",
      //   },
      // },
    },
  ]
    .slice()
    .reverse();

  const [height, setHeight] = useState(
    window.innerHeight * TIMELINE_HEIGHT_FACTOR,
  );
  const [width, setWidth] = useState(window.innerWidth * TIMELINE_WIDTH_FACTOR);

  const handleResize = () => {
    console.log('resized');
    setHeight(window.innerHeight * TIMELINE_HEIGHT_FACTOR);
    setWidth(window.innerWidth * TIMELINE_WIDTH_FACTOR);
  };

  useEffect(() => {
    console.log('Adding resize event lisener');
    window.addEventListener('resize', handleResize);
    return () => {
      console.log('Removing resize event listener'); // Debugging: Log when listener is removed
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    year: 'numeric',
  };
  const dateToday = new Date().toLocaleDateString('en-US', options);
  const careerStartDate = new Date(2015, 7, 1).toLocaleDateString(
    'en-US',
    options,
  );

  return (
    <div className="main-content">
      <h1>Career Timeline</h1>
      <h2> Today: {dateToday} </h2>

      <div className="timeline-content">
        <VerticalTimeline
          className="vertical-timeline-custom"
          animate={true}
          lineColor={getCssVariable('--azure')}
        >
          {items.map((item, index) => (
            <TimelineBox key={index} item={item} index={index} />
          ))}
        </VerticalTimeline>
      </div>
      <h2> Since: {careerStartDate} </h2>
    </div>
  );
};

export default Home;
