import React from "react";
import { Chrono } from "react-chrono";
import "./Home.css";

const getCssVariable = (variableName: string) => {
  return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
};

const Home: React.FC = () => {
    const items = [
      {
        cardTitle: "Amazon",
        title: "Aug 2015 to Sept 2022: Amazon",
        cardSubtitle: "Software Engineering at Amazon",
        cardDetailedText:`7 year career at Amazon encompassing software engineering and engineering management.
          My roles explored low-level device software and large scale clould infrastructure.`,
        image: "/assets/images/amazon_logo.svg",
        // media: {
        //   type: "IMAGE",
        //   source: {
        //     url: "/assets/images/amazon_logo.svg",
        //   },
        // },
      },
      {
        cardTitle: "Plenty",
        title: "Oct 2022 to Jan 2024: Plenty Unlimited",
        cardSubtitle: "Software Manager - DevOps and Operational Excellence",
        cardDetailedText: `Managed a team of 5-7 DevOps engineer responsible for developer expereince, deployment, 
        performance and SRE of Plenty's clould and on-premise software systems.
        In additon, I also led operational excellence initiatives for ~50 person software organization.`,
        image: "/assets/images/plenty_logo.svg",
        // media: {
        //   type: "IMAGE",
        //   source: {
        //     url: "/assets/images/plenty_logo.svg",
        //   },
        // },
      },
      {
        cardTitle: "LogicManager",
        title: "2024-Now: LogicManager",
        cardSubtitle: "Technical Software Lead",
        cardDetailedText: `Leading a team of 4 engineers building features for a full-stack enterprise-grade web-app.`,
        image: "/assets/images/lm_logo.png",
        // media: {
        //   type: "IMAGE",
        //   source: {
        //     url: "/assets/images/plenty_logo.svg",
        //   },
        // },
      }
  ].slice().reverse();

  const options: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' };
  const dateToday = new Date().toLocaleDateString('en-US', options);
  const careerStartDate = new Date(2015, 7, 1).toLocaleDateString('en-US', options);

  return (
    <div className="main-content">
    <h1>Career Timeline</h1>
    <h2> Today: {dateToday} </h2>
    <div className="timeline-content">
        <Chrono className="chrono-content"
          mode="VERTICAL_ALTERNATING"
          items={items}
          titleDateFormat="MMM YYYY"
          // showAllCardsHorizontal
          cardWidth={800}
          cardHeight={350}
          disableToolbar
          toolbarPosition="BOTTOM"
          slieShowType="reveal"
          slideShow
          scrollable={{ scrollbar: false }}
          timelinePointShape="diamond"
          theme={{
            titleColor: "black",
            titleColorActive: "white",
            titleBgColor: "white",
            primary: getCssVariable("--azure"),
            secondary: getCssVariable("--orange-creamsicle"),
          }}
        >
          {items.map((item, index) => (
            <div className="timeline-card-img-box" key={index}>
              {item.image && <img src={item.image} alt={item.cardTitle} className="timeline-card-img" />}
              <p>{item.cardDetailedText}</p>
            </div>
        ))}
        </Chrono>
    </div>
    <h2> Career Start: {careerStartDate} </h2>
  </div>
  );
};

export default Home;