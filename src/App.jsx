import Intro from "./Intro";
import {About} from "./About";
import {Interests} from './Interests';
import {Footer} from './Footer';

function App() {
  return (
    <div className='container'>
      <Intro></Intro>
      <About></About>
      <Interests></Interests>
      <Footer></Footer>
    </div>
  );
}

export default App
