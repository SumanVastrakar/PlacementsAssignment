import React from 'react'
import { useState, useEffect } from 'react'

import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineUser, AiOutlineMail, AiFillLock } from "react-icons/ai";
import { Link } from "react-router-dom"
import { FaBookReader } from "react-icons/fa";
import { GrUser } from "react-icons/gr";
import { ToastContainer, toast } from 'react-toastify';
import { FaUserCircle, FaUserEdit } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import { register } from '../../Redux/Auth/authSlice'


const initialState = {
  firstName : "",
  lastName : "",
  email : "",
  passowrd : "",
  confirmPassword : "",
  mobileNo : "",
}

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {loading, error} = useSelector((state) => ({...state.auth}))
    const [formValue, setFormValue] = useState(initialState);
    const{email, password,firstName, lastName, confirmPassword, mobileNo} = formValue;
  
const submitHandle = (e) =>{
  e.preventDefault();
 if(password !== confirmPassword){
  return toast.error("password should match")
//   alert("password should match");
 }
 if( email && password && firstName && lastName && confirmPassword) {
  dispatch(register({formValue,navigate, toast }))
 }

}

const handleChange = (e)  =>{
  let {name, value} = e.target;
       setFormValue({...formValue, [name] : value})
}

  return (
    <div style={{ margin: "3%" }}>
  


      <div className='container loginFormStyle' style={{ width: "50%" }}>
      <div style={{ textAlign: "center", margin : "auto"}}>
        <FaUserCircle style={{fontSize:"50px", color:"black"}} 
       data-bs-toggle="tooltip" data-bs-placement="top"
       data-bs-custom-className="custom-tooltip"
       title="Login As User"
     />
     <p style={{textAlign:"center", color : "black"}} >Sign Up</p>
     </div>
        <form className="row g-3" onSubmit={submitHandle}>
          <div className="col-md-6">
            <label htmlFor="validationDefault01" className="form-label">First Name</label>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend2"><AiOutlineUser /></span>
              <input type="name" className="form-control" value={firstName} name="firstName" onChange={handleChange} aria-describedby="inputGroupPrepend2" required />
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationDefault01" className="form-label">Last Name</label>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend2"><AiOutlineUser /></span>
              <input type="name" className="form-control" name="lastName" aria-describedby="inputGroupPrepend2" onChange={handleChange}  value={lastName} required />
            </div>
          </div>
          <div className="col-md-12">
            <label htmlFor="validationDefaultUsername" className="form-label">Email</label>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend2"><AiOutlineMail /></span>
              <input type="email" className="form-control"  value={email} name="email" onChange={handleChange} aria-describedby="inputGroupPrepend2" required />
            </div>
          </div>
          <div className="col-md-12">
            <label htmlFor="validationDefaultUsername" className="form-label">Password</label>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend2"><AiFillLock /></span>
              <input type="password" className="form-control"  value={password} name="password" onChange={handleChange} aria-describedby="inputGroupPrepend2" required />
            </div>
          </div>
          <div className="col-md-12">
            <label htmlFor="validationDefaultUsername" className="form-label">Confirm Passowrd</label>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend2"><AiFillLock /></span>
              <input type="password" className="form-control"  value={confirmPassword} name="confirmPassword" onChange={handleChange} aria-describedby="inputGroupPrepend2" required />
            </div>
          </div>
   
          <div className="col-md-12">
            <label htmlFor="validationTooltip05" className="form-label">Contact No.</label>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend2"><BsFillTelephoneFill /></span>
              <input type="number" className="form-control"  value={mobileNo} name="mobileNo" onChange={handleChange} aria-describedby="inputGroupPrepend2" required />
            </div>
          </div>
   

          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
              <label className="form-check-label" htmlFor="invalidCheck2">
                Agree to terms and conditions
              </label>
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary" type="submit">Sign Up</button>
          </div>
        </form>
        <hr />
        <Link to="/login" >
          <div style={{ marginTop: "2%" }}>
            Already have an Account? Sign In
          </div>

        </Link>
        <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>

      </div>
    </div>

  )
}
