import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar'
import Banner from './Components/Banner'
import Skill from './Components/Skill';
import Projects from './Components/Projects';
import AboutMe from './Components/AboutMe';
import { ContactUs } from './Contact';

function App() {


  return (
    <>
    <div className="App">
      <NavBar></NavBar>
<Banner></Banner>
<AboutMe/>
<Skill></Skill>
<Projects></Projects>
<ContactUs></ContactUs>
</div>
    </>
  )
}

export default App
