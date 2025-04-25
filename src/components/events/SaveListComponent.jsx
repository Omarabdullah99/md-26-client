import React, { useEffect } from "react";
import EventStore from "../../store/EventStore";
import CartSkeleton from "../../skeleton/cart-skeleton";

const SaveListComponent = () => {
  const { SaveEventList, SaveEventListByUserRequest } = EventStore();

  useEffect(() => {
    (async () => {
      await SaveEventListByUserRequest();
    })();
  }, []);

  if (SaveEventList == null) {
    return <CartSkeleton />;
  } else if (SaveEventList.length === 0) {
    return <h1 className="text-center">No data available</h1>;
  } else {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card p-4">
              <ul className="list-group list-group-flush">
                {SaveEventList.map((item, i) => {
                  return (
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                      <img
                        className="rounded-1"
                        width="90"
                        height="auto"
                        src={item["product"]["image"]}
                      />
                      <div className="ms-2 me-auto">
                        <p className="fw-lighter m-0">
                          {item["product"]["name"]}
                        </p>
                        <p className="fw-lighter m-0">
                          {item["product"]["date"]}
                        </p>
                        <p className="fw-lighter m-0">
                          {item["product"]["time"]}
                        </p>
                        <p className="fw-lighter m-0">
                          {item["product"]["description"]}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default SaveListComponent;
