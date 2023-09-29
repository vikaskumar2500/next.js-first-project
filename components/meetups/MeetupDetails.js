import React from "react";
import classes from "./MeetupDetails.module.css";
import Image from "next/image";

const MeetupDetails = ({ meetup }) => {
  return (
    <div className={classes.details}>
      <img src={meetup?.image} alt={meetup?.title} />
      <h2>{meetup?.title}</h2>
      <div>{meetup?.address}</div>
      <div>{meetup?.description}</div>
    </div>
  );
};

export default MeetupDetails;
