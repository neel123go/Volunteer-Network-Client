import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import Events from '../Events/Events';

const Home = () => {
    return (
        <div>
            <h2 className='fw-bolder pt-3' style={{ fontFamily: "'Open Sans', sans-serif" }}>I GROW HELPING PEOPLE IN NEED</h2>
            <div className='w-25 mx-auto my-5'>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search..."
                        className="me-1"
                        aria-label="Search"
                    />
                    <Button variant="dark">Search</Button>
                </Form>
            </div>
            <Events></Events>
        </div>
    );
};

export default Home;