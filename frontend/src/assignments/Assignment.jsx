import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { getAssignment, saveAssignment } from "../util/client";

export const Assignment = () => {

    const [assignment, setAssignment] = useState({});
    const [githubUrl, setgithubUrl] = useState('');
    const [branch, setBranch] = useState('');

    let params = useParams();
    // console.log(params);
    let { id } = params;
    // console.log(id);

    const navigate = useNavigate();

    const getUserAssignment = () => {
        getAssignment(id).then(res => {
            const receivedAssignment = res.data;
            setgithubUrl(res.data.githubUrl);
            setBranch(res.data.branch);
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(getUserAssignment, []);

    const submitAssignment = () => {
        const assignment = {
            'githubUrl': githubUrl,
            'branch': branch
        };

        saveAssignment(assignment, id).then((res) => {
            console.log(res.data);
            navigate('/dashboard');

        }).catch((err) => {
            console.log(err);
        });
    }

    // useEffect(fetchAssignment, []);

    return (
        <>
            <h1>Assignment</h1>
            <h3>
                Github URL: <input type="text" id="githubUrl" value={githubUrl} onChange={(event) => {
                    // console.log(event.target.value);
                    setgithubUrl(event.target.value);
                    // console.log(event.target.value);
                }}></input>
            </h3>

            <h3>
                Branch: <input type="text" id="branch" value={branch} onChange={(event) => {
                    setBranch(event.target.value);
                }}></input>
            </h3>
            <button onClick={submitAssignment}>Submit Assignment</button>
        </>
    )
}