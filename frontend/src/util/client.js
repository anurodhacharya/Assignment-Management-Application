import axios from "axios"

export const login = async (data) => {
    try {
        const response = await axios.post("http://localhost:8080/api/auth/login", data);
        return response;
    } catch (e) {
        throw e;
    }
}
