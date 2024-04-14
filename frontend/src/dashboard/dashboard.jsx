import React, { useEffect, useState } from 'react';
import { getAssignments, createAssignment } from '../util/client';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Dashboard = ({jwt}) => {

    // let [assignments, setAssignments] = useState([]);

    const [assignments, setAssignments] = useState([]);

    // if(assignments.length == 0) {
    //     console.log("Loading");
    //     <h1>Loading</h1>
    // }

    const fetchAssignments = () => {
        getAssignments().then((res) => {
            console.log("Success");
            console.log(res.data);
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
            console.log(res.data);
            navigate(`/assignments/${res.data.id}`);

        }).catch((e) => {
            console.log(e);
        });
    }

    return (
        <>
        <div>
            <button onClick={createNewAssignment}>Submit New Assignment</button>
        </div>
        <table border={1}>
            <thead>
                <tr>
                    <th>Id</th>
                    {/* <th>Status</th> */}
                    <th>Github URL</th>
                    {/* <th>Branch</th> */}
                    {/* <th>Code Review Video URL</th> */}
                    <th>Link</th>
                </tr>
            </thead>
            {
                assignments.map((obj, key) => (
                    <tbody>
                        <tr>
                            <td>{obj.id}</td>
                            {/* <td>{obj.status}</td> */}
                            <td>{obj.githubUrl}</td>
                            {/* <td>{obj.branch}</td> */}
                            {/* <td>{obj.codeReviewVideoUrl}</td> */}
                            <td><Link to={`/assignments/${obj.id}`}>Assignment</Link></td>
                        </tr>
                    </tbody>
                )) 
            }
            </table>
        </>
    );
};

export default Dashboard;