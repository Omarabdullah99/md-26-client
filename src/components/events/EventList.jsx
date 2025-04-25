import React from "react";
import { Link } from "react-router-dom";
import EventStore from "../../store/EventStore";
import ProductsSkeleton from "../../skeleton/products-skeleton";


const EventList = () => {
  const { EventList } = EventStore();

  return (
    <div>
      <div className="container">
        <div className="row">
          {EventList === null ? (
            <ProductsSkeleton />
          ) : (
            EventList?.map((item, i) => {
              return (
                <div key={i} className="col-md-3 p-2 col-lg-3 col-sm-6 col-12">
                  <Link
                    to={`/details/${item["_id"]}`}
                    className="card shadow-sm h-100 rounded-3 bg-white"
                  >
                    <div className="card-body">
                      <h5 className=" my-2">
                        {item?.name}
                      </h5>
                      <h6 className=" my-2">
                        {item?.location}
                      </h6>

                      <p className="bodySmal text-secondary my-2">
                        {item?.time}
                      </p>
                      <p className="bodySmal text-secondary my-2">
                        {item?.date}
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default EventList;
