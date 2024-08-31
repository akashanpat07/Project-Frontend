import axios from "axios";

// Automatically use the current protocol (HTTP or HTTPS)
const API_BASE_URL = `${window.location.protocol}//www.jobnexus.in`;

class JobSeekerService {

    authenticateJobSeeker(credentials) {
        return axios.post(`${API_BASE_URL}/jobseeker/authenticate`, credentials)
            .catch(error => {
                console.error("Authentication failed:", error);
                throw error;
            });
    }

    loadUserByJwtToken(jwtToken) {
        return axios.get(`${API_BASE_URL}/jobseeker`, {
            headers: {
                "Authorization": "Bearer " + jwtToken,
            }
        }).catch(error => {
            console.error("Failed to load user by JWT token:", error);
            throw error;
        });
    }

    registerJobSeeker(jobseeker) {
        return axios.post(`${API_BASE_URL}/jobseeker`, jobseeker)
            .catch(error => {
                console.error("Job seeker registration failed:", error);
                throw error;
            });
    }

    uploadJobSeekerFiles(id, data) {
        return axios.post(`${API_BASE_URL}/jobseeker/files/${id}`, data)
            .catch(error => {
                console.error("Failed to upload job seeker files:", error);
                throw error;
            });
    }

}

export default new JobSeekerService();
