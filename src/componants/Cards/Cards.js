import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import '../Cards/Cards.css'; 
const Cards = (props) => {
    const { picture, instructor_name, details, course_name, subject } = props.courses
    return (
        <div className="card-hover col-12">
            <Col>
                <Card>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>Name:{instructor_name}</Card.Title>
                        <h5>Course Name:{course_name}</h5>
                        <p>Subject:{subject}</p>
                        <p><small>Details:{details}</small></p>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};
 
export default Cards;

