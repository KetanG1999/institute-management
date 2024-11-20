import React, { useEffect, useState } from "react";
import makeRequest from "../../utils";
import { useNavigate } from "react-router-dom";

export function UserDashboord() {

  const [student,setStudent] = useState([])
  // console.log(student.parentnum);
  const navigate =  useNavigate()


  const url = "http://localhost:8000/userstudent";

  useEffect(() =>{
    fetchUser();
  },[])

  const fetchUser = async () => {
    try {
      const result = await makeRequest(url, "get");
      setStudent(result)
    
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="container">
      <header>
        <h2>CRUD App with JSON Server</h2>
      </header>

      <button className="btn btn-success my-3"  onClick={() =>{
                navigate('/AddUser')
              }} >Add Batch</button>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Parent</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {student.map((std,index) => (
          <tr key={std.id}>
            <td>{std.id}</td>
            <td>{std.name}</td>
            <td>{std.email}</td>
            <td>{std.studentnum}</td>
            <td>{std.parentnum}</td>
            
            <td>
              <button
                className="btn btn-sm btn-primary btn-custom"
                onClick={() => { navigate(`/UpdateUser/${std.id}`) }}
              >
                Edit Student
              </button>

              <button
                className="btn btn-sm btn-danger btn-custom mx-2"
                onClick={() => {}}
              >
                Delete
              </button>

              <button
                className="btn btn-sm btn-info btn-custom"
                onClick={() => {}}
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
