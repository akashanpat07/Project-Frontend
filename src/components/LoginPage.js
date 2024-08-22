import '../css/LoginPage.css'
import sideImage from "../assets/loginSide.svg"
import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { setRecruiterDetails } from '../redux/slices/Recruiter/RecruiterSlice';
import RecruiterService from '../service/RecruiterService';
import { toast } from 'react-toastify';
import JobSeekerService from '../service/JobSeekerService';

const LoginPage = () => {
  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(".left", { origin: "left", duration: 1500, distance: "200px" });
    sr.reveal(".emerge", { scale: 0.7, duration: 1500 });

    return () => sr.destroy(); // Cleanup on unmount
  }, []);

  const [user, setUser] = useState({
    email: "",
    password: "",
    roleType: "JobSeeker",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const storeToken = (holder, token) => {
    const jwtTokenDetails = { holder, jwtToken: token };
    localStorage.setItem("jwt-token", JSON.stringify(jwtTokenDetails));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", user.email);
    formData.append("password", user.password);

    // Jobseeker
    if (user.roleType === "JobSeeker") {
      JobSeekerService.authenticateJobSeeker(user)
        .then((response) => {
          const jwtToken = response.data.jwtToken;
          storeToken("JOBSEEKER", jwtToken);
          toast.success("Successfully authenticated!");
          navigate("/");
        })
        .catch((error) => {
          if (error.response) {
            toast.error(error.response.data.message || "Something went wrong");
          } else {
            toast.error("Network error");
          }
        });
    }

    // Recruiter
    else if (user.roleType === "Recruiter") {
      RecruiterService.authenticateRecruiter(formData)
        .then((response) => {
          const jwtToken = response.data.jwtToken;
          storeToken("RECRUITER", jwtToken);
          toast.success("Successfully authenticated!");
          navigate("/dashboard");
        })
        .catch((error) => {
          if (error.response) {
            toast.error(error.response.data.message || "Something went wrong");
          } else {
            toast.error("Network error");
          }
        });
    }

    // Admin -> Optional
    else if (user.roleType === "Admin") {
      // Handle Admin login if needed
    }
  };

  return (
    <div className="container mt-5 mb-5 p-4">
      <div className="row">
        {/* Left Side Image */}
        <div className="col-sm-12 col-md-6 col-lg-6 mb-5 left">
          <img
            src={sideImage}
            alt=""
            className="img-fluid login-side-image"
          />
        </div>

        {/* Right Side Form */}
        <div className="col-sm-12 col-md-6 col-lg-6 text-center ps-sm-1 pe-sm-1 ps-md-1 pe-md-1 ps-lg-5 pe-lg-5 emerge">
          <div className="p-sm-5 p-md-2 p-lg-5">
            <div className="display-5 text-success mb-5">Welcome Back</div>
            <form onSubmit={handleLogin}>
              {/* Email */}
              <div className="form-group">
                <label htmlFor="email">Email<span className='text-danger'> *</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoFocus
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Password */}
              <div className="form-group mt-4">
                <label htmlFor="password">Password<span className='text-danger'> *</span></label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\s])(?=.*[\S])[^\s]{8,}$"
                  title="Password must contain at least one uppercase letter, one lowercase letter, one digit, and no spaces"
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Role Type */}
              <div className="mb-4 text-start">
                <label htmlFor="roleType" className="text-muted">Who are you?</label>
                <select
                  className="form-select mt-1"
                  name="roleType"
                  id="roleType"
                  value={user.roleType}
                  onChange={handleChange}
                >
                  <option value="JobSeeker">JobSeeker</option>
                  <option value="Recruiter">Recruiter</option>
                  {/* <option value="Admin">Admin</option> */}
                </select>
              </div>
              {/* Login Button */}
              <button type="submit" className="btn btn-outline-success">
                Log Me In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
