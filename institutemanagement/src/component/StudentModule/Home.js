// import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../css/home.css";
// import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import makeRequest from "../../utils";

function Home() {
  // const users = useSelector((state) => state.users);
  const [student, setStudent] = useState([]);
  const navigate = useNavigate();

  const url = "http://localhost:8000/student";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await makeRequest(url, "get");
        // console.log(data)
        setStudent(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [url]);

  const handleDelete = async (id) => {
    try {
      await makeRequest(`${url}/${id}`, "delete");
      setStudent((pervStudent) =>
        pervStudent.filter((student) => student.id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Crud App with Jason Server</h2>
      {/* <Link to='/AddStudent' className="btn btn-success my-3">Add Student</Link> */}
      <button
        className="btn btn-success my-3"
        onClick={() => navigate("/add-student")}
      >
        Add Student
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {student.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.number}</td>

              <td>
                {/* <button
                  className="btn btn-sm btn-primary btn-custom"
                  onClick={() => {
                    navigate(`/update-student/${student.id}`);
                  }}
                >
                  Edit
                </button> */}

                <button
                  className="btn btn-sm btn-primary btn-custom"
                  onClick={() => {
                    navigate(`/update-student/${student.id}`);
                  }}
                >
                  Edit
                </button>

                <button
                  className="btn btn-sm btn-danger btn-custom"
                  onClick={() => {
                    handleDelete(student.id);
                  }}
                >
                  Delete
                </button>
                <button
                  className="btn btn-sm btn-info btn-custom"
                  onClick={() => navigate(`/view-page/${student.id}`)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
