import React from 'react'
import { Nav , Navbar , Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navii.css';

export default function Navii() {
  return (
    <>
      <Navbar className='nav-style' expand="lg">
        <div className="dropdown">
          <i class="fas fa-user dropbtn"></i>
          <div className="dropdown-content">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
        </div>
        <Navbar.Brand style={{fontWeight:'bold' , fontSize: '25px'}} href="#home">BireN</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
            <Link className='nav-item' to='/Home'>
              Home
            </Link>
            </Nav.Link>
            {/* <Nav.Link>
            <Link className='nav-item' to='/Category'>
              Category
            </Link>
            </Nav.Link> */}
            <Nav.Link>
              <Link className='nav-item' to='/Login'>
                Login
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='nav-item' to='/Registration'>
                Registration
              </Link>
            </Nav.Link>
            {/* <Nav.Link>
              <Link className='nav-item' to='/Checkout'>
                Check Out
              </Link>
            </Nav.Link> */}
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

