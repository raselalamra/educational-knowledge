import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Cards from '../Cards/Cards';
 
 
 
 
const Service = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('/course_data_api.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
 
    return (
        <div className="container">
 
            <Row xs={3} md={3} className="g-4 mt-4">
                {
                    courses.map(course => <Cards courses={course}>
                        
                    </Cards>)
                }
            </Row>
 
 
        </div >
    );
};
 
export default Service;

