import axios from "axios";

class JobSeekerService {

    authenticateJobSeeker(credentials)
    {
        return axios.post("https://www.jobnexus.in/jobseeker/authenticate", credentials)
    }

    loadUserByJwtToken(jwtToken)
    {
        return axios.get("https://www.jobnexus.in/jobseeker",{
            headers:{
                "Authorization": "Bearer " + jwtToken,
            }
        })
    }

    registerJobSeeker(jobseeker)
    {
        return axios.post("https://www.jobnexus.in/jobseeker", jobseeker);
    }

    uploadJobSeekerFiles(id,data)
    {
        return axios.post("https://www.jobnexus.in/jobseeker/files/"+id,data);
    }

}

export default new JobSeekerService();
