import axios from "axios";

// Base URL for the API, replace with your domain
const API_BASE_URL = "https://jobnexus.in"; // or https://jobnexus if using HTTPS

class JobSeekerService {

    authenticateJobSeeker(credentials) {
        return axios.post(`${API_BASE_URL}/jobseeker/authenticate`, credentials);
    }

    loadUserByJwtToken(jwtToken) {
        return axios.get(`${API_BASE_URL}/jobseeker`, {
            headers: {
                "Authorization": "Bearer " + jwtToken,
            }
        });
    }

    registerJobSeeker(jobseeker) {
        return axios.post(`${API_BASE_URL}/jobseeker`, jobseeker);
    }

    uploadJobSeekerFiles(id, data) {
        return axios.post(`${API_BASE_URL}/jobseeker/files/${id}`, data);
    }

}

export default new JobSeekerService();
