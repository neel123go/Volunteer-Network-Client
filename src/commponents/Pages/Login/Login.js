import React, { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        };
    }, [user]);

    if (loading) {
        return <Loading></Loading>
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (email === '' || password === '') {
            toast.error('Field must not be empty');
        } else {
            await signInWithEmailAndPassword(email, password);
        }
    };

    if (error) {
        const errorShow = error?.message;
        errorElement = <p className='text-danger text-center py-2'>{errorShow}</p>
    }

    return (
        <div>
            <h2 className='pt-2'>Please Login</h2>
            <div className='w-50 mx-auto text-start mt-5 border border-danger p-5 rounded-3'>
                <Form onSubmit={handleLogin}>
                    {errorElement}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control autoComplete='off' type="email" name="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control autoComplete='off' type="password" name="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Login</Button>
                    <h6 className='mt-3'>Don't have any account? <Link to='/signup'>Sign Up</Link></h6>
                </Form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;