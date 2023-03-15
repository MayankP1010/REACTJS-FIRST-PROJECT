
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Login.css';

export default function Login(props) {

  const validationSchema = Yup.object({
    Username: Yup.string()
            .required('Required'),
    
    Password: Yup.string()
            .required('Required')
            .min(6, 'Invalid')
            .max(10,'Invalid')
  });

  const formik = useFormik({
    initialValues: {
      Username: 'Mayank',
      Password: 'Maya@123',
      Loggingin: 'false'
    },
    onSubmit: values => {
      console.log(values);
    },
    validationSchema
    
  });

  const loginSubmit = () =>{
    // if(this.state.name == "Yogesh" && this.state.password == "admin"){
      props.history.push("/About")
    // }
    // else{
    //     alert(`Wrong Credentials`)
    // }
  };  

  
  return (
    <div align="center">
      <form id="contact" onSubmit={formik.handleSubmit}>
        <h3 align="center" className="loginhead"> Login  </h3>
        <br />
        <label>Username</label>
        <input
          type="text"
          name="Username"
        //   placeholder=" Username"
          onChange={formik.handleChange}
          values={formik.values.Username}
        />
        {formik.errors.name ? (
          <div style={{ color: 'red' }}>{formik.errors.name}</div>
        ) : null}
        <br />
        <br />

        <label>Password</label>
        <input
          type="Password"
          name="Password"
        //   placeholder="Password"
          onChange={formik.handleChange}
          values={formik.values.Password}
        />
        {formik.errors.Password ? (
          <div style={{ color: 'red' }}>{formik.errors.Password}</div>
        ) : null}
        <br />
        <br />

        <button id="contact-submit" type="submit" onClick={loginSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

