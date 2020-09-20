import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const h1 = { textAlign: "center", marginTop: "25vh" };
const col = { border: "black 1px solid", height: "70vh" };

const Data = () => {
  const [i, setI] = useState(0);
  const arr = ["#a", "#b", "#c", "#d"];
  useEffect(() => {
    if (i == arr.length) i = 0;
  }, i);
  useEffect(() => {
    document.title = "Data Page";
  }, []);

  return (
    <>
      <Link to="/">
        <h4 style={{ textAlign: "center", marginTop: "2em" }}>Home</h4>
      </Link>
      <div
        style={{
          border: "black 1px solid",
          margin: "2em",
          padding: "2em"
        }}
      >
        <Row>
          <Col lg={3} style={col}>
            <h1 style={h1}>LEFT</h1>
          </Col>
          <Col lg={9} style={col}>
            <Link to={`/data/${arr[i]}`}>
              <h1 style={h1} onClick={() => setI(i + 1)}>
                {`${i == arr.length ? setI(0) : ""}`}
                {arr[i]}
              </h1>
            </Link>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Data;
