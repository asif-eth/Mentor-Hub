
import './App.css'
import Body from './components/Body/Body'
import Community from './components/Community/Community'
import Explore from './components/Explore/Explore'
import Feedback from './components/Feedback/Feedback'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Mentor from './pages/Mentor/Mentor'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Form from './components/Form/Form'

function App() {

  return (
    <HashRouter>
    <Routes>
      <Route path='/' element={[<Home />, <Body /> , <Explore />, <Community />, <Feedback />, <Footer />]} />
      <Route path='/mentor' element={<Mentor />} />
      <Route path='/form' element={<Form />} />
    </Routes>
    </HashRouter>
  )
}

export default App
