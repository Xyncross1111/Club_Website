// src/components/Timeline.js
import React from "react";
import EventCard from "./EventCard";
import styles from "../Stylesheets/meets.module.css";

const events = [
  {
    image: "srcAssetsFizz-Buzz.jpg",
    title: "Fizz-Buzz",
    description:
      "A buzzer round followed by a platform to pitch your innovative ideas",
    date: "24 FEB 2023",
  },
  {
    image: "srcAssetsCode-decode.png",
    title: "Code Decode",
    description: "Bring out desired output from a buggy code",
    date: "13 MAY 2023",
  },
  {
    image: "srcAssets\break-the-code .png",
    title: "Break The Code 4.0",
    description: "description of the event",
    date: "26 NOV 2023",
  },
  {
    image: "srcAssetsHackSphere.png",
    title: "HackSphere",
    description: "An 8 hour long hackathon, first of it's kind in the college.",
    date: "16 JAN 2024",
  },
];

const Timeline = () => (
  <div className={styles.timelineContainer}>
    <div className={styles.timelineLine}></div>
    {events.map((event, index) => (
      <EventCard
        key={index}
        image={event.image}
        title={event.title}
        description={event.description}
        date={event.date}
      />
    ))}
  </div>
);

export default Timeline;
