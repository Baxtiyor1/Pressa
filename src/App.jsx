import { Route, Routes } from 'react-router-dom';

//components
import Home from './components/Home/Home';
import Single from './components/Singlepage/Single';
import About from './components/About/About';

//SASS
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/single/:postId' element={<Single />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
