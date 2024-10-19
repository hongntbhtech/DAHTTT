import React from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
function Blogs() {
  const [blogs, setSetBlogs] = React.useState([
    {
      id: 1,
      title: "Bài viết 1",
      content: "Nội dung bài viết 1",
      image_url: "https://example.com/image1.jpg",
      employee_id: "Long",
    },
    {
      id: 2,
      title: "Bài viết 2",
      content: "Nội dung bài viết 2",
      image_url: "https://example.com/image2.jpg",
      employee_id: "Huy",
    },
  ]);

  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/admin/editblog/${id}`);
  };

  const handleDelete = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setSetBlogs(updatedBlogs);
    alert(`Đã xóa khóa học với ID: ${id}`);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-6xl lg:py-16">
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          Danh sách bài viết
        </h2>
       <Link to='/admin/addblog'> <button className="mb-4 px-4 py-2 text-sm font-medium text-white bg-[#71BC9F] rounded-lg">
          Thêm bài viết
        </button></Link>
        <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              <th className="py-3 px-4 border-b text-center">ID</th>
              <th className="py-3 px-4 border-b text-center">Tiêu đề</th>
              <th className="py-3 px-4 border-b text-center">Nội dung</th>
              <th className="py-3 px-4 border-b text-center">URL</th>
              <th className="py-3 px-4 border-b text-center">Tên nhân viên</th>
              <th className="py-3 px-4 border-b text-center">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr
                key={blog.id}
                className="hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                <td className="py-2 px-4 border-b text-center">{blog.id}</td>
                <td className="py-2 px-4 border-b text-center">{blog.title}</td>
                <td className="py-2 px-4 border-b text-center">
                  {blog.content}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {blog.image_url}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {blog.employee_id}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  <div className="flex justify-center">
                    <button
                      className="text-blue-500 hover:underline mr-2"
                      onClick={() => handleEdit(blog.id)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="text-red-500 hover:underline"
                      onClick={() => handleDelete(blog.id)}
                    >
                      <RiDeleteBin6Fill />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Blogs;
