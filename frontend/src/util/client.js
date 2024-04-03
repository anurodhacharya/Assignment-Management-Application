import axios from "axios"

export const login = async (data) => {
    try {
        const response = await axios.post("http://localhost:8080/api/auth/login", data);
        return response;
    } catch (e) {
        throw e;
    }
}

export const submitAssignment = async (assignment) => {
    try {
        const response = await axios.post("http://localhost:8080/api/assignments", assignment,
                {
                    headers: {
                    Authorization: `Bearer ${localStorage.getItem('jwt')}`
                }
            });
        return response;
    } catch (e) {
        throw e;
    }
}

export const getAssignments = async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/assignments",
                {
                    headers: {
                    Authorization: `Bearer ${localStorage.getItem('jwt')}`
                }
            });
        return response;
    } catch (e) {
        throw e;
    }
}

