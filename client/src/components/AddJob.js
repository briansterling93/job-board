import React, { useState, useContext } from "react";
import { StateContext } from "../contexts/StateContext.js";
import { Link } from "react-router-dom";
import axios from "axios";

const AddJob = () => {
  const { state, dispatch } = useContext(StateContext); //context

  const { title, tech_stack, salary, descrip, contact } = state; // context
  //error handling wrap (state)
  const [titleError, setTitleError] = useState("");
  const [techError, setTechError] = useState("");
  const [salaryError, setSalaryError] = useState("");
  const [descripError, setDescripError] = useState("");
  const [contactError, setContactError] = useState("");
  // error handling wrap (state)

  //POST new job to backend/sql database
  const onSubmit = async (e) => {
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
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify(newJob);

      const res = await axios.post("/jobs/add", body, config);

      // reset values
      if ((title, tech_stack, salary, descrip, contact)) {
        dispatch({
          type: "CLEAR_FORM",
        });
      }

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
                onChange={(e) =>
                  dispatch({ type: "UPDATE_TITLE", payload: e.target.value })
                }
                placeholder="Job Title"
              />
              <div id="error-div">{titleError}</div>
            </div>
            <div className="form-input">
              <h2>Technologies Required</h2>
              <input
                value={tech_stack}
                onChange={(e) =>
                  dispatch({ type: "UPDATE_TECH", payload: e.target.value })
                }
                placeholder="Python, C#, Java, React, etc.."
              />
              <div id="error-div">{techError}</div>
            </div>
            <div className="form-input">
              <h2>Salary</h2>
              <input
                value={salary}
                onChange={(e) =>
                  dispatch({ type: "UPDATE_SALARY", payload: e.target.value })
                }
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
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_DESCRIPTION",
                    payload: e.target.value,
                  })
                }
                placeholder="Describe The Details Of This Position"
              ></textarea>
              <div id="error-div">{descripError}</div>
            </div>
            <div className="form-input">
              <h2>Contact Email</h2>
              <input
                value={contact}
                onChange={(e) =>
                  dispatch({ type: "UPDATE_CONTACT", payload: e.target.value })
                }
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
