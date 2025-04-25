import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";


import { useParams } from "react-router-dom";
import EventStore from "../store/EventStore";
import EventList from "../components/events/EventList";

const ProductByCategory = () => {
  const { ListByCategoryRequest } = EventStore();
  const { id } = useParams();
  useEffect(() => {
    let fetchData = async () => {
      await ListByCategoryRequest(id);
    };
    fetchData()
  }, [id]);
  return (
    <Layout>
      <EventList />
    </Layout>
  );
};

export default ProductByCategory;