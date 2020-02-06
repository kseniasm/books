import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Loading = () => {

    return (
        <div className="pt-5">
        <Row className="justify-content-center align-items-end h-50" >
          <Col className="text-center" md="8" lg="8" xs="12">
          <Spinner animation="border" variant="secondary" />
          </Col>
        </Row>

      </div>

       

    );

}
    
export default Loading;