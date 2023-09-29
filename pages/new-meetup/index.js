import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const AddNewMeetup = () => {

  const addMeetupHandler=(meetupData)=> {
    console.log(meetupData);
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default AddNewMeetup;
