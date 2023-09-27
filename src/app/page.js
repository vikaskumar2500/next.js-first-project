import React from "react";
import MeetupList from "../components/meetups/MeetupList";

let dummy_meetups = [
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
    image: "https://www.nine.ch/hubfs/2020-08-25%2018.10.41%20small.jpg",
    address: "Some address 5, 23123 some city",
    description: "This is a fourth meetup",
  },
];

// this works same as the getStaticProps
export const getData = async () => {
  const meetups = dummy_meetups;
  return meetups;
};

const HomePage = async () => {
  const meetups = await getData();
  return <MeetupList meetups={dummy_meetups} />;
};

export default HomePage;
