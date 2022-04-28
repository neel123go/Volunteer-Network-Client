import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../../Firebase.init';
import Logo from '../../../../Images/Logo/Group 1329.png';

const Header = () => {
    const [user] = useAuthState(auth);

    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
            <Container>
                <Nav.Link as={Link} to="/"><img
                    src={Logo}
                    width="150"
                    height="45"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                /></Nav.Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className='me-2' as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className='me-2' as={Link} to="/donation">Donation</Nav.Link>
                        <Nav.Link className='me-2' as={Link} to="/events">Events</Nav.Link>
                        {user && <Nav.Link className='me-2' as={Link} to="/addevent">Add Event</Nav.Link>}
                        <Nav.Link as={Link} to="/donors">All Donors</Nav.Link>
                        {
                            user ?
                                <div>
                                    <button onClick={() => signOut(auth)} className='btn btn-primary me-2 ms-4'>Logout</button>
                                    <Link to='/admin'><button className='btn btn-primary'>Admin</button></Link>
                                </div>
                                : <Link className='me-2 ms-4' to='/login'><button className='btn btn-primary'>Login</button></Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;