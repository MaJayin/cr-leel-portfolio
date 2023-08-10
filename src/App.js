import { NavBar } from './componants/NavBar';
import {Banner} from './componants/Banner'
import { Skills } from './componants/Skills';
import { Project } from './componants/Projects';
import { Contacts } from './componants/Contacts';
import { Footer } from './componants/Footer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Project />
      <Contacts />
      <Footer />
     
     

     
    </div>
  );
}

export default App;
