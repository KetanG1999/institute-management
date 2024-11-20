import { useState } from "react";
import makeRequest from "../../utils";
import { useNavigate } from "react-router-dom";
import { Url,BaseUrl } from "../../utils/Constant";
const url = "http://localhost:8000/userbatch";

export function AddBatch() {

  const navigate = useNavigate()

  const [addBatch, setAddBatch] = useState({
    batchname: "",
    startDate: "",
    endDate: "",
    batchTime: "",
    numStudents: "",
  });

  console.log(addBatch);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddBatch((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { batchname, startDate, endDate, batchTime, numStudents } = addBatch;

    if (!batchname || !startDate || !endDate || !batchTime || !numStudents) {
      alert("Please fill all the fields.");
      return;
    }

    const newBatch = {
      batchname: batchname,
      startDate: startDate,
      endDate: endDate,
      batchTime: batchTime,
      numStudents: numStudents.trim(),
    };

    try {
      const result = await makeRequest(`${BaseUrl}${Url.userbatch}`,'post', newBatch);
      setAddBatch(result);
      alert('New batch added sucessfully')
      navigate('/')
      
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <form 
      className="p-4 border rounded shadow-lg"
      style={{ maxWidth: "500px", margin: "0 auto" }}
    >
      <h3 className="text-center mb-4 text-primary">Add New Batch</h3>

      {/* Batch Name Dropdown */}
      <div className="mb-3">
        <label htmlFor="batchname" className="form-label">
          Batch Name
        </label>
        <select
          className="form-select"
          id="batchname"
          name="batchname"
          value={addBatch.batchname}
          onChange={handleChange}
          required
        >
          <option value="">Select Batch Name</option>
          <option value="React Js">react</option>
          <option value="Python">Python</option>
          <option value="Angular">Angular</option>
          <option value="Java">Java</option>
        </select>
      </div>

      {/* Start Date Field */}
      <div className="mb-3">
        <label htmlFor="startDate" className="form-label">
          Start Date
        </label>
        <input
          type="date"
          className="form-control"
          id="startDate"
          name="startDate"
          value={addBatch.startDate}
          onChange={handleChange}
          required
        />
      </div>

      {/* End Date Field */}
      <div className="mb-3">
        <label htmlFor="startDate" className="form-label">
          Start Date
        </label>
        <input
          type="date"
          className="form-control"
          id="endDate"
          name="endDate"
          value={addBatch.endDate}
          onChange={handleChange}
          required
        />
      </div>

      {/* Batch Time Field */}
      <div className="mb-3">
        <label htmlFor="batchTime" className="form-label">
          Batch Time
        </label>
        <input
          type="time"
          className="form-control"
          id="batchTime"
          name="batchTime"
          value={addBatch.batchTime}
          onChange={handleChange}
          required
        />
      </div>

      {/* Number of Students Field */}
      <div className="mb-3">
        <label htmlFor="numStudents" className="form-label">
          Number of Students
        </label>
        <input
          type="number"
          className="form-control"
          id="numStudents"
          name="numStudents"
          value={addBatch.numStudents}
          onChange={handleChange}
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="btn btn-primary w-100 mt-3"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
}
