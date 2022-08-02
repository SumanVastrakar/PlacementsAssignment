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
import { FaUserCircle, FaUserEdit, FaProductHunt} from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import { register } from '../../Redux/Auth/authSlice'
import { FcPaid, FcMoneyTransfer, FcReading } from "react-icons/fc";


const initialState = {
 productName : "",
 productPrice : "",
 poductDescription : "",
}

export default function Product() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {loading, error} = useSelector((state) => ({...state.auth}))
    const [formValue, setFormValue] = useState(initialState);
    const{productName, productPrice, productDescription} = formValue;
  
const submitHandle = (e) =>{
  e.preventDefault();

 if( productName && productPrice && productDescription) {
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
        <FaProductHunt style={{fontSize:"50px", color:"black"}} 
       data-bs-toggle="tooltip" data-bs-placement="top"
       data-bs-custom-className="custom-tooltip"
       title="Login As User"
     />
     <p style={{textAlign:"center", color : "black"}} >Add Product</p>
     </div>
        <form className="row g-3" onSubmit={submitHandle}>
        
       
          <div className="col-md-12">
            <label htmlFor="validationDefaultUsername" className="form-label">Product Name</label>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend2"><FcPaid /></span>
              <input type="email" className="form-control"  value={productName} name="email" onChange={handleChange} aria-describedby="inputGroupPrepend2" required />
            </div>
          </div>
          <div className="col-md-12">
            <label htmlFor="validationDefaultUsername" className="form-label">Product Price</label>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend2"><FcMoneyTransfer /></span>
              <input type="password" className="form-control"  value={productPrice} name="password" onChange={handleChange} aria-describedby="inputGroupPrepend2" required />
            </div>
          </div>
          <div className="col-md-12">
            <label htmlFor="validationDefaultUsername" className="form-label">Product Description</label>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend2"><FcReading /></span>
              <input type="password" className="form-control"  value={productDescription} name="confirmPassword" onChange={handleChange} aria-describedby="inputGroupPrepend2" required />
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
            <button className="btn btn-primary" type="submit">Add Product</button>
          </div>
        </form>
        <hr />
        
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
