import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { AiOutlineUser, AiOutlineMail, AiFillLock } from "react-icons/ai";
import { FaBookReader } from "react-icons/fa";
import { GrUser } from "react-icons/gr";
import { ToastContainer, toast } from 'react-toastify';
import { FaUserCircle, FaUserEdit } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import { login } from '../../Redux/Auth/authSlice'
const initialState = {
  email: "",
  passowrd: "",
}

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => ({ ...state.auth }))
  const [formValue, setFormValue] = useState(initialState);
  const { email, password } = formValue;


  useEffect(() => {
    error && toast.error(error);
    //  alert(error)
  }, [error])

  const submitHandle = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ formValue, navigate, toast }))
    }

  }

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value })
  }

  return (
    <div style={{ margin: "3%" }}>



<div className='container loginFormStyle' style={{ width: "50%" }}>

        <div style={{ textAlign: "center", margin: "auto" }}>
          <FaUserCircle style={{ fontSize: "50px", color: "black" }}
            data-bs-toggle="tooltip" data-bs-placement="top"
            data-bs-custom-className="custom-tooltip"
            title="Login As User"
          />
          <p style={{ textAlign: "center", color: "black" }} >Sign In</p>
        </div>
        <form className="row g-3" onSubmit={submitHandle}>
          <div className="col-md-12">
            <label htmlFor="validationDefaultUsername" className="form-label">Email</label>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend2"><AiOutlineMail /></span>
              <input type="email" className="form-control" value={email} name="email" onChange={handleChange} aria-describedby="inputGroupPrepend2" required />
            </div>
          </div>
          <div className="col-md-12">
            <label htmlFor="validationDefaultUsername" className="form-label">Password</label>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend2"><AiFillLock /></span>
              <input type="password" className="form-control" value={password} name="password" onChange={handleChange} aria-describedby="inputGroupPrepend2" required />
            </div>
          </div>

          <div className="col-12">
            <button className="btn btn-primary" type="submit">Login</button>
          </div>
        </form>
        <hr />
        <Link to="/register" >
          <div style={{ marginTop: "2%", textAlign: "center", textDecoration: "none" }}>
            Dont't have an Account? Sign Up
          </div>

        </Link>

      </div>
    </div>
  )
}
