import React from 'react'
import './Home.css'
// import{Carousel} from "react-bootstrap"



 const Home= (props) => {

     const registerNow = () =>{
         props.history.push("/Registration")
     };

     const loginNow = () =>{
        props.history.push("/Login")
    };

    return (
        <div>
            <h1>Welcome to Lakshya</h1>
            <br/>
            <br/>
            {/* <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> */}
            <button className="btn1" onClick={registerNow}>Sign-up</button><br/>
            <button className="btn2" onClick={loginNow}> Sign-in</button>
        </div>
    )
}
export default Home