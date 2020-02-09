import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


const NotFound = () => {
  return (
    <div className="pt-5" style={{ height: "100vh", marginTop: "5rem" }}>
      <Row className="justify-content-center align-items-end h-25">
        <Col className="text-center" md="8" lg="8" xs="12">
          <FontAwesomeIcon icon={faSearch} style={{ fontSize: "3rem" }} />
          <div className="details-title mt-4">
            Oops - We couldn't find this page
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default NotFound;
