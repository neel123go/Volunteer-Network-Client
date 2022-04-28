import React from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';

const AddEvent = () => {
    const handleAddEvent = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const image = e.target.image.value;

        fetch('http://localhost:5000/events', {
            method: 'POST',
            body: JSON.stringify({
                title, description, image
            }),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then(result => {
                console.log(result);
                toast.success('Event added successfully');
                e.target.reset();
            });
    }
    return (
        <div>
            <h2>Add Event</h2>
            <div className='w-50 mx-auto text-start mt-5 border border-danger p-5 rounded-3'>
                <Form onSubmit={handleAddEvent}>
                    <Form.Group className="mb-3">
                        <Form.Label>Event Title</Form.Label>
                        <Form.Control autoComplete='off' name="title" type="text" placeholder="Event title" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="description"
                            placeholder="Description"
                            style={{ height: '100px' }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Event Image URL</Form.Label>
                        <Form.Control autoComplete='off' name="image" type="text" placeholder="Event image url" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Add Event</Button>
                </Form>
            </div>
        </div>
    );
};

export default AddEvent;