import axios from "axios";

// Automatically use the current protocol (HTTP or HTTPS)
const API_BASE_URL = `https://jobnexus.vercel.app`;

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
