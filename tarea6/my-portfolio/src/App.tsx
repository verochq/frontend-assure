import './App.css'
import Header from './components/Header'
import AboutMe from './components/AboutMe'  
import Projects, {type  ProjectData } from './components/Projects'
import Footer from './components/Footer'
import Hobbies from './components/Hobbies'


const projectsCollection = [
  {
    id:1,
    title: "HTML & CSS",
    description: "Different exercises to practice CSS and HTML",
    link: "https://github.com/verochq/frontend-assure.git"
  },
  {
    id:2,
    title: "CSS Methodologies & SCSS",
    description: "Refactoring an spaghetti CSS into modular, maintainable code with OOCSS",
    link: "https://github.com/verochq/frontend-assure.git"
  },
  {
    id:3,
    title: "Live Character Counter",
    description: "A live character and word counter",
    link: "https://github.com/verochq/frontend-assure.git"
  }

];

const projectsCollectionEmpty: Array<ProjectData> = [];

function App() {

  return (
    <>
      <div className='container'>
        <Header isStudent={true} />
          <ul className='infoList'>
              <li className='li-about-me'> About me </li>
              <AboutMe/>
              <li className='li-hobbies'> Hobbies  </li>
              <Hobbies/>
              <li> Projects </li>
              <Projects projectsCollection={projectsCollection}/>
          </ul>
      </div>
      <Footer/>
      
    </>
  )
}

export default App;
