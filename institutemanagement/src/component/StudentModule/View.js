import React, { useEffect, useState } from "react";
import makeRequest from "../../utils";
import { useParams } from "react-router-dom";
import { BaseUrl, Url } from "../../utils/Constant";
function View() {
const {id} = useParams();

console.log(id)

  const [studentData, setStudentData] = useState([]);

  console.log(`its fatching the data for url ${studentData}`);

  const fetchData = async () => {
    try {
      const url = `${BaseUrl}${Url.student}/${id}`;
      const result = await makeRequest(url, "get");
      setStudentData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  },[]);
  
 

  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Student List</h2>
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Course</th>
              <th>Gender</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            
              <tr>
                <td>{studentData.id}</td>
                <td>{studentData.name}</td>
                <td>{studentData.email}</td>
                <td>{studentData.number}</td>
                <td>{studentData.course}</td>
                <td>{studentData.gender}</td>
                <td>{studentData.address}</td>
              </tr>
            
          </tbody>
        </table>
      </div>
    </>
  );
}

export default View;
