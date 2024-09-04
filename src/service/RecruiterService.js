import axios from "axios";

// Automatically use the current protocol (HTTP or HTTPS)
const API_BASE_URL = `https://www.jobnexus.in`;

class RecruiterService {
    // To get JWT Token from Backend
    authenticateRecruiter(recruiter) {
        return axios.post(`${API_BASE_URL}/recruiter/authenticate`, recruiter)
            .catch(error => {
                // Handle errors here
                console.error("Error authenticating recruiter:", error);
                throw error;
            });
    }

    // Get Recruiter Details from Backend using JWT Token
    loadUserByJwtToken(jwtToken) {
        return axios.get(`${API_BASE_URL}/recruiter`, {
            headers: {
                "Authorization": `Bearer ${jwtToken}`,
            }
        })
        .catch(error => {
            console.error("Error loading user by JWT token:", error);
            throw error;
        });
    }

    // Post a Job, by Recruiter JWT Token
    createNewJob(job, jwtToken) {
        return axios.post(`${API_BASE_URL}/jobs/job`, job, {
            headers: {
                "Authorization": `Bearer ${jwtToken}`,
            }
        })
        .catch(error => {
            console.error("Error creating new job:", error);
            throw error;
        });
    }

    // To Get Applicants Data for particular Job id
    getApplicantsOfJob(id, jwtToken) {
        return axios.get(`${API_BASE_URL}/jobs/applicants/${id}`, {
            headers: {
                "Authorization": `Bearer ${jwtToken}`,
            }
        })
        .catch(error => {
            console.error("Error getting applicants of job:", error);
            throw error;
        });
    }

    // Get Resume of Applicant
    getResumeOfApplicant(email, jwtToken) {
        return axios.get(`${API_BASE_URL}/jobseeker/resume/${email}`, {
            headers: {
                "Authorization": `Bearer ${jwtToken}`,
            }
        })
        .catch(error => {
            console.error("Error getting resume of applicant:", error);
            throw error;
        });
    }

    // Hire Applicant
    hireApplicant(jobApplicationId, jwtToken) {
        return axios.get(`${API_BASE_URL}/job-application/hire/${jobApplicationId}`, {
            headers: {
                "Authorization": `Bearer ${jwtToken}`,
            }
        })
        .catch(error => {
            console.error("Error hiring applicant:", error);
            throw error;
        });
    }

    // Update Application Status
    updateApplicationStatus(jobApplicationId, status, jwtToken) {
        return axios.get(`${API_BASE_URL}/job-application/update/${status}/${jobApplicationId}`, {
            headers: {
                "Authorization": `Bearer ${jwtToken}`,
            }
        })
        .catch(error => {
            console.error("Error updating application status:", error);
            throw error;
        });
    }

    // Register new Recruiter
    registerRecruiter(recruiter) {
        return axios.post(`${API_BASE_URL}/recruiter`, recruiter)
            .catch(error => {
                console.error("Error registering recruiter:", error);
                throw error;
            });
    }

    // Upload Company Logo
    uploadCompanyLogo(registeredRecruiterID, formData) {
        return axios.post(`${API_BASE_URL}/recruiter/image/${registeredRecruiterID}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .catch(error => {
            console.error("Error uploading company logo:", error);
            throw error;
        });
    }

    // Delete a Job by ID with valid JWT Token
    deleteJob(id, jwtToken) {
        return axios.delete(`${API_BASE_URL}/jobs/job/${id}`, {
            headers: {
                "Authorization": `Bearer ${jwtToken}`,
            }
        })
        .catch(error => {
            console.error("Error deleting job:", error);
            throw error;
        });
    }
}

export default new RecruiterService();
