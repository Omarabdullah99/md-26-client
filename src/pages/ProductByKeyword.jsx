import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import EventStore from "../store/EventStore";
import Layout from "../components/layout/Layout";
import EventList from "../components/events/EventList";

const ProductByKeyword = () => {
  const { ListByKeywordRequest } = EventStore();
  const { keyword } = useParams();

  useEffect(() => {
    let fetchData = async () => {
      await ListByKeywordRequest(keyword);
    };
    fetchData();
  }, [keyword]);
  return (
    <Layout>
      <EventList />
    </Layout>
  );
};

export default ProductByKeyword;
