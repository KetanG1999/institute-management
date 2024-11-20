import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import makeRequest from "../../utils";
import { Url, BaseUrl } from "../../utils/Constant";

function AddStudent() {
  const [studentData, setStudentData] = useState({
    name: "",
    email: "",
    number: "",
    course: "",
    gender: "",
    address: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const { name, email, number, course, gender, address } = studentData;

    if (!name || !email || !number || !course || !gender || !address) {
      alert("Please fill all the fields.");
      return;
    }

    const newStudent = {
      name: name.trim(),
      email: email.trim(),
      number: number.trim(),
      course,
      gender,
      address: address.trim(),
    };

    try {
      const response = await makeRequest(`${BaseUrl}${Url.student}`, "post", newStudent);
      if (response) {
        navigate("/"); // Navigate after success
      }
    } catch (error) {
      console.error("Error adding student:", error);
      alert("Failed to add student. Please try again.");
    }
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Add New Student</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name"
              value={studentData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              value={studentData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="number">Mobile Number</label>
            <input
              type="tel"
              name="number"
              className="form-control"
              placeholder="Phone number"
              value={studentData.number}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              className="form-control"
              placeholder="Enter Your Address"
              value={studentData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Gender</label> <br />
            <div>
              <input
                type="radio"
                id="male"
                name="gender"
                className="form-check-input"
                value="male"
                onChange={handleChange}
                required
              />
              <label htmlFor="male" className="form-check-label">Male</label>
            </div>
            <div>
              <input
                type="radio"
                id="female"
                name="gender"
                className="form-check-input"
                value="female"
                onChange={handleChange}
                required
              />
              <label htmlFor="female" className="form-check-label">Female</label>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="course">Course</label>
            <select
              name="course"
              className="form-control"
              value={studentData.course}
              onChange={handleChange}
              required
            >
              <option value="">Select Course</option>
              <option value="React">React</option>
              <option value="Angular">Angular</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
            </select>
          </div>

          <button
            type="button"
            className="btn btn-info"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddStudent;
