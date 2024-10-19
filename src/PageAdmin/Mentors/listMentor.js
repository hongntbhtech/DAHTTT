import React from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';

function Mentors() {
    const [mentors, setMentors] = React.useState([
        {
            id: 1,
            name: 'Nguyễn Văn A',
            email: 'a@example.com',
            major: 'Công nghệ thông tin',
            experience: '3 năm',
            employee_id: 1
        },
        {
            id: 2,
            name: 'Trần Thị B',
            email: 'b@example.com',
            major: 'Khoa học máy tính',
            experience: '5 năm',
            employee_id: 2
        },
        // Thêm các mentor khác nếu cần
    ]);

    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate(`/admin/editmentor/${id}`);
    };

    const handleDelete = (id) => {
        const updatedMentors = mentors.filter(mentor => mentor.id !== id);
        setMentors(updatedMentors);
        alert(`Đã xóa mentor với ID: ${id}`);
    };

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-6xl lg:py-16">
                <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Danh sách mentor</h2>
                <Link to='/admin/addmentor'> <button className="mb-4 px-4 py-2 text-sm font-medium text-white bg-[#71BC9F] rounded-lg">
          Thêm người hướng dẫn
        </button></Link>
                <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-gray-200 dark:bg-gray-700">
                            <th className="py-3 px-4 border-b text-center">ID</th>
                            <th className="py-3 px-4 border-b text-center">Tên</th>
                            <th className="py-3 px-4 border-b text-center">Email</th>
                            <th className="py-3 px-4 border-b text-center">Chuyên ngành</th>
                            <th className="py-3 px-4 border-b text-center">Kinh nghiệm</th>
                            <th className="py-3 px-4 border-b text-center">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mentors.map(mentor => (
                            <tr key={mentor.id} className="hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200">
                                <td className="py-2 px-4 border-b text-center">{mentor.id}</td>
                                <td className="py-2 px-4 border-b text-center">{mentor.name}</td>
                                <td className="py-2 px-4 border-b text-center">{mentor.email}</td>
                                <td className="py-2 px-4 border-b text-center">{mentor.major}</td>
                                <td className="py-2 px-4 border-b text-center">{mentor.experience}</td>
                                <td className="py-2 px-4 border-b">
                                    <div className="flex justify-center">
                                        <button 
                                            className="text-blue-500 hover:underline mr-2" 
                                            onClick={() => handleEdit(mentor.id)}>
                                            <FaEdit />
                                        </button>
                                        <button 
                                            className="text-red-500 hover:underline" 
                                            onClick={() => handleDelete(mentor.id)}>
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

export default Mentors;
