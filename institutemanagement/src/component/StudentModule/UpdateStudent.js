import {useEffect,useState} from 'react';
import makeRequest from '../../utils/index.js';
import {Url,BaseUrl} from '../../utils/Constant.js'
import { useNavigate, useParams } from 'react-router-dom';


export function UpdateStudent(){
const {id} = useParams();
console.log(id)
const navigate = useNavigate()

const [studentData,SetStudentData] = useState({
    name: '',
    email: '',
    number: '',
    course: '',
    gender: '',
    address: '',
});


    useEffect(() => {

        const fetchStudent =  () =>{
            makeRequest(`${BaseUrl}${Url.student}/${id}`, 'get').then((response)=>{
                SetStudentData(response)
            }).catch((error)=>{
               console.log(error)
            })
        }
        fetchStudent()
    },[id])

    
  

    
     const handleChange = (e) => {
        const {name,value} = e.target;
        SetStudentData((prevData) => ({
            ...prevData,
            [name]:value,
        }))
    }

    const handleSubmit = () => {
        const {name,email,number,course,gender,address} =studentData;
        if (!name || !email || !number || !course || !gender || !address) {
            alert('Please fill all the fields.');
            return;
        }

        const updatedStudent = {
            name: name.trim(),
            email: email.trim(),
            number: number.trim(),
            course,
            gender,
            address: address.trim()
        };

        makeRequest(`http://localhost:8000/student/${id}`,'put',updatedStudent).then((res) => {
        if (res) {
            alert('Student updated successfully!')
            navigate('/')
        }
        }).catch((error) => {
            console.error("Error updating student:", error);
            alert("Failed to update student. Please try again.");
        })

    }
    

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-secondary text-white p-5">
                <h3>Update Student</h3>
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
                            placeholder="Phone Number"
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
                            placeholder="Enter Address"
                            value={studentData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label>Gender</label> <br />
                        <input
                            type="radio"
                            id="male"
                            name="gender"
                            className="form-check-input"
                            value="male"
                            checked={studentData.gender === 'male'}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="male" className="form-check-label ms-2">Male</label> <br />

                        <input
                            type="radio"
                            id="female"
                            name="gender"
                            className="form-check-input"
                            value="female"
                            checked={studentData.gender === 'female'}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="female" className="form-check-label ms-2">Female</label>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="course">Course</label>
                        <select
                            name="course"
                            className="form-select"
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
                        className="btn btn-info mt-3"
                        onClick={handleSubmit}
                    >
                        Update Student
                    </button>
                </form>
            </div>
        </div>
    );
}






























// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import makeRequest from "../../utils";

// function UpdateStudent() {
//     const [studentData, setStudentData] = useState({
//         name: '',
//         email: '',
//         number: '',
//         course: '',
//         gender: '',
//         address: '',
//     });

//     const { id } = useParams(); // Get student ID from URL
//     const navigate = useNavigate();

//     // Fetch the student data by ID when the component mounts
//     useEffect(() => {
//         const fetchStudent = async () => {
//             try {
//                 const response = await makeRequest(`http://localhost:8000/student/${id}`, 'get');
//                 setStudentData(response);
//             } catch (error) {
//                 console.error("Error fetching student:", error);
//                 alert("Failed to load student data.");
//             }
//         };

//         fetchStudent();
//     }, [id]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setStudentData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = async () => {
//         const { name, email, number, course, gender, address } = studentData;

//         if (!name || !email || !number || !course || !gender || !address) {
//             alert("Please fill all the fields.");
//             return;
//         }

//         const updatedStudent = {
//             name: name.trim(),
//             email: email.trim(),
//             number: number.trim(),
//             course,
//             gender,
//             address: address.trim(),
//         };

//         try {
//             const response = await makeRequest(`http://localhost:8000/student/${id}`, 'put', updatedStudent);
//             if (response) {
//                 alert("Student updated successfully!");
//                 navigate('/'); // Navigate back to the home page after success
//             }
//         } catch (error) {
//             console.error("Error updating student:", error);
//             alert("Failed to update student. Please try again.");
//         }
//     };

//     return (
//         <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
//             <div className="w-50 border bg-secondary text-white p-5">
//                 <h3>Update Student</h3>
//                 <form>
//                     <div className="mb-3">
//                         <label htmlFor="name">Name</label>
//                         <input
//                             type="text"
//                             name="name"
//                             className="form-control"
//                             placeholder="Enter Name"
//                             value={studentData.name}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>

//                     <div className="mb-3">
//                         <label htmlFor="email">Email</label>
//                         <input
//                             type="email"
//                             name="email"
//                             className="form-control"
//                             placeholder="Enter Email"
//                             value={studentData.email}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>

//                     <div className="mb-3">
//                         <label htmlFor="number">Mobile Number</label>
//                         <input
//                             type="tel"
//                             name="number"
//                             className="form-control"
//                             placeholder="Phone Number"
//                             value={studentData.number}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>

//                     <div className="mb-3">
//                         <label htmlFor="address">Address</label>
//                         <input
//                             type="text"
//                             name="address"
//                             className="form-control"
//                             placeholder="Enter Address"
//                             value={studentData.address}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>

//                     <div className="mb-3">
//                         <label>Gender</label> <br />
//                         <input
//                             type="radio"
//                             id="male"
//                             name="gender"
//                             className="form-check-input"
//                             value="male"
//                             checked={studentData.gender === 'male'}
//                             onChange={handleChange}
//                             required
//                         />
//                         <label htmlFor="male" className="form-check-label ms-2">Male</label> <br />

//                         <input
//                             type="radio"
//                             id="female"
//                             name="gender"
//                             className="form-check-input"
//                             value="female"
//                             checked={studentData.gender === 'female'}
//                             onChange={handleChange}
//                             required
//                         />
//                         <label htmlFor="female" className="form-check-label ms-2">Female</label>
//                     </div>

//                     <div className="mb-3">
//                         <label htmlFor="course">Course</label>
//                         <select
//                             name="course"
//                             className="form-select"
//                             value={studentData.course}
//                             onChange={handleChange}
//                             required
//                         >
//                             <option value="">Select Course</option>
//                             <option value="React">React</option>
//                             <option value="Angular">Angular</option>
//                             <option value="Python">Python</option>
//                             <option value="Java">Java</option>
//                         </select>
//                     </div>

//                     <button
//                         type="button"
//                         className="btn btn-info mt-3"
//                         onClick={handleSubmit}
//                     >
//                         Update Student
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default UpdateStudent;
