import ChartComponent from "./ChartComponent";
import ChartComponent2 from "./ChartComponents2";
import img1 from '../assets/css-icon.svg';
import img2 from '../assets/html-icon.svg';
import img3 from '../assets/bootstrap-4-icon.svg';
import img4 from '../assets/javascript-programming-language-icon.svg';
import img5 from '../assets/tailwind-css-icon.svg';
import img6 from '../assets/mongodb-svgrepo-com.svg';
import img7 from '../assets/react-js-icon.svg'
import bg6 from '../assets/23324.jpg'


const Skill = () => {
    return (
        <div className="background" style={{backgroundImage:`url(${bg6})`}}>
       <div className="bg">
       <p className="text-center">Technical & Professional Skills</p>
            <h3 className="text-center">My Skills</h3>
     <div className="row row-cols-sm-1 row-cols-lg-2 p-4">
        <div className=" col skill-left text-center ">
            <h4 className='text-center '>Technical Skills</h4>
          
            <div className="skill-bar">
                <div className="d-flex justify-content-between text-center p-3">
                <div className="d-flex">
                    <img style={{height:'20px',width:"20px"}} className="" src={img2} alt="" />
                 <p>Html</p>
                 </div>
                    <p>95%</p>
                </div>
                <div className="bar m-2 p-2">
                    <span className='html p-2'></span>
                </div>
            </div>
            <div className="skill-bar">
                <div className="d-flex justify-content-between text-center p-3">
                 <div className="d-flex">
                    <img style={{height:'20px',width:"20px"}} className="" src={img1} alt="" />
                 <p>CSS</p>
                 </div>
                    <p>90%</p>
                </div>
                <div className="bar m-2 p-2">
                    <span className='css p-2'></span>
                </div>
            </div>
            <div className="skill-bar">
                <div className="d-flex justify-content-between text-center p-3">
                <div className="d-flex">
                    <img style={{height:'20px',width:"20px"}} className="" src={img4} alt="" />
                 <p>JavaScript</p>
                 </div>
                    <p>79%</p>
                </div>
                <div className="bar m-2 p-2">
                    <span className='js p-2'></span>
                </div>
            </div>
            <div className="skill-bar">
                <div className="d-flex justify-content-between text-center p-3">
                <div className="d-flex">
                    <img style={{height:'20px',width:"20px"}} className="" src={img7} alt="" />
                 <p>React</p>
                 </div>
                    <p>80%</p>
                </div>
                <div className="bar m-2 p-2">
                    <span className='react p-2'></span>
                </div>
            </div>
            <div className="skill-bar">
                <div className="d-flex justify-content-between text-center p-3">
                <div className="d-flex">
                    <img style={{height:'20px',width:"20px"}} className="" src={img3} alt="" />
                 <p>Bootstrap</p>
                 </div>
                    <p>98%</p>
                </div>
                <div className="bar m-2 p-2">
                    <span className='bootstrap p-2'></span>
                </div>
            </div>
            <div className="skill-bar">
                <div className="d-flex justify-content-between text-center p-3">
                <div className="d-flex">
                    <img style={{height:'20px',width:"20px"}} className="" src={img5} alt="" />
                 <p>Tailwind</p>
                 </div>
                    <p>98%</p>
                </div>
                <div className="bar m-2 p-2">
                    <span className='tailwind p-2'></span>
                </div>
            </div>
            <div className="skill-bar">
                <div className="d-flex justify-content-between text-center p-3">
                <div className="d-flex">
                    <img style={{height:'20px',width:"20px"}} className="" src={img6} alt="" />
                 <p>MongoDB</p>
                 </div>
                    <p>72%</p>
                </div>
                <div className="bar m-2 p-2">
                    <span className='figma p-2'></span>
                </div>
            </div>
        </div>

        <div className="col">
            <h4 className="text-center">Professional Skills</h4>
          <div className="row row-cols-sm-2 row-cols-lg-2 mt-5">
          <div className="col">
              <ChartComponent></ChartComponent>
              <p className="text-center">80%</p>
              <h6 className="text-center">LEADERSHIP SKILL</h6>
            </div>
            <div className="col">
                <ChartComponent2></ChartComponent2>
                <p className="text-center">75%</p>
                <h6 className="text-center">TEAMWORK SKILL</h6>
            </div>
          </div>
        </div>
     </div>
       </div>
        </div>
    );
};

export default Skill;