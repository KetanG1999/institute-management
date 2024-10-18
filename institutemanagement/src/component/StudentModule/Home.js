import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";



function Home () {
        // const users = useSelector((state) => state.users);
        const [student,setStudent] = useState([])
        const navigate = useNavigate()

        const url= "http://localhost:8000/student"

        useEffect(()=>{
            axios.get(`${url}`).then((resp)=>{
                console.log(resp.data);
                setStudent(resp.data)
                
            })
            .catch((error)=>{
                console.log(error);
                
            })
        },[])
    return (
        <div className="container">
            <h2>Crud App with Jason Server</h2>
            {/* <Link to='/AddStudent' className="btn btn-success my-3">Add Student</Link> */}
            <button className="btn btn-success my-3" onClick={()=>navigate('/add-student')}>Add Student</button>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {student.map((student,index) => (
                        <tr key={student.id}>
                            <td>{index+1}</td>
                            <td>{student.Student_name}</td>
                            <td>{student.Student_Email}</td>
                            <td>
                                <button className="btn btn-sm btn-primary">Edit</button>
                                <button className="btn btn-sm btn-danger">Delete</button>
                                <button className="btn btn-sm btn-info">View</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home;