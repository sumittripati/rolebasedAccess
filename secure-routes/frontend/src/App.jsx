import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Service from './pages/services/Service';
import Blog from './pages/blogs/Blog';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Footer from './components/Footer/Footer';
import Pagenotfound from './pages/notfound/Pagenotfound';

// import Forgetpassword from './pages/forgetpassword/Forgetpassword';
// import Resetpassword from './pages/resetpassword/Resetpassword';


const App = () => {
  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/register' element={ <Register /> } />
        <Route path='*' element={ <Pagenotfound /> } />
        {/* <Route path='/forgetpassword' element={ <Forgetpassword /> } />
        <Route path='/resetpassword/:id/:token' element={ <Resetpassword /> } /> */}

        {/* protected routes */}
        <Route path='/service' element={ <Service /> } />
        <Route path='/blog' element={ <Blog /> } />
      </Routes>
    <Footer />
    </>
  )
}

export default App
