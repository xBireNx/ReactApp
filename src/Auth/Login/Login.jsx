import React from 'react'
import {Form , Button} from 'react-bootstrap'
import {useFormik} from 'formik';
// import axios from "axios";
import {useDispatch} from 'react-redux';
import {signin} from '../../Action/AuthAction'
import { useHistory} from 'react-router-dom'

export default function Login() {

    const history = useHistory()
    const dispatchMethod = useDispatch();

    const formik = useFormik({
        initialValues : {
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            console.log("values",values);
            dispatchMethod(signin(values));
        }})
    return (
        <div>
            <Form onSubmit={formik.handleSubmit}>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" onChange={formik.handleChange} name='email' placeholder="Enter email" />
                <br/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" onChange={formik.handleChange} name='password' placeholder="Password" />
            </Form.Group>
            <Button type="submit"  variant="primary" disabled = {!(formik.isValid && formik.dirty)}>
                Submit
            </Button>
            </Form>
        </div>
    )
}
