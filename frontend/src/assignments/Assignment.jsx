import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { getAssignment, saveAssignment } from "../util/client";
import { Button } from "react-bootstrap";

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
            console.log(res);
            setAssignment(res.data);
            setgithubUrl(res.data.githubUrl);
            setBranch(res.data.branch);
        }).catch(err => {
            console.log("Error");
            console.log(err);
        })
    }

    useEffect(getUserAssignment, []);

    const submitAssignment = () => {
        const assignmentUpdate = {
            'githubUrl': githubUrl,
            'branch': branch
        };

        saveAssignment(assignmentUpdate, id).then((res) => {
            console.log(res.data);
            navigate('/dashboard');

        }).catch((err) => {
            console.log(err);
        });
    }

    // useEffect(fetchAssignment, []);

    return (
        <>
        <div className="container mb-5 mt-3">
                <h3>Enter Assignment Details</h3>
                <span class={`badge bg-${assignment.status === 'Submitted' ? 'success' : 'warning'}`}>{assignment.status}</span>
                <div className="row form-group mt-3 mb-3">
                    <label className="h6" for="githubUrl">Github URL</label>
                    <input className="form-control" type="url" placeholder="https://github.com/username/repo-name" id="githubUrl" value={githubUrl} onChange={(event) => {
                        setgithubUrl(event.target.value)
                    }}/>
                </div>
                <div className="row form-group mb-3">
                    <label className="h6" for="branch">Branch</label>
                    <input className="form-control" type="text" placeholder="Enter the Branch" id="branch" value={branch} onChange={(event) => {
                    setBranch(event.target.value);
                }}/>
                </div>
                <Button size="md" onClick={submitAssignment}>Submit Assignment</Button>
            </div>
            {/* <h3>
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
            </h3> */}
        </>
    )
}