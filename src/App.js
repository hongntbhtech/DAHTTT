import { Route, Routes } from 'react-router-dom';
import './App.css';
import './index.js';
import Home from './Pages/Home/index.js';
import SignIn from './Pages/SignIn/index.js';
import SignUp from './Pages/SignUp/index.js';
import HomeClient from './Pages/HomeClient/index.js';
import CourseFee from './Pages/CourseFee/index.js'
import CourseFree from './Pages/CourseFree/index.js';
import Blog from './Pages/Blog/index.js';
import Course from './Pages/Course/index.js';
import CourseSale from './Pages/CourseSale/index.js';
import BlogDetail from './Pages/BlogDetails/index.js';
import CourseFreeDetails from './Pages/CourseFreeDetails/index.js';
import CourseFeeDetails from './Pages/CourseFeeDetails/index.js';
import Checkout from './Pages/Checkout/index.js';
import Profile from './Pages/Profile/index.js';
import MyCourse from './Pages/MyCourse/index.js';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/homeclient' element={<HomeClient/>}/>
        <Route path='/coursefee' element={<CourseFee/>}/>
        <Route path='/coursefree' element={<CourseFree/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/course' element={<Course/>}/>
        <Route path='/coursesale' element={<CourseSale/>}/>
        <Route path='blogdetail' element={<BlogDetail/>}/>
        <Route path='coursefreedetails' element={<CourseFreeDetails/>}/>
        <Route path='coursefeedetails' element={<CourseFeeDetails/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='mycourse' element={<MyCourse/>}/>
      </Routes> 
    </>
  );
}

export default App;
