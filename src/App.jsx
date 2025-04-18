import React from 'react'
import './App.css'
import { useFormik } from 'formik'
import *as yup from 'yup'

const App = () => {

  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      conformPassword: ""
    },
    onSubmit: (data) => {
      console.log(data);
    },
    validationSchema: yup.object({
      name: yup.string().required("Name is required !").min(2, 'Name must be at least 2 characters').max(50, 'Name cannot exceed 50 characters').matches(/^[aA-zZ\s]+$/, 'Only alphabets and spaces are allowed'),
      email: yup.string().email("Invalid email address !").required("Email is required"),
      phoneNumber: yup.string().required("Phone number is required !").matches(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
      password: yup.string().required("Password is required !").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/, 'Password must include upper, lower, number & symbol (8+ chars)'),
      conformPassword:yup.string().required("Please confirm your password").oneOf([yup.ref('password'), null], 'Passwords must match')
    })
  })


  
  return (
    <>
      <div className="outer_container">
        <div className="sub_container">
          <div className="container">
            <form id="registration_form" onSubmit={handleSubmit}>
              <div className="title">
                <h1>Registration Form</h1>
              </div>
              <div className="sub_title">
                <p>Let Create Your Account !</p>
              </div>
              {/* Input first name  */}
              <div className="input_container">
                <input type="text" id="first_name" placeholder="First Name" className="input_style" name='name' onChange={handleChange} value={values.name} />
                {
                  touched.name && <p id="error_massage_form_first_name" className="style_error">{errors.name}</p>
                }
              </div>
              {/* Input Email */}
              <div className="input_container">
                <input type="email" id="email" placeholder="Enter Email" className="input_style" name='email' onChange={handleChange} value={values.email} />
                {touched.email && <p id="error_massage_form_email" className="style_error">{errors.email} </p>}

              </div>
              {/* Input mobile number */}
              <div className="input_container">
                <input type="number" id="mobile_number" placeholder="Enter Mobile Number" className="input_style" maxLength={10} name='phoneNumber' onChange={handleChange} value={values.phoneNumber} />
                {
                  touched.phoneNumber && <p id="error_massage_form_mobile_number" className="style_error" >{errors.phoneNumber} </p>
                }

              </div>
              {/* input password */}
              <div className="input_container">
                <input type="password" id="password" placeholder="Enter Password" className="input_style" autoComplete='on' name='password' onChange={handleChange} value={values.password} />
                {touched.password && <p id="error_massage_form_password" className="style_error">{errors.password} </p>}

              </div>
              {/* input conform password */}
              <div className="input_container">
                <input type="password" id="conform_password" placeholder="Enter Conform Password" autoComplete='on' className="input_style" name='conformPassword' onChange={handleChange} value={values.conformPassword} />
                {touched.conformPassword && <p id="error_massage_form_conform_password" className="style_error"> {errors.conformPassword}</p>}

              </div>
              <div className="submit_botton_main">
                <button type="submit" className="btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
