import React from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
function Fields() {
  const [fields, setFields] = React.useState([
    {
      id: 1,
      name: "Fontend",
      description: "Mô tả khóa học 1",
      employee_id: 1,
    },
    {
      id: 2,
      name: "Backend",
      description: "Mô tả khóa học 2",
      employee_id: 1,
    },
  ]);

  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/admin/editfield/${id}`);
  };

  const handleDelete = (id) => {
    const updatedCourses = fields.filter((field) => field.id !== id);
    setFields(updatedCourses);
    alert(`Đã xóa khóa học với ID: ${id}`);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-6xl lg:py-16">
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          Danh sách khóa học
        </h2>
        <Link to="/admin/addfield">
          {" "}
          <button className="mb-4 px-4 py-2 text-sm font-medium text-white bg-[#71BC9F] rounded-lg">
            Thêm mảng
          </button>
        </Link>
        <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              <th className="py-3 px-4 border-b text-center">ID</th>
              <th className="py-3 px-4 border-b text-center">Tên mảng</th>
              <th className="py-3 px-4 border-b text-center">Mô tả</th>
              <th className="py-3 px-4 border-b text-center">Tên nhân viên</th>
              <th className="py-3 px-4 border-b text-center">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {fields.map((field) => (
              <tr
                key={field.id}
                className="hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                <td className="py-2 px-4 border-b text-center">{field.id}</td>
                <td className="py-2 px-4 border-b text-center">{field.name}</td>
                <td className="py-2 px-4 border-b text-center">{field.description}</td>
                <td className="py-2 px-4 border-b text-center">{field.employee_id}$</td>
                <td className="py-2 px-4 border-b">
                  <div className="flex justify-center">
                    <button
                      className="text-blue-500 hover:underline mr-2"
                      onClick={() => handleEdit(field.id)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="text-red-500 hover:underline"
                      onClick={() => handleDelete(field.id)}
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

export default Fields;
