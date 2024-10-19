import { Link } from "react-router-dom";
import { Dropdown, Button } from "flowbite-react";
import { FaUser } from 'react-icons/fa';

function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <nav className="bg-gray-100 p-4 rounded-lg mb-4 flex justify-end">
        <Dropdown
          label={<FaUser />}
          dismissOnClick={false}
          style={{ backgroundColor: "#71bc9f", width: "50px", height: "50px" }}
        >
          <Dropdown.Item
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaUser style={{ fontSize: "24px", marginBottom: "4px" }} />
          </Dropdown.Item>
          <Dropdown.Item
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></Dropdown.Item>
          <Dropdown.Item
            style={{ height: "1px", background: "#ccc", margin: "4px 0" }}
          ></Dropdown.Item>

          <Link
            to="/mycourse"
            className="flex flex-col items-center text-gray-600"
          >
            My Course
          </Link>
          <Link
            to="/profile"
            className="flex flex-col items-center text-gray-600 mt-[20px]"
          >
            Profile
          </Link>
          <Dropdown.Item
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button color="gray">Logout</Button>
          </Dropdown.Item>
        </Dropdown>
      </nav>
      <nav className="bg-gray-100 p-4 rounded-lg">
        <ul className="flex flex-col space-y-2">
          <li>
            <Link
              to="/admin/addcourse"
              className="text-gray-700 hover:bg-gray-300 rounded px-3 py-2"
            >
              Add Course
            </Link>
          </li>
          <li>
            <Link
              to="/admin/listcourse"
              className="text-gray-700 hover:bg-gray-300 rounded px-3 py-2"
            >
              List Course
            </Link>
          </li>
          <li>
            <Link
              to="/admin/editcourse/1"
              className="text-gray-700 hover:bg-gray-300 rounded px-3 py-2"
            >
              Edit Course
            </Link>
          </li>
          <li>
            <Link
              to="/admin/addlanguage"
              className="text-gray-700 hover:bg-gray-300 rounded px-3 py-2"
            >
              Add Language
            </Link>
          </li>
          <li>
            <Link
              to="/admin/listlanguage"
              className="text-gray-700 hover:bg-gray-300 rounded px-3 py-2"
            >
              List Language
            </Link>
          </li>
          <li>
            <Link
              to="/admin/editlanguage/1"
              className="text-gray-700 hover:bg-gray-300 rounded px-3 py-2"
            >
              Edit Language
            </Link>
          </li>
          <li>
            <Link
              to="/admin/addblog"
              className="text-gray-700 hover:bg-gray-300 rounded px-3 py-2"
            >
              Add Blog
            </Link>
          </li>
          <li>
            <Link
              to="/admin/listblog"
              className="text-gray-700 hover:bg-gray-300 rounded px-3 py-2"
            >
              List Blog
            </Link>
          </li>
          <li>
            <Link
              to="/admin/editblog/1"
              className="text-gray-700 hover:bg-gray-300 rounded px-3 py-2"
            >
              Edit Blog
            </Link>
          </li>
          <li>
            <Link
              to="/admin/addcoupon"
              className="text-gray-700 hover:bg-gray-300 rounded px-3 py-2"
            >
              Add Coupon
            </Link>
          </li>
          <li>
            <Link
              to="/admin/listcoupon"
              className="text-gray-700 hover:bg-gray-300 rounded px-3 py-2"
            >
              List Coupon
            </Link>
          </li>
          <li>
            <Link
              to="/admin/editcoupon/1"
              className="text-gray-700 hover:bg-gray-300 rounded px-3 py-2"
            >
              Edit Coupon
            </Link>
          </li>
          <li>
            <Link
              to="/admin/addfield"
              className="text-gray-700 hover:bg-gray-300 rounded px-3 py-2"
            >
              Add Field
            </Link>
          </li>
          <li>
            <Link
              to="/admin/listfield"
              className="text-gray-700 hover:bg-gray-300 rounded px-3 py-2"
            >
              List Field
            </Link>
          </li>
          <li>
            <Link
              to="/admin/editfield/1"
              className="text-gray-700 hover:bg-gray-300 rounded px-3 py-2"
            >
              Edit Field
            </Link>
          </li>
          <li>
            <Link
              to="/admin/addmentor"
              className="text-gray-700 hover:bg-gray-300 rounded px-3 py-2"
            >
              Add Mentor
            </Link>
          </li>
          <li>
            <Link
              to="/admin/listmentor"
              className="text-gray-700 hover:bg-gray-300 rounded px-3 py-2"
            >
              List Mentor
            </Link>
          </li>
          <li>
            <Link
              to="/admin/editmentor/1"
              className="text-gray-700 hover:bg-gray-300 rounded px-3 py-2"
            >
              Edit Mentor
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Dashboard;
