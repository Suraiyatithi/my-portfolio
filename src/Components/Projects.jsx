import Button from 'react-bootstrap/Button';
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

const Projects = () => {
    return (
        <div className="m-5 ">
            <div className='row row-cols-sm-1 row-cols-lg-3'>
          <div className="col mb-4">
          <Card className='bg-dark text-white ' style={{ width: '24rem' }}>
    

<Marquee speed={200}>
         
<Card.Img className='w-25' variant="top" src={imgc1}/>
<Card.Img className='w-25' variant="top" src={img2}/>
<Card.Img className='w-25' variant="top" src={img3}/>
<Card.Img className='w-25' variant="top" src={img4}/>
<Card.Img className='w-25' variant="top" src={img5}/>
         
            </Marquee>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>

        <div className="col mb-4">
        <Card className='bg-dark text-white' style={{ width: '24rem' }}>
        <Marquee speed={200}>
         
         <Card.Img className='w-25' variant="top" src={imgc2}/>
         <Card.Img className='w-25' variant="top" src={img6}/>
         <Card.Img className='w-25' variant="top" src={img7}/>
         <Card.Img className='w-25' variant="top" src={img8}/>
         <Card.Img className='w-25' variant="top" src={img9}/>
         <Card.Img className='w-25' variant="top" src={img10}/>
         <Card.Img className='w-25' variant="top" src={img11}/>
                  
                     </Marquee>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>
        <div className="col mb-4">
        <Card className='bg-dark text-white' style={{ width: '24rem' }}>
        <Marquee speed={200}>
         
         <Card.Img className='w-25' variant="top" src={imgc3}/>
         <Card.Img className='w-25' variant="top" src={img13}/>
         <Card.Img className='w-25' variant="top" src={img14}/>
         <Card.Img className='w-25' variant="top" src={img15}/>
         <Card.Img className='w-25' variant="top" src={img16}/>
         <Card.Img className='w-25' variant="top" src={img12}/>
                  
                     </Marquee>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>
            </div>  
        </div>
    );
};

export default Projects;