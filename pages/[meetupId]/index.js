"use client";
import React from "react";
import MeetupDetails from "../../components/meetups/MeetupDetails";
import { useParams } from "next/navigation";

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

const DetailsPage = ({ meetup }) => {
  return <MeetupDetails meetup={meetup} />;
};

export const getStaticPaths = async () => {
  const paramsIds = DUMMY_MEATUPS.map((meetup) => meetup.id);
  const paramsPaths = paramsIds.map((id) => ({
    params: {
      meetupId: id,
    },
  }));

  return {
    // paths: [
    //   {
    //     params: {
    //       meetupId: "m1",
    //     },
    //   },
    //   {
    //     params: {
    //       meetupId: "m2",
    //     },
    //   },
    //   {
    //     params: {
    //       meetupId: "m3",
    //     },
    //   },
    //   {
    //     params: {
    //       meetupId: "m4",
    //     },
    //   },
    // ],

    fallback: false,
    paths: paramsPaths,
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  const meetup = DUMMY_MEATUPS.find((meetup) => meetup.id === meetupId);
  return {
    props: {
      meetup,
    },
  };
};

export default DetailsPage;
