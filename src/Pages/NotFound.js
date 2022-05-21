import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="error-section">
      <h1 className="error">
        404 Error <br /> Page Not Found
      </h1>
      <p>
        Go to <Link to="/">Home</Link> Page
      </p>
    </main>
  );
};

export default NotFound;
