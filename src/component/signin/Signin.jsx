import React, { useRef } from 'react'
import { useForm } from "react-hook-form"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Signin() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onFormSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="container py-5">
            <Form className='w-50 mx-auto bg-white p-5 mt-5 ' onSubmit={handleSubmit(onFormSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" placeholder="Enter email"{...register('email', {
                        required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
                    })} />
                    {errors?.email?.type == "required" && <p className='alert my-2 alert-danger'>Email is Required</p>}
                    {errors?.email?.type == "pattern" && <p className='alert my-2 alert-danger'>Email is not valid</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" {...register('password', {
                        required: true, pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
                    })} />
                    {errors?.password?.type == "required" && <p className='alert my-2 alert-danger'>Password is Required</p>}
                    {errors?.password?.type == "pattern" && <p className='alert my-2 alert-danger'>Password is not valid</p>}
                </Form.Group>
       
                <Button variant="warning" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}



export default Signin;