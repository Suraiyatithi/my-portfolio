import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import {  Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import Marquee from "react-fast-marquee";
import imgc1 from '../assets/Screenshot (34).png';
import img2 from '../assets/Screenshot (35).png';
import img3 from '../assets/Screenshot (36).png';
import img4 from '../assets/Screenshot (37).png';
import img5 from '../assets/Screenshot (38).png';
import img6 from '../assets/Screenshot (39).png'
import imgc2 from '../assets/Screenshot (40).png';
import img7 from '../assets/Screenshot (41).png';
import img8 from '../assets/Screenshot (43).png';
import img9 from '../assets/Screenshot (44).png';
import img10 from '../assets/Screenshot (45).png';
import img11 from '../assets/Screenshot (46).png';
import img12 from '../assets/Screenshot (47).png';
import img13 from '../assets/Screenshot (48).png';
import img14 from '../assets/Screenshot (49).png';
import img15 from '../assets/Screenshot (52).png';
import img16 from '../assets/Screenshot (54).png';
import imgc3 from '../assets/Screenshot (51).png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Projects = () => {

  const [showModal2, setShowModal2] = useState(false);

  const [showModal1, setShowModal1] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  const handleShowModal1 = () => {
    setShowModal1(true);
  };

  const handleCloseModal1 = () => {
    setShowModal1(false);
  };

  const handleShowModal3 = () => {
    setShowModal3(true);
  };

  const handleCloseModal3 = () => {
    setShowModal3(false);
  };
  const handleShowModal2 = () => {
    setShowModal2(true);
  };

  const handleCloseModal2 = () => {
    setShowModal2(false);
  };

  const GradientBorder = styled.div`
  border: 2px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to right, #ff0000, #66179a, #0000ff);

`;
    return (
        <div className="m-5 ">
          <h3 className='text-center mb-5'>My Projects </h3>
            <div className='row row-cols-sm-1 row-cols-lg-3'>
      <div className="col mb-4">
     
          <Card className='bg-dark text-white ' style={{ width: '24rem' }}>
          <GradientBorder> 

<Marquee speed={300}>
         
<Card.Img className='w-25' variant="top" src={imgc1}/>
<Card.Img className='w-25' variant="top" src={img2}/>
<Card.Img className='w-25' variant="top" src={img3}/>
<Card.Img className='w-25' variant="top" src={img4}/>
<Card.Img className='w-25' variant="top" src={img5}/>
         
            </Marquee>
      <Card.Body>
        <Card.Title>Toy World</Card.Title>
        <Card.Text className='p-4'>
    <ul>
      <li>React Libraries</li>
      <li> Firebase Authentication</li>
 <li>MongoDB for storing data</li>
 <li>Bootstrap Framwork</li>
 <li>Node Js & Express js in Serversite</li>
    </ul>
        </Card.Text>
 <Link to=''>       <Button style={{background:"#66179a"}} className='mt-3 text-white'  onClick={handleShowModal1} variant="">Show details</Button></Link>
      </Card.Body>
      </GradientBorder>
    </Card>
  
        </div>

        <div className="col mb-4">
      
        <Card className='bg-dark text-white' style={{ width: '24rem' }}>
        <GradientBorder>
        <Marquee speed={300}>
         
         <Card.Img className='w-25' variant="top" src={imgc2}/>
         <Card.Img className='w-25' variant="top" src={img6}/>
         <Card.Img className='w-25' variant="top" src={img7}/>
         <Card.Img className='w-25' variant="top" src={img8}/>
         <Card.Img className='w-25' variant="top" src={img9}/>
         <Card.Img className='w-25' variant="top" src={img10}/>
         <Card.Img className='w-25' variant="top" src={img11}/>
                  
                     </Marquee>
      <Card.Body>
        <Card.Title>MakeUp Schooling</Card.Title>
        <Card.Text className='p-4'>
      <ul>
        <li>React Libraries</li>
        <li>Tailwind and Deisy Ui framework</li>
        <li>Implement Dashboard </li>
        <li>Node js and Express js in server</li>
        <li>Firebase Authentication</li>
        <li>Used Jwt for server site authentication</li>

      </ul>
        </Card.Text>
        <Button style={{background:"#66179a"}} className='text-white' onClick={handleShowModal2} variant="">Show Details</Button>
      </Card.Body>
      </GradientBorder>
    </Card>
  
        </div>
    <div className="col mb-4">

        <Card className='bg-dark text-white' style={{ width: '24rem' }}>
        <GradientBorder> 
        <Marquee speed={300}>
         
         <Card.Img className='w-25' variant="top" src={imgc3}/>
         <Card.Img className='w-25' variant="top" src={img13}/>
         <Card.Img className='w-25' variant="top" src={img14}/>
         <Card.Img className='w-25' variant="top" src={img15}/>
         <Card.Img className='w-25' variant="top" src={img16}/>
         <Card.Img className='w-25' variant="top" src={img12}/>
                  
                     </Marquee>
      <Card.Body>
        <Card.Title>Baking Queen</Card.Title>
        <Card.Text className='p-3'>
        <ul>
          <li>Used React libraries</li>
          <li>MongoDB for store data</li>
          <li>Firebase Authentication</li>
          <li>Bootstrap Framework</li>
          <li>used express js in server</li>
        </ul>
        </Card.Text>
     {/* <Link to='https://baking-queen-69016.web.app/'> */}
       <Button style={{background:"#66179a"}} className='mt-4 text-white' onClick={handleShowModal3} variant="">Show details</Button>
      </Card.Body>
      </GradientBorder>
    </Card>
    
        </div>
            </div> 
            <div className="">
              
      <Modal show={showModal1} onHide={handleCloseModal1}>
        <Modal.Header closeButton>
          <Modal.Title style={{color:"#66179a"}} className=' mt-4'>Toy World</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Add your modal content here */}
          <img className='p-4' src={imgc1} alt="" />

         
          <p className='text-dark'>This website is Created using HTML,CSS,ReactJs,Bootstrap,Firebase authentication in Client Site .And Server site is empliment using ExpressJs,NodeJs .Used MongoDb for storing Data.</p>
<p><Link to='https://toy-world-a669f.web.app/'><button className='btn btn-warning'>LIVE PREVIEW</button></Link>||<Link to='https://github.com/Suraiyatithi/toys-world-client2'><button className='btn btn-warning'>GITHUB</button></Link></p>
     <Link></Link>
        </Modal.Body>
        <Modal.Footer>
          <Button className='text-white' style={{background:"#66179a"}} variant="" onClick={handleCloseModal1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal></div> 
      <div className="">
        
      <Modal show={showModal2} onHide={handleCloseModal2}>
        <Modal.Header closeButton>
          <Modal.Title style={{color:"#66179a"}} className=' mt-4'>MakeUp Schooling</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Add your modal content here */}
          <img className='p-4' src={imgc2} alt="" />

         
          <p className='text-dark'>This website is Created using HTML,CSS,ReactJs,Bootstrap,Firebase authentication in Client Site .And Server site is empliment using ExpressJs,NodeJs .Used MongoDb for storing Data.</p>
<p><Link to='https://summer-camp-a701e.web.app/'><button className='btn btn-warning'>LIVE PREVIEW</button></Link>||<Link to='https://github.com/Suraiyatithi/summer-cccamp'><button className='btn btn-warning'>GITHUB</button></Link></p>
     <Link></Link>
        </Modal.Body>
        <Modal.Footer>
          <Button className='text-white' style={{background:"#66179a"}} variant="" onClick={handleCloseModal2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
      <div className="">
        
      <Modal show={showModal3} onHide={handleCloseModal3}>
        <Modal.Header closeButton>
          <Modal.Title style={{color:"#66179a"}} className=' mt-4'>Baking Queen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Add your modal content here */}
          <img className='p-4' src={imgc3} alt="" />

         
          <p className='text-dark'>This website is Created using HTML,CSS,ReactJs,Bootstrap,Firebase authentication in Client Site .And Server site is empliment using ExpressJs,NodeJs .Used MongoDb for storing Data.</p>
<p><Link to='https://baking-queen-69016.web.app/'><button className='btn btn-warning'>LIVE PREVIEW</button></Link>||<Link to='https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-Suraiyatithi'><button className='btn btn-warning'>GITHUB</button></Link></p>
     <Link></Link>
        </Modal.Body>
        <Modal.Footer>
          <Button className='text-white' style={{background:"#66179a"}} variant="" onClick={handleCloseModal3}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
        </div>
    );
};

export default Projects;