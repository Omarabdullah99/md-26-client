import React from "react";
import { Link } from "react-router-dom";
import UserStore from "../../store/UserStore";
import UserSubmitButton from "../user/UserSubmitButton";
import EventStore from "../../store/EventStore";

const Navbar = () => {
  const { isLogin, UserLogoutRequest } = UserStore();
  const { SetSearchKeyword, SearchKeyword } = EventStore();

  const onLogout = async () => {
    await UserLogoutRequest();
    sessionStorage.clear();
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar sticky-top bg-white navbar-expand-lg navbar-light py-3">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <h5>Events </h5>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav06"
            aria-controls="nav06"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="nav06">
            <ul className="navbar-nav mt-3 mt-lg-0 mb-3 mb-lg-0 ms-lg-3">
              <li className="nav-item me-4">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              {/* Add more nav items here */}
            </ul>
          </div>

          <div className="d-lg-flex align-items-center">
            <div className="input-group">
              <input
                onChange={(e) => SetSearchKeyword(e.target.value)}
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <Link
                to={
                  SearchKeyword.length > 0
                    ? `/by-keyword/${SearchKeyword}`
                    : `/`
                }
                className="btn btn-outline-dark"
                type="submit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{ height: 24, width: 24 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0
7 7 0 0114 0z"
                  />
                </svg>
              </Link>
            </div>

            {isLogin() ? (
              <>
                <Link
                  to="/saveList"
                  className="btn ms-2 btn-light d-flex align-items-center justify-content-center gap-3"
                >
                  <p className="mb-0">Save</p>{" "}
                  <i className="bi text-dark bi-heart"></i>
                </Link>
                <Link
                  type="button"
                  className="btn ms-3 btn-success d-flex align-items-center"
                  to="/create-event"
                >
                  Dashboard
                </Link>
                <UserSubmitButton
                  onClick={onLogout}
                  text="Logout"
                  className="btn ms-3 btn-success d-flex align-items-center"
                />
              </>
            ) : (
              <>
                <Link
                  type="button"
                  className="btn ms-3 btn-success d-flex align-items-center"
                  to="/login"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
