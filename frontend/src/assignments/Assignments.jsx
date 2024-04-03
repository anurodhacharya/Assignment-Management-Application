import { useEffect, useState } from "react"
import { getAssignments } from "../util/client";

export const Assignments = () => {

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

    useEffect(fetchAssignments, []);

    return (
        <>
            <table border={1}>
                <tr>
                    <th>Id</th>
                    <th>Status</th>
                    <th>Github URL</th>
                    <th>Branch</th>
                    <th>Code Review Video URL</th>
                </tr>
            {
                assignments.map((obj) => (
                    <tr>
                        <td>{obj.id}</td>
                        <td>{obj.status}</td>
                        <td>{obj.githubUrl}</td>
                        <td>{obj.branch}</td>
                        <td>{obj.codeReviewVideoUrl}</td>
                    </tr>
                )) 
            }
            </table>
        </>
    )
}