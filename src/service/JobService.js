import axios from "axios";

// Base URL for the API, replace with your domain
const API_BASE_URL = "http://jobnexus"; // or https://jobnexus if using HTTPS

class JobService {

    getAllJobs() {
        return axios.get(`${API_BASE_URL}/jobs`);
    }

    applyForJob(id, jwtToken) {
        return axios.get(`${API_BASE_URL}/job-application/${id}`, {
            headers: {
                "Authorization": "Bearer " + jwtToken
            }
        });
    }

}

export default new JobService();
