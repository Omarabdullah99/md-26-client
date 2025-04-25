import React, { useState } from "react";

import parse from "html-react-parser";
import toast from "react-hot-toast";
import EventStore from "../../store/EventStore";
import DetailsSkeleton from "../../skeleton/details-skeleton";
import UserStore from "../../store/UserStore";
import { Link } from "react-router-dom";

const Details = () => {
  const { Details, createSaveEventRequest, EventListByUserRequest } = EventStore();
  const { isLogin} = UserStore();

  console.log('islogin',isLogin)

  if (Details === null) {
    return <DetailsSkeleton />;
  }

  const AddCart = async (productID) => {
    console.log('product-id', productID)
    let res = await createSaveEventRequest({ EventID: productID });
    console.log('add-cart res', res)
    if (res) {
      toast.success("Event Save");
      await EventListByUserRequest();
    }
  };
  return (
    <div>
      <div className="container mt-2">
        <div className="row">
          <div className="">
            <h4>{Details[0]?.name}</h4>
            <h5>{Details[0]?.location}</h5>
            <h6>
              Time:{Details[0]?.time} & Date{Details[0]?.date}
            </h6>
            <p className="text-muted bodySmal my-1">
              Category: {Details[0]?.category?.name}
            </p>
            <p className="text-muted bodySmal my-1">
              User: {Details[0]?.user?.name}
            </p>
            <p className="bodySmal mb-2 mt-1">{Details[0]?.description}</p>
          </div>
        </div>

      {isLogin() ?   <button
          onClick={()=>AddCart(Details[0]?._id)}
          className="btn w-100 btn-success"
        >Save Event </button> : <Link to={'/login'} className="btn w-100 btn-success">Login</Link>}
      </div>
    </div>
  );
};

export default Details;
