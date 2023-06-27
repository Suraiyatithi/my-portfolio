import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar'
import Banner from './Components/Banner'
import Skill from './Components/Skill';
import Projects from './Components/Projects';

function App() {


  return (
    <>
    <div className="App">
      <NavBar></NavBar>
<Banner></Banner>
<Skill></Skill>
<Projects></Projects>
</div>
    </>
  )
}

export default App
