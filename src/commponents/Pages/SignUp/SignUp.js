import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import FacebookImg from '../../../Images/social/facebook.png'
import GoogleImg from '../../../Images/social/google.png';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import Loading from '../Shared/Loading/Loading';
import toast, { Toaster } from 'react-hot-toast';

const SignUp = () => {
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();

    if (loading || updating) {
        return <Loading></Loading>
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (name === '' || email === '' || password === '') {
            toast.error('Field must not be empty');
        } else {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name });
        }

    };

    if (user) {
        navigate('/');
    }

    return (
        <div>
            <h2 className='pt-2'>Create an account</h2>
            <div className='w-50 mx-auto text-start mt-5 border border-danger p-5 rounded-3'>
                <Form onSubmit={handleSignUp}>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control autoComplete='off' name="name" type="name" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control autoComplete='off' name="email" type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control autoComplete='off' name="password" type="password" placeholder="Password" />
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