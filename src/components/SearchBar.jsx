import React, { useState } from "react";
import { Form } from "react-bootstrap";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      const city = encodeURIComponent(searchTerm.trim());
      window.location.href = `/weather/${city}`;
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="py-3 d-flex w-50 justify-content-around align-items-center">
      <Form.Control
        type="text"
        placeholder="Search cities..."
        value={searchTerm}
        onChange={handleChange}
        className="border-3 border-black bg-light w-50"
      />
      <h4 className="pe-3 fs-2 m-0 fw-bold">Search Your City!</h4>
    </Form>
  );
};

export default SearchBar;
