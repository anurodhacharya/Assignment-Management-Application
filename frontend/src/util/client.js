import axios from "axios"

export const login = async (data) => {
    try {
        const response = await axios.post("http://localhost:8080/api/auth/login", data);
        return response;
    } catch (e) {
        throw e;
    }
}

export const createAssignment = async () => {
    try {
        const response = await axios.post("http://localhost:8080/api/assignments", null,
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

export const getAssignment = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/assignments/${id}`,
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

export const saveAssignment = async (assignment, id) => {
    try {
        const response = await axios.post(`http://localhost:8080/api/assignments/${id}`, assignment,
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