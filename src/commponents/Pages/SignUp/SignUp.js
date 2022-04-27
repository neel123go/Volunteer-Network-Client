import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FacebookImg from '../../../Images/social/facebook.png'
import GoogleImg from '../../../Images/social/google.png';

const SignUp = () => {
    return (
        <div>
            <h2 className='pt-2'>Create an account</h2>
            <div className='w-50 mx-auto text-start mt-5 border border-danger p-5 rounded-3'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control autoComplete='off' type="name" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control autoComplete='off' type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control autoComplete='off' type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Create an account</Button>
                    <h6 className='mt-3'>Already have an account? <Link to='/login'>Login</Link></h6>
                </Form>
                <div className='mt-4 d-flex justify-content-center align-items-center'>
                    <button className='btn me-3' style={{ backgroundColor: 'lightgray' }}><img style={{ width: '25px' }} src={GoogleImg} alt="" /> Continue With Google</button>
                    <button className='btn' style={{ backgroundColor: 'lightgray' }}><img style={{ width: '25px' }} src={FacebookImg} alt="" /> Continue With Facebook</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;