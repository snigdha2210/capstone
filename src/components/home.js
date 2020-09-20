import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    document.title = "Capstone";
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ textAlign: "center", marginTop: "25vh", fontSize: "10em" }}>
        Capstone Project
      </h1>
      <Link to="/data" style={{ textAlign: "center", fontSize: "3em" }}>
        Data Page
      </Link>
      <br />
      <Link to="/users" style={{ textAlign: "center", fontSize: "3em" }}>
        Users Page
      </Link>
    </div>
  );
};

export default Home;
