// import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import './index.js';
// import Home from './Pages/Home/index.js';
// import SignIn from './Pages/SignIn/index.js';
// import SignUp from './Pages/SignUp/index.js';
// import HomeClient from './Pages/HomeClient/index.js';
// import CourseFee from './Pages/CourseFee/index.js'
// import CourseFree from './Pages/CourseFree/index.js';
// import Blog from './Pages/Blog/index.js';
// import Course from './Pages/Course/index.js';
// import CourseSale from './Pages/CourseSale/index.js';
// import BlogDetail from './Pages/BlogDetails/index.js';
// import CourseFreeDetails from './Pages/CourseFreeDetails/index.js';
// import CourseFeeDetails from './Pages/CourseFeeDetails/index.js';
// import Checkout from './Pages/Checkout/index.js';
// import Profile from './Pages/Profile/index.js';
// import MyCourse from './Pages/MyCourse/index.js';
// import Dashboard from './PageAdmin/Dashboard/index.js';
// import addCourse from './PageAdmin/Courses/addCourse';
// import listCourse from './PageAdmin/Courses/addCourse';

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/signin' element={<SignIn/>}/>
//         <Route path='/signup' element={<SignUp/>}/>
//         <Route path='/homeclient' element={<HomeClient/>}/>
//         <Route path="/coursefee/:id" element={<CourseFee/>}/>
//         <Route path='/coursefree' element={<CourseFree/>}/>
//         <Route path='/blog' element={<Blog/>}/>
//         <Route path='/course' element={<Course/>}/>
//         <Route path='/coursesale' element={<CourseSale/>}/>
//         <Route path='blogdetail' element={<BlogDetail/>}/>
//         <Route path='coursefreedetails' element={<CourseFreeDetails/>}/>
//         <Route path='coursefeedetails' element={<CourseFeeDetails/>}/>
//         <Route path='checkout' element={<Checkout/>}/>
//         <Route path='profile' element={<Profile/>}/>
//         <Route path='mycourse' element={<MyCourse/>}/>


//         <Route path='/dashboardadmin' element={<Dashboard/>}/>
//         <Route path='/admin/addcourse' element={<addCourse/>}/>
//         <Route path='/admin/listcourse' element={<listCourse/>}/>
//       </Routes> 
//     </>
//   );
// }

// export default App;


import { Route, Routes } from 'react-router-dom';
import './App.css';
import './index.js';
import Home from './Pages/Home/index.js';
import SignIn from './Pages/SignIn/index.js';
import SignUp from './Pages/SignUp/index.js';
import HomeClient from './Pages/HomeClient/index.js';
import CourseFee from './Pages/CourseFee/index.js';
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


import Dashboard from './PageAdmin/Dashboard/DashboardAdmin.js';

import AddCourse from './PageAdmin/Courses/addCourse.js';
import ListCourse from './PageAdmin/Courses/listCourse.js';
import EditCourse from './PageAdmin/Courses/editCourse.js';
import AddLanguage from "./PageAdmin/Languages/addLanguage.js";
import ListLanguage from "./PageAdmin/Languages/listLanguage.js";
import EditLanguage from "./PageAdmin/Languages/editLanguage.js";
import AddBlog from "./PageAdmin/Blogs/addBlogs.js";
import EditBlog from "./PageAdmin/Blogs/editBlogs.js";
import ListBlog from "./PageAdmin/Blogs/listBlogs.js";
import AddCoupon from "./PageAdmin/Coupons/addCoupon.js";
import ListCoupon from "./PageAdmin/Coupons/listCoupon.js";
import EditCoupon from "./PageAdmin/Coupons/editCoupon.js";
import AddField from "./PageAdmin/Fields/addFields.js";
import ListField from "./PageAdmin/Fields/listFields.js";
import EditField from "./PageAdmin/Fields/editFields.js";
import AddMentor from "./PageAdmin/Mentors/addMentor.js";
import ListMentor from "./PageAdmin/Mentors/listMentor.js";
import EditMentor from "./PageAdmin/Mentors/editMentor.js";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/homeclient' element={<HomeClient />} />
        <Route path="/coursefee/:id" element={<CourseFee />} />
        <Route path='/coursefree' element={<CourseFree />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/course' element={<Course />} />
        <Route path='/coursesale' element={<CourseSale />} />
        <Route path='blogdetail' element={<BlogDetail />} />
        <Route path='coursefreedetails' element={<CourseFreeDetails />} />
        <Route path='coursefeedetails' element={<CourseFeeDetails />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='profile' element={<Profile />} />
        <Route path='mycourse' element={<MyCourse />} />
        <Route path='dashboardadmin' element={<Dashboard/>} />



        <Route path='/admin/addcourse' element={<AddCourse />} /> 
        <Route path='/admin/listcourse' element={<ListCourse />} />
        <Route path='/admin/editcourse/:id' element={<EditCourse />} />
        <Route path='/admin/addlanguage' element={<AddLanguage/>}/>
        <Route path='/admin/listlanguage' element={<ListLanguage/>}/>
        <Route path='/admin/editlanguage/:id' element={<EditLanguage/>}/>
        <Route path='/admin/addblog' element={<AddBlog/>}/>;
        <Route path='/admin/listblog' element={<ListBlog/>}/>
        <Route path='/admin/editblog/:id' element={<EditBlog/>}/>
        <Route path='/admin/addcoupon' element={<AddCoupon/>}/>
        <Route path='/admin/listcoupon' element={<ListCoupon/>}/>
        <Route path='/admin/editcoupon/:id' element={<EditCoupon/>}/>
        <Route path='/admin/addfield' element={<AddField/>}/>
        <Route path='/admin/listfield' element={<ListField/>}/>
        <Route path='/admin/editfield/:id' element={<EditField/>}/>
        <Route path='/admin/addmentor' element={<AddMentor/>}/>
        <Route path='/admin/listmentor' element={<ListMentor/>}/>
        <Route path='/admin/editmentor/:id' element={<EditMentor/>}/>
      </Routes>
    </>
  );
}

export default App;
