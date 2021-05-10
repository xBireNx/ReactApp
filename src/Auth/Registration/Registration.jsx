// import React from 'react'
// import './Registration.css'
// import {useFormik} from 'formik';


// const ValidateForm = (value) => {
//     let errors = {}
//     if(value.password.length < 8){
//         errors.password = 'Password must be greater than 8'
//     }
//     console.log(errors);
//     return errors;
// }

// export default function Registration() {
//     const dispatchMethod = useDispatch();

//     const formik = useFormik({
//         initialValues : {
//             firstname: '',
//             lastname: '',
//             email: '',
//             password: '',
//             cpassword: ''
//         },
//         validate: ValidateForm,
//         onSubmit: (values) => {
//             console.log("values",values);
//             dispatchMethod(Registration(values));
//         }})
//     return (
//         <>
//             <div className="form-box">
//                 <center>
//                     <h1>Registration</h1>
//                     <form onSubmit={formik.handleSubmit}>
//                     <input type="text" onChange={formik.handleChange} name='firstname' placeholder='First Name' />
//                     <br/><input type="text" onChange={formik.handleChange} name='lastname' placeholder='Last Name' />
//                     <br/><input type="text" onChange={formik.handleChange} name='email' placeholder='Email' />
//                     <br/><input type="password" onChange={formik.handleChange} name='password' placeholder='Password' />
//                     <br/><input type="password" onChange={formik.handleChange} name='cpassword' placeholder='Confirm Password' />
//                     <br/><button type='submit'>Submit</button>
//                     </form>
//                 </center>
//             </div>
//         </>
//     )
// }
