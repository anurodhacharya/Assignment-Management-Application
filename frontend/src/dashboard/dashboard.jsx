import React, { useEffect, useState } from 'react';
import { getAssignments, createAssignment } from '../util/client';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button, Container, Row, Col } from 'react-bootstrap';

const Dashboard = ({jwt}) => {

    // let [assignments, setAssignments] = useState([]);

    const [assignments, setAssignments] = useState([]);

    // if(assignments.length == 0) {
    //     console.log("Loading");
    //     <h1>Loading</h1>
    // }

    const fetchAssignments = () => {
        getAssignments().then((res) => {
            // console.log("Success");
            // console.log(res.data);
            setAssignments(res.data);
        }).catch(() => {
            console.log("Error");
        })
    }

    // const fetchAssignments = () => {
    //     // call getAssignments method
    // }

    useEffect(fetchAssignments, []);


    let navigate = useNavigate();

    const createNewAssignment = () => {
        // let assignment = {
        //     status: "active",
        //     // githubUrl: "https://abc.com",
        //     // branch: "main",
        //     // codeReviewUrl: "http://myassignment.com"
        // };

        createAssignment().then((res) => {
            // console.log(res.data);
            navigate(`/assignments/${res.data.id}`);

        }).catch((e) => {
            console.log(e);
        });
    }

    return (
        <>

        <div className='mb-4' style={{margin: '2em'}}>
            <Button size='lg' onClick={createNewAssignment}>Create New Assignment</Button>
        </div>

            {/* <Container> */}
                {/* <Row> */}
                <div>
                    <div className='d-grid gap-5' style={{gridTemplateColumns: 'repeat(auto-fit, 18rem'}}>

                    {
                        assignments.map((obj, key) => (
                            <Col style={{ width: '18rem', marginTop: '12px'}}>
                                <Card className='h-100' style={{ width: '18rem', marginTop: '10px' }}>
                                <Card.Body className='d-flex flex-column justify-content-spacing'>
                                    <Card.Title>Assignment #{obj.id}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{obj.status}</Card.Subtitle>
                                    <Card.Text>
                                    Github URL: {obj.githubUrl}
                                    </Card.Text>
                                    {/* <Card.Link href={obj.githubUrl}>Github URL</Card.Link> */}
                                    <Button variant='secondary' onClick={() => {
                                        navigate(`/assignments/${obj.id}`)
                                    }}>Edit Assignment</Button>
                                </Card.Body>
                                </Card>
                            </Col>       
                        )) 
                    }
                    </div>
                    </div>
                {/* </Row> */}
             {/* </Container> */}
            
        </>
    );
};

export default Dashboard;