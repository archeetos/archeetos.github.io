import React, { useState } from 'react';
import { Transition } from '@mantine/core';
import './Pages.css';

const About: React.FC = () => {
  const [opened, setOpened] = useState(true);

  return (
    <div className="about-test" onClick={() => setOpened(!opened)}>
      <Transition
        mounted={opened}
        transition="rotate-left"
        duration={300}
        timingFunction="ease"
        enterDelay={250}
      >
        {(styles) => (
          <div style={styles}>
            <p>This page is under construction. Please come back later.</p>
            <p>
              For now, please feel free to download my resume from the 'Download
              CV' button at the top right or visit my
              <a
                href="https://www.linkedin.com/in/rupaka"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                LinkedIn page
              </a>
              .
            </p>
          </div>
        )}
      </Transition>

      <Transition
        mounted={!opened}
        transition="rotate-right"
        duration={300}
        timingFunction="ease"
        enterDelay={250}
      >
        {(styles) => (
          <div style={styles}>
            <p>This is the faux content displayed when closed.</p>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default About;
