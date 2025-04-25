import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import EventStore from "../store/EventStore";
import Details from "../components/events/Details";

const EventDetailsPage = () => {
  const { DetailsRequest } = EventStore();
  const { id } = useParams();

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        if (isMounted) {
          await Promise.all([DetailsRequest(id)]);
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [id]);
  return (
    <Layout>
      <Details />
      
    </Layout>
  );
};

export default EventDetailsPage;
