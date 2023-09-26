"use client";
import React from "react";
import { useParams } from "next/navigation";
import MeetupItem from "../../components/meetups/MeetupItem";

const dummy_meetups = [
  {
    id: "m1",
    title: "A first Meetup",
    image: "https://www.nine.ch/hubfs/2020-08-25%2018.10.41%20small.jpg",
    address: "Some address 5, 23123 some city",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A second Meetup",
    image: "https://www.nine.ch/hubfs/2020-08-25%2018.10.41%20small.jpg",
    address: "Some address 5, 23123 some city",
    description: "This is a second meetup",
  },
  {
    id: "m3",
    title: "A third Meetup",
    image: "https://www.nine.ch/hubfs/2020-08-25%2018.10.41%20small.jpg",
    address: "Some address 5, 23123 some city",
    description: "This is a third meetup",
  },
  {
    id: "m4",
    title: "A fourth Meetup",
    image: "",
    address: "Some address 5, 23123 some city",
    description: "This is a fourth meetup",
  },
];

const MeetupDetails = () => {
  const { meetupId } = useParams();
  const dummyMeetup = dummy_meetups.find((meetup) => meetup.id == meetupId);
  return (
    <div className="absolute m-20 flex-col justify-between bg-blend-overlay text-center">
      <img className="w-80" src={dummyMeetup.image} alt={dummyMeetup.title} />
      <h2 className="font-bold">{dummyMeetup.title}</h2>
      <div>{dummyMeetup.address}</div>
      <div>{dummyMeetup.description}</div>
    </div>
  );
};

export default MeetupDetails;
