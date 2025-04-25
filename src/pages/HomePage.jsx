import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import UserStore from "../store/UserStore";
import EventStore from "../store/EventStore";
import Slider from "../components/events/Slider";
import Categories from "../components/events/Categories";
import UpcomingEvent from "../components/events/UpcomingEvent";

const HomePage = () => {
  // const { UserMessage, UserVerifyRequest } = UserStore();
  const { CategoryListRequest, EventListRequest } = EventStore();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await UserVerifyRequest();
  //   };

  //   fetchData(); // এখানে কল করতে হবে
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([CategoryListRequest(), EventListRequest()]);
      } catch (error) {
        console.log("homepage-error", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <Layout>
        {/* <p>{UserMessage}</p> */}
        <Slider />
        <UpcomingEvent />
        <Categories />
      </Layout>
    </div>
  );
};

export default HomePage;
