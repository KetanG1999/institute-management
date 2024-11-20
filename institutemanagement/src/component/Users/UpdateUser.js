import React, { useEffect, useState } from "react";
import makeRequest from "../../utils";
import { useNavigate, useParams } from "react-router-dom";

export function UpdateUser (){

  const url = "http://localhost:8000/userstudent";


 const navigate = useNavigate()

  const {id} = useParams()
  // console.log(id)

  const [student,setStudent] = useState({
      name:'',
      studentnum:'',
      parentnum:'',
      email: '',
      address: ''
})

// console.log(student)


  useEffect(()=>{
    const fetchUser = async  () => {
      try {
        const result = await makeRequest(`${url}/${id}`,'get');
        setStudent(result)
        // console.log(result)
      }catch (error){
        // console.log(error)
      };
    };
fetchUser()
  },[id]);
 



  const handleChange = (e) =>{
    const {name,value} = e.target;
    setStudent((prevData) =>({
      ...prevData,
      [name]:value
    }))
  }

  const handelSubmit = (e) =>{
    e.preventDefault()
    const {name,email,studentnum,parentnum,address} = student;

   const newStudent = {
    name: name.trim(),
    studentnum: studentnum.trim(),
    parentnum: parentnum.trim() ,
    email: email.trim(),
    address: address.trim()
   }

   makeRequest(`${url}/${id}`,'put',newStudent).then((res) =>{
    if(res){
      console.log('Student Updated Successfully')
      navigate('/')
    }
   }).catch((error) => {
    console.log('faild to log in')
   })
  }

  return (
    <form className="p-4 rounded border shadow-lg bg-light" style={{ maxWidth: '500px', margin: '0 auto' }}>
    <h3 className="text-center mb-4 text-primary">Student Information</h3>
  
    {/* Name Field */}
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Name</label>
      <div className="input-group">
        <span className="input-group-text"><i className="bi bi-person"></i></span>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={student.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </div>
    </div>
  
    {/* Student Number Field */}
    <div className="mb-3">
      <label htmlFor="studentnum" className="form-label">Student Number</label>
      <div className="input-group">
        <span className="input-group-text"><i className="bi bi-person-badge"></i></span>
        <input
          type="text"
          className="form-control"
          id="studentnum"
          name="studentnum"
          value={student.studentnum}
          onChange={handleChange}
          placeholder="Enter your student number"
        />
      </div>
    </div>
  
    {/* Parent Number Field */}
    <div className="mb-3">
      <label htmlFor="parentnum" className="form-label">Parent Number</label>
      <div className="input-group">
        <span className="input-group-text"><i className="bi bi-telephone"></i></span>
        <input
          type="text"
          className="form-control"
          id="parentnum"
          name="parentnum"
          value={student.parentnum}
          onChange={handleChange}
          placeholder="Enter your parent’s number"
        />
      </div>
    </div>
  
    {/* Email Field */}
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email</label>
      <div className="input-group">
        <span className="input-group-text"><i className="bi bi-envelope"></i></span>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={student.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </div>
    </div>
  
    {/* Address Field */}
    <div className="mb-3">
      <label htmlFor="address" className="form-label">Address</label>
      <div className="input-group">
        <span className="input-group-text"><i className="bi bi-house"></i></span>
        <textarea
          className="form-control"
          id="address"
          name="address"
          value={student.address}
          onChange={handleChange}
          rows="3"
          placeholder="Enter your address"
        ></textarea>
      </div>
    </div>
  
    {/* Submit Button */}
    <button type="button" className="btn btn-primary w-100 mt-3" onClick={handelSubmit}>
      <i className="bi bi-send-fill me-2"></i>Submit
    </button>
  </form>
  
  )
}