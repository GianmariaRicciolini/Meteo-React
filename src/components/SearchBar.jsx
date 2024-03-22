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
    <Form onSubmit={handleSubmit} className="py-3">
      <Form.Label className="ps-1 fs-4">Search Your City!</Form.Label>
      <Form.Control
        type="text"
        placeholder="Search cities..."
        value={searchTerm}
        onChange={handleChange}
        className="w-50 border-3 border-black"
      />
    </Form>
  );
};

export default SearchBar;
