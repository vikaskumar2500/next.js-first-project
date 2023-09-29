import React from "react";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

const DUMMY_MEATUPS = [
  {
    id: "m1",
    title: "The First Meatup",
    image:
      "https://4.bp.blogspot.com/-BDfw5b3lWnM/UFv90ohILVI/AAAAAAAAABM/Cg2HIhtXvvo/s320/image01.jpg",
    address: "Jaipur, Rajasthan",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "The Second Meatup",
    image:
      "https://4.bp.blogspot.com/-BDfw5b3lWnM/UFv90ohILVI/AAAAAAAAABM/Cg2HIhtXvvo/s320/image01.jpg",
    address: "Jaipur, Rajasthan",
    description: "This is a Second meetup",
  },
  {
    id: "m3",
    title: "The Third Meatup",
    image:
      "https://4.bp.blogspot.com/-BDfw5b3lWnM/UFv90ohILVI/AAAAAAAAABM/Cg2HIhtXvvo/s320/image01.jpg",
    address: "Jaipur, Rajasthan",
    description: "This is a Third meetup",
  },
  {
    id: "m4",
    title: "The Fourth Meatup",
    image:
      "https://4.bp.blogspot.com/-BDfw5b3lWnM/UFv90ohILVI/AAAAAAAAABM/Cg2HIhtXvvo/s320/image01.jpg",
    address: "Jaipur, Rajasthan",
    description: "This is a Fourth meetup",
  },
];

const HomePage = ({ meetups }) => {
  return <MeetupList meetups={meetups} />;
};

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://vikas:meetups@cluster0.hkt90qy.mongodb.net/?retryWrites=true&w=majority&appName=meetups"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        descriptiona: meetup.description,
      })),
      revalidate: 1,
    },
  };
};

export default HomePage;
