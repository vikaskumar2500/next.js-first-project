import MeetupList from "../components/meetups/MeetupList";
import React from "react";

const dummy_meetups = [
  {
    id: "m1",
    title: "A first Meetup",
    image: "https://www.nine.ch/hubfs/2020-08-25%2018.10.41%20small.jpg",
    address: "Some address 5, 23123 some city",
    description: "This is a first meetup",
  },
  {
    id: "m1",
    title: "A second Meetup",
    image: "https://www.nine.ch/hubfs/2020-08-25%2018.10.41%20small.jpg",
    address: "Some address 5, 23123 some city",
    description: "This is a second meetup",
  },
  {
    id: "m1",
    title: "A third Meetup",
    image: "https://www.nine.ch/hubfs/2020-08-25%2018.10.41%20small.jpg",
    address: "Some address 5, 23123 some city",
    description: "This is a third meetup",
  },
  {
    id: "m1",
    title: "A fourth Meetup",
    image: "https://www.nine.ch/hubfs/2020-08-25%2018.10.41%20small.jpg",
    address: "Some address 5, 23123 some city",
    description: "This is a fourth meetup",
  },
];

const HomePage = () => {
  return <MeetupList meetups={dummy_meetups} />;
};

export default HomePage;
