import React, { useEffect } from "react";
import Sidebar from "../components/user/UserDashboard";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import EventStore from "../store/EventStore";
import MyEventListComponent from "../components/events/MyEventListComponent";

const MyEventList = () => {
  const {EventList,EventListByUserRequest} = EventStore()

  useEffect(() => {
    (async ()=>{
        await EventListByUserRequest()
    })()
}, []);
  return (
    <div>
    <Navbar />
    <Sidebar>
      <MyEventListComponent />
    </Sidebar>
    <Footer />
    </div>
  );
};

export default MyEventList;
