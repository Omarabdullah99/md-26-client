import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CreateEventPage from "./pages/CreateEventPage";
import MyEventList from "./pages/MyEventList";
import UpdateEventPage from "./pages/UpdateEventPage";
import EventDetailsPage from "./pages/DetailsPage";
import ProductByCategory from "./pages/ProductByCategory";
import ProductByKeyword from "./pages/ProductByKeyword";
import { Toaster } from "react-hot-toast";
import SaveListPage from "./pages/SaveListPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create-event" element={<CreateEventPage />} />
          <Route path="/my-event" element={<MyEventList />} />
          <Route path="/update-event" element={<UpdateEventPage />} />
          <Route path="/details/:id" element={<EventDetailsPage />} />
          <Route path="/by-category/:id" element={<ProductByCategory />} />
          <Route path="/by-keyword/:keyword" element={<ProductByKeyword />} />
          <Route path="/saveList" element={<SaveListPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
