import { Link } from 'react-router-dom';

function Dashboard() {
    return ( // Thêm return ở đây
        <div>
            <h1>Dashboard</h1>
            <nav>
                <ul>
                    <li><Link to="/admin/addcourse">Add Course</Link></li>
                    <li><Link to="/admin/listcourse">List Course</Link></li>
                    <li><Link to="/admin/editcourse/1">Edit Course</Link></li>
                    <li><Link to="/admin/addlanguage">Add Language</Link></li>
                    <li><Link to="/admin/listlanguage">List Language</Link></li>
                    <li><Link to="/admin/editlanguage/1">Edit Language</Link></li>
                    <li><Link to="/admin/addblog">Add Blog</Link></li>
                    <li><Link to="/admin/listblog">List Blog</Link></li>
                    <li><Link to="/admin/editblog/1">Edit Blog</Link></li>
                    <li><Link to="/admin/addcoupon">Add Coupon</Link></li>
                    <li><Link to="/admin/listcoupon">List Coupon</Link></li>
                    <li><Link to="/admin/editcoupon/1">Edit Coupon</Link></li>
                    <li><Link to="/admin/addfield">Add Field</Link></li>
                    <li><Link to="/admin/listfield">List Field</Link></li>
                    <li><Link to="/admin/editfield/1">Edit Field</Link></li>
                    <li><Link to="/admin/addmentor">Add Mentor</Link></li>
                    <li><Link to="/admin/listmentor">List Mentor</Link></li>
                    <li><Link to="/admin/editmentor/1">Edit Mentor</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Dashboard;
