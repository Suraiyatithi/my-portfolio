import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/circlepic.png";
// import { ArrowRightCircle } from 'react-bootstrap-icons';
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Web Developer", "Web Designer", "MERN Developer" ];
    const period = 2000;
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text])
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }
    return (
        <div>
               <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            {/* <TrackVisibility>
              {({ isVisible }) => */}
              {/* <div className={isVisible ? "animate__animated animate__fadeIn" : ""}> */}
              <div>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Suraiya`} <span style={{color:"#66179a"}} className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "MERN Developer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect </button>
                  </div>
              {/* </div>}
            </TrackVisibility> */}
          </Col>
          <Col xs={12} md={6} xl={5}>
            {/* <TrackVisibility> */}
              {/* {({ isVisible }) => */}
                {/* <div className={isVisible ? "animate__animated animate__zoomIn" : ""}> */}
                <div>
                  <img src={headerImg} alt="Header Img"/>
                  </div>
                {/* </div>} */}
            {/* </TrackVisibility> */}
          </Col>
        </Row>
      </Container>
    </section>
        </div>
    );
};

export default Banner;