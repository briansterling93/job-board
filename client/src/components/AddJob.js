import React, { useState } from "react";
import axios from "axios";

const AddJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    tech_stack: "",
    salary: "",
    descrip: "",
    contact: ""
  });

  const { title, tech_stack, salary, descrip, contact } = formData;
  //form ui input
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //post new job to the backend/database
  const onSubmit = async e => {
    e.preventDefault();

    const newJob = { title, tech_stack, salary, descrip, contact };

    try {
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
            </div>
            <div className="form-input">
              <h2>Technologies Required</h2>
              <input
                value={tech_stack}
                onChange={e => onChange(e)}
                name="tech_stack"
                placeholder="Python, C#, Java, React, etc.."
              />
            </div>
            <div className="form-input">
              <h2>Salary</h2>
              <input
                value={salary}
                onChange={e => onChange(e)}
                name="salary"
                placeholder="Annual Salary"
              />
            </div>
            <div className="form-input">
              <h2>Job Description</h2>
              <input
                value={descrip}
                onChange={e => onChange(e)}
                name="descrip"
                placeholder="Job Description"
              />
            </div>
            <div className="form-input">
              <h2>Contact Email</h2>
              <input
                value={contact}
                onChange={e => onChange(e)}
                name="contact"
                placeholder="Contact Email Address"
              />
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
