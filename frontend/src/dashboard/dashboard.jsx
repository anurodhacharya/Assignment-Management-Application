import React, { useEffect, useState } from 'react';
import { getAssignments, submitAssignment } from '../util/client';
import { useNavigate } from 'react-router-dom';


const Dashboard = ({jwt}) => {

    // let [assignments, setAssignments] = useState([]);

    const [assignments, setAssignments] = useState([]);

    if(assignments.length == 0) {
        console.log("Loading");
        <h1>Loading</h1>
    }

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

    const submitNewAssignment = () => {
        let assignment = {
            status: "active",
            githubUrl: "https://abc.com",
            branch: "main",
            codeReviewUrl: "http://myassignment.com"
        };

        submitAssignment(assignment).then((res) => {
            console.log(res.data);
            navigate(`/assignments/${res.data.id}`);

        }).catch((e) => {
            console.log(e);
        });
    }

    return (
        <>
        <div>
            <button onClick={submitNewAssignment}>Submit New Assignment</button>
        </div>
        <table border={1}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Status</th>
                    <th>Github URL</th>
                    <th>Branch</th>
                    <th>Code Review Video URL</th>
                </tr>
            </thead>
            {
                assignments.map((obj, key) => (
                    <tbody>
                        <tr>
                            <td>{obj.id}</td>
                            <td>{obj.status}</td>
                            <td>{obj.githubUrl}</td>
                            <td>{obj.branch}</td>
                            <td>{obj.codeReviewVideoUrl}</td>
                        </tr>
                    </tbody>
                )) 
            }
            </table>
        </>
    );
};

export default Dashboard;