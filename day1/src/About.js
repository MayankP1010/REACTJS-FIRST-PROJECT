import React from 'react'
 import './Home.css'
 import { Carousel} from 'react-bootstrap';
 import Nav from './Nav';

import 'bootstrap/dist/css/bootstrap.min.css';
 
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
//  import {NavBar, Nav, NavItem} from 'react-bootstrap';

 



const About = (props) =>{

 
    console.log(props)

    return (
        
  

        <div>
            <Nav/>
            <h1 className="abouthead">Welome to Prasthanam</h1>
            
      <br/>
      <Carousel>
        <Carousel.Item>
          <img
            className="size"
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/green-restaurant-discount-offer-facebook-shop-design-template-270fd323d116c0f750b302484d1c4eaf_screen.jpg?ts=1591100702"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="size"
            src="https://image.freepik.com/free-psd/food-facebook-cover-design-template-with-food-sale_328306-1.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="size"
            src="https://image.shutterstock.com/image-vector/advertising-promo-sale-posters-banners-260nw-1700837656.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
            {/* <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">LAKSHYA</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Products</Nav.Link>
       <Nav.Link href="#pricing">About</Nav.Link>
     </Nav>
    
   </Navbar> */}
 

            
 <br/>
 <br/>
            
            <h3>Address-"Chattrapati Square,North Ambazari Road,Nagpur-440022" </h3>
            <h3>Contact-0712 265048</h3>
            <br/>
            
        </div>
    )
}

export default About