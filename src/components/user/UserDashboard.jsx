import React, { useState } from "react";
import {
  FaHome,
  FaPlus,
  FaList,
  FaEdit,
  FaBox,
  FaBoxes,
  FaBars,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import '../../assets/css/sidebar.css'
import Footer from "../layout/Footer";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    { path: "/", name: "Home", icon: <FaHome /> },
    { path: "/create-event", name: "Create Event", icon: <FaPlus /> },
    { path: "/my-event", name: "My Event List", icon: <FaList /> },
    { path: "/update-event", name: "Update Event", icon: <FaEdit /> },

  ];
  return (
    <div>
    <div className="container-sidebar">
      <div style={{ width: isOpen ? "300px" : "80px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} /> 
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
        
    </div>
  );
};

export default Sidebar;
