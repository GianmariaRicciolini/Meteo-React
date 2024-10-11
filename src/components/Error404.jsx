import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center mx-4" style={{ minHeight: "100vh" }}>
      <h1 className="fs-carousel-giant fw-bold">Error 404</h1>
      <p className="fs-carousel-big">City not found.</p>
      <p className="fs-carousel-big text-center mx-4">
        Please try searching for another city, or go back to the{" "}
        <Link to="/" className="">
          Home Page
        </Link>
      </p>
    </div>
  );
};

export default Error404;
