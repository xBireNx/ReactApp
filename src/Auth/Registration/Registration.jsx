import React from 'react'
import './Registration.css'
import {Link, useHistory} from 'react-router-dom'
import {useFormik} from 'formik';
import {useDispatch} from 'react-redux'
import {signup} from '../../Action/AuthAction'


const ValidateForm = (value) => {
    let errors = {}
    if(value.password.length < 8){
        errors.password = 'Password must be greater than 8'
    }
    console.log(errors);
    return errors;
}

export default function Registration() {
    const history = useHistory()
   
    const dispatchMethod = useDispatch();

    const formik = useFormik({

        initialValues : {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        },
        validate: ValidateForm,
        onSubmit: (values) => {
            console.log("values",values);
            dispatchMethod(signup(values));
        }})
    return (
        <>
            <div className="form-box">
                <center>
                    <h1>Registration</h1>
                    <form onSubmit={formik.handleSubmit}>
                    <input type="text" onChange={formik.handleChange} name='firstname' placeholder='First Name' />
                    <br/><input type="text" onChange={formik.handleChange} name='lastname' placeholder='Last Name' />
                    <br/><input type="text" onChange={formik.handleChange} name='email' placeholder='Email' />
                    <br/><input type="password" onChange={formik.handleChange} name='password' placeholder='Password' />
                    <br/><button type='submit'>Submit</button>
                    </form>
                </center>
            </div>
        </>
    )
}
