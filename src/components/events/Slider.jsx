import React from "react";
import { Link } from "react-router-dom";
import SliderSkeleton from "../../skeleton/slider-skeleton";
import EventStore from "../../store/EventStore";

const Slider = () => {
  const { EventList } = EventStore();

  if (EventList === null) {
    return <SliderSkeleton />;
  } else {
    return (
      <div>
        <div
          id="carouselExampleDark"
          className="carousel hero-bg carousel-light slide"
        >
          <div className="carousel-indicators">
            {EventList?.slice(0, 2)?.map((item, i) => {
              return (
                <button
                  key={i}
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to={i}
                  className={i === 0 ? "active bg-white" : "bg-white"}
                  aria-current={i === 0 ? "true" : undefined}
                  aria-label=""
                ></button>
              );
            })}
          </div>

          <div className="carousel-inner py-5">
            {EventList?.slice(0, 2)?.map((item, i) => {
              let active = "carousel-item";
              if (i === 0) {
                active = "carousel-item active";
              }
              return (
                <div key={i} className={active} data-bs-interval="10000">
                  <div className="container-fluid">
                    <div className="row px-5 justify-content-center">
                      <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                        <h1 className="headline-1 fw-bolder text-white">
                          {item?.name}
                        </h1>
                        <p className="h2 fw-bolder">{item?.location}</p>
                        <p className="text-dark">{item?.description}</p>
                      </div>
                      <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                        
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            className="carousel-control-prev btn rounded-5"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next btn"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
};

export default Slider;
