import axios from "axios";
import { useDispatch } from "react-redux";
import { setRecruiterDetails } from "../redux/slices/Recruiter/RecruiterSlice";

// Automatically use the current protocol (HTTP or HTTPS)
const API_BASE_URL = `${window.location.protocol}//www.jobnexus.in`;

class RecruiterService {

    // To get JWT Token from Backend
    authenticateRecruiter(recruiter) {
        return axios.post(`${API_BASE_URL}/recruiter/authenticate`, recruiter);
    }

    // Get Recruiter Details from Backend using JWT Token
    loadUserByJwtToken(jwtToken) {
        return axios.get(`${API_BASE_URL}/recruiter`, {
            headers: {
                "Authorization": "Bearer " + jwtToken,
            }
        });
    }

    // Post a Job, by Recruiter JWT Token
    createNewJob(job, jwtToken) {
        return axios.post(`${API_BASE_URL}/jobs/job`, job, {
            headers: {
                "Authorization": "Bearer " + jwtToken,
            }
        });
    }

    // To Get Applicants Data for particular Job id
    getApplicantsOfJob(id, jwtToken) {
        return axios.get(`${API_BASE_URL}/jobs/applicants/${id}`, {
            headers: {
                "Authorization": "Bearer " + jwtToken,
            }
        });
    }

    getResumeOfApplicant(email, jwtToken) {
        return axios.get(`${API_BASE_URL}/jobseeker/resume/${email}`, {
            headers: {
                "Authorization": "Bearer " + jwtToken,
            }
        });
    }

    hireApplicant(jobApplicationId, jwtToken) {
        return axios.get(`${API_BASE_URL}/job-application/hire/${jobApplicationId}`, {
            headers: {
                "Authorization": "Bearer " + jwtToken,
            }
        });
    }

    updateApplicationStatus(jobApplicationId, status, jwtToken) {
        return axios.get(`${API_BASE_URL}/job-application/update/${status}/${jobApplicationId}`, {
            headers: {
                "Authorization": "Bearer " + jwtToken,
            }
        });
    }

    // Register new Recruiter
    registerRecruiter(recruiter, formdata) {
        return axios.post(`${API_BASE_URL}/recruiter`, recruiter);
    }

    // Upload Company Logo
    uploadCompanyLogo(registeredRecruiterID, formdata) {
        return axios.post(`${API_BASE_URL}/recruiter/image/${registeredRecruiterID}`, formdata);
    }

    // Delete a Job by ID with valid JWT Token
    deleteJob(id, jwtToken) {
        return axios.delete(`${API_BASE_URL}/jobs/job/${id}`, {
            headers: {
                "Authorization": "Bearer " + jwtToken,
            }
        });
    }
}

export default new RecruiterService();
