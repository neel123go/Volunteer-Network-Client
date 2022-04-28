import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';

const Donation = () => {
    const [user] = useAuthState(auth);
    const [donate, setDonate] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (donate) {
            navigate('/donatemsg');
        }
    }, [donate]);

    const handleDonate = async (e) => {
        e.preventDefault();
        const donateAmount = e.target.amount.value;
        const phoneNumber = e.target.phone.value;
        if (donateAmount === '' || phoneNumber === '') {
            toast.error('Field must not be empty');
        } else {
            setDonate(true);
        }
    }

    return (
        <div>
            <div className='w-50 p-5 mx-auto'>
                <h2 style={{ color: '#011734' }}>It's not how much we give,</h2>
                <h3 style={{ color: '#011734' }}>But how much love we put into giving</h3>
                <p className='text-end pt-2 pe-5'>- Mother Teresa</p>
            </div>
            <div>
                <h2 className='text-center'>Donate Us</h2>
                <div className='w-50 mx-auto text-start my-5 border border-danger p-5 rounded-3'>
                    <Form onSubmit={handleDonate}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control value={user?.displayName} readOnly disabled />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control value={user?.email} readOnly disabled />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Donate Amount</Form.Label>
                            <Form.Control autoComplete='off' name="amount" type="number" placeholder="Enter donate amount (TK)" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control autoComplete='off' name="phone" type="number" placeholder="Enter phone number" />
                        </Form.Group>
                        <Button variant="primary" type="submit">Donate</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Donation;