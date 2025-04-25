import React from "react";
import Sidebar from "../components/user/UserDashboard";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CreateEventForm from "../components/events/CreateEventForm";


const CreateEventPage = () => {
  return (
    <div>
     <Navbar />
    <Sidebar>
      <CreateEventForm />
    </Sidebar>
    <Footer />
    </div>
  );
};

export default CreateEventPage;
