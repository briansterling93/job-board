import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import PopulateContextProvider, {
  PopulateContext
} from "../contexts/PopulateContext.js";

const AddJob = () => {
  const {
    setJobTitle,
    setJobDescrip,
    setJobSalary,
    setJobTechStack
  } = useContext(PopulateContext);
  const [formData, setFormData] = useState({
    title: "",
    tech_stack: "",
    salary: "",
    descrip: "",
    contact: ""
  });

  const [titleError, setTitleError] = useState("");
  const [techError, setTechError] = useState("");
  const [salaryError, setSalaryError] = useState("");
  const [descripError, setDescripError] = useState("");
  const [contactError, setContactError] = useState("");

  const { title, tech_stack, salary, descrip, contact } = formData;
  //General UI Input Function
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //POST new job to backend/sql database
  const onSubmit = async e => {
    e.preventDefault();

    const newJob = { title, tech_stack, salary, descrip, contact };

    try {
      //Error Handling Wrap (below)
      if (!title) {
        setTitleError("Job title is required");
      }

      if (title) {
        setTitleError("");
      }

      if (!tech_stack) {
        setTechError("The required technologies are required");
      }

      if (tech_stack) {
        setTechError("");
      }

      if (!salary) {
        setSalaryError("Please enter the annual salary for this postion");
      }

      if (salary) {
        setSalaryError("");
      }

      if (!descrip) {
        setDescripError("Job description is required");
      }

      if (descrip) {
        setDescripError("");
      }

      if (!contact) {
        //add functionality to verify that it has the '@' symbol the UI entered email
        setContactError("Please enter a valid email address");
      }

      if (contact) {
        setContactError("");
      }

      //Error Handling Wrap (above)

      //success & update backend (below)
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };

      const body = JSON.stringify(newJob);

      const res = await axios.post("/jobs/add", body, config);

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="post-main">
      <div id="post-secondary">
        <div id="form-main">
          <div id="form-secondary">
            <div className="form-input">
              <h2>Job Title</h2>
              <input
                value={title}
                onChange={e => onChange(e)}
                name="title"
                placeholder="Job Title"
              />
              <div id="error-div">{titleError}</div>
            </div>
            <div className="form-input">
              <h2>Technologies Required</h2>
              <input
                value={tech_stack}
                onChange={e => onChange(e)}
                name="tech_stack"
                placeholder="Python, C#, Java, React, etc.."
              />
              <div id="error-div">{techError}</div>
            </div>
            <div className="form-input">
              <h2>Salary</h2>
              <input
                value={salary}
                onChange={e => onChange(e)}
                name="salary"
                placeholder="Annual Salary"
              />
              <div id="error-div">{salaryError}</div>
            </div>
            <div className="form-input">
              <h2>Job Description</h2>

              <textarea
                rows="3"
                cols="50"
                value={descrip}
                onChange={e => onChange(e)}
                name="descrip"
                placeholder="Describe The Details Of This Position"
              ></textarea>
              <div id="error-div">{descripError}</div>
            </div>
            <div className="form-input">
              <h2>Contact Email</h2>
              <input
                value={contact}
                onChange={e => onChange(e)}
                name="contact"
                placeholder="Contact Email Address"
              />
              <div id="error-div">{contactError}</div>
            </div>
            <div className="form-input">
              <button onClick={onSubmit}>Post Job</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
