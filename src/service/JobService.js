import axios from "axios";

class JobService {

    getAllJobs(){
        return axios.get("https://www.jobnexus.in/jobs");
    }

    applyForJob(id, jwtToken)
    {
        return axios.get("https://www.jobnexus.in/job-application/"+id,{
            headers : {
                "Authorization": "Bearer " + jwtToken
            }
        })
    }

}

export default new JobService();
