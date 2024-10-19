import logo from '../../assets/HomeClient/logo.png'
// import vector from '../../assets/HomeClient/Vector.png'
import { Link } from 'react-router-dom';
import search from '../../assets/HomeClient/Search.png'
// import img_tk from '../../assets/HomeClient/img_tk.png'
import { Dropdown, Button } from "flowbite-react";
import { FaUser } from 'react-icons/fa';
import { useState, useEffect, useRef  } from 'react';

function Header() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleSearchForm = () => {
        setIsSearchOpen(prev => !prev);
    };

    const searchRef = useRef(null);
    const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setIsSearchOpen(false);
        }
    };
    useEffect(() => {
        // Thêm sự kiện lắng nghe
        window.addEventListener('mousedown', handleClickOutside);

        // Cleanup sự kiện khi component unmount
        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="max-w-[1188px] mx-auto pl-[24px] pr-[24px] flex justify-between pt-[25px] font-poppins">
                <div className='flex min-w-[627.84px] justify-between'>
                    <Link to='/homeclient'>
                        <img src={logo} alt='abc'></img>
                    </Link>

                    <div className='pt-[35px]'>
                        <ul className='flex min-w-[400px] justify-between'>
                            <li className='flex font-bold text-[16px] leading-[24px] tracking-[1.6px] min-w-[114px]'>
                                <Link to='/course'>Khóa học</Link>
                                <div className='pt-[7px]'>
                                    {/* <img className='w-[15.62px] h-[9.28px]' src={vector} alt='abc'></img> */}
                                </div>
                            </li>
                            <li className='font-bold text-[16px] leading-[24px] tracking-[1.6px]'>
                                <Link to='/blog'>Blog</Link>
                            </li>
                            <li className='font-bold text-[16px] leading-[24px] tracking-[1.6px]'>
                                <Link to='/coursesale'>Khuyến mãi</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='min-w-[130px] flex justify-between pt-[20px]'>
                    <div>
                        <div className='w-[52px] h-[52px] bg-[#000] rounded-[14px] flex items-center justify-center'>
                            <img
                                src={search}
                                alt='Search'
                                onClick={toggleSearchForm}
                                className="cursor-pointer"
                            />
                        </div>

                        {isSearchOpen && (
                            <div ref={searchRef} className="fixed left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg p-6 z-10 w-full max-w-2xl">
                                <div className="flex items-center">
                                    <input
                                        className="flex-grow p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        type="text"
                                        placeholder="Search..."
                                    />
                                    <button className="ml-2 bg-[#71bc9f] text-white px-6 py-3 rounded-lg transition">
                                        Search
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    <Dropdown label={<FaUser />} dismissOnClick={false} style={{ backgroundColor: '#71bc9f', width: '50px', height: '50px' }}>

                        <Dropdown.Item style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <FaUser style={{ fontSize: '24px', marginBottom: '4px' }} />

                        </Dropdown.Item>
                        <Dropdown.Item style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                        </Dropdown.Item>
                        <Dropdown.Item style={{ height: '1px', background: '#ccc', margin: '4px 0' }}></Dropdown.Item>
                        
                        <Link to='/mycourse' className='flex flex-col items-center text-gray-600'>
                            My Course
                        </Link>
                        <Link to='/profile' className='flex flex-col items-center text-gray-600 mt-[20px]'>
                            Profile
                        </Link>
                        <Dropdown.Item style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Button color="gray">Logout</Button>
                        </Dropdown.Item>

                    </Dropdown>
                </div>
            </div>
        </>
    )
}

export default Header;