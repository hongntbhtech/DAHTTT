import React from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
// import Languages from "./addLanguage";

function Languages() {
    const [courses, setCourses] = React.useState([
        {
            id: 1,
            name: 'C++',
            description: 'Mô tả khóa học 1',
            employee_id: 1
        },
        {
            id: 2,
            name: 'Java',
            description: 'Mô tả khóa học 2',
            employee_id: 1
        },
        // Thêm các khóa học khác nếu cần
    ]);

    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate(`/admin/editlanguage/${id}`);
    };

    const handleDelete = (id) => {
        const updatedCourses = courses.filter(course => course.id !== id);
        setCourses(updatedCourses);
        alert(`Đã xóa khóa học với ID: ${id}`);
    };

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-6xl lg:py-16">
                <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Danh sách khóa học</h2>
                <Link to='/admin/addlanguage'> <button className="mb-4 px-4 py-2 text-sm font-medium text-white bg-[#71BC9F] rounded-lg">
          Thêm bài viết
        </button></Link>
                <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-gray-200 dark:bg-gray-700">
                            <th className="py-3 px-4 border-b text-center">ID</th>
                            <th className="py-3 px-4 border-b text-center">Tên khóa học</th>
                            <th className="py-3 px-4 border-b text-center">Mô tả</th>
                            <th className="py-3 px-4 border-b text-center">Tên nhân viên</th>
                            <th className="py-3 px-4 border-b text-center">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map(course => (
                            <tr key={course.id} className="hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200">
                                <td className="py-2 px-4 border-b text-center">{course.id}</td>
                                <td className="py-2 px-4 border-b text-center">{course.name}</td>
                                <td className="py-2 px-4 border-b text-center">{course.description}</td>
                                <td className="py-2 px-4 border-b text-center">{course.employee_id}$</td>
                                <td className="py-2 px-4 border-b">
                                    <div className="flex justify-center">
                                        <button 
                                            className="text-blue-500 hover:underline mr-2" 
                                            onClick={() => handleEdit(course.id)}>
                                            <FaEdit />
                                        </button>
                                        <button 
                                            className="text-red-500 hover:underline" 
                                            onClick={() => handleDelete(course.id)}>
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

export default Languages;
