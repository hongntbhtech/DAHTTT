
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Signin/logo.png';
import img_signin from '../../assets/Signin/img_signin.png';
import person from '../../assets/Signin/person.png';
import lock from '../../assets/Signin/Lock.png';
import { FaRegSquare } from "react-icons/fa";
import img_git from '../../assets/Signin/img_git.png';
import img_face from '../../assets/Signin/img_face.png';
import img_google from '../../assets/Signin/img_google.png';
import icon from '../../assets/Signin/Icon.png';
import bg_signin from '../../assets/Signin/bg_signin.png';


import { Link } from 'react-router-dom';

function SignIn() {
    // const { register, handleSubmit } = useForm();
    // const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm(); // Thêm `formState` vào đây
    const navigate = useNavigate();

    const apiLogin = async (data) => {
        try {
            const response = await fetch('https://dummyjson.com/users');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            const user = result.users.find(user => user.username === data.username && user.password === data.password);

            if (!user) {
                throw new Error('Tên đăng nhập hoặc mật khẩu không đúng');
            }

            console.log('Đăng nhập thành công:', user);
            return user;
        } catch (error) {
            throw new Error(error.message || 'Đăng nhập thất bại');
        }
    };

    const onSubmit = async (data) => {
        try {
            const user = await apiLogin(data);
            console.log(user); 
            navigate('/homeclient');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="max-w-screen-2xl font-poppins">
            <div className='bg-no-repeat bg-custom-y' style={{ backgroundImage: `url(${bg_signin})` }}>
                <div className="max-w-[1390px] mx-auto flex justify-between pt-[123px] pl-[24px] pr-[24px] pb-[225px]">
                    <div className="max-w-[658px] pl-[3px]">
                        <div className='flex'>
                            <img src={logo} alt='Logo'></img>
                            <p className='font-semibold text-[35px] leading-[52.5px] tracking-[0.2px] text-center text-[#000000] max-w-[477px] pt-[24.5px]'>Chào mừng bạn đến với hệ thống của chúng tôi</p>
                        </div>

                        <div>
                            <img className='m-0 m-auto' src={img_signin} alt='Signin'></img>
                        </div>
                    </div>

                    <div className='max-w-[621px] min-h-[650px] rounded-[45px] border-[1px] text-center -mt-[34px] hover:shadow-custom'>
                        <div className='max-w-[500px] mx-auto flex justify-end pt-[44px] mr-[50px]'>
                            <Link to='/'> <img src={icon} alt='Icon'></img></Link>
                        </div>
                        <h1 className='font-bold text-[50px] leading-[75px] pt-[6px] tracking-[0.1px]'>Đăng nhập</h1>

                        <form onSubmit={handleSubmit(onSubmit)} className='pt-[40px]'>
                            <div className='w-[481px] h-[65px] bg-[#D2D7D5] rounded-[45px]'>
                                <div className='max-w-[300px] flex justify-between pl-[26px] pt-[15px]'>
                                    <div>
                                        <img src={person} alt='Username'></img>
                                    </div>
                                    <div className='pt-[8px]'>
                                        <input
                                            {...register("username", { required: "Tên đăng nhập không được để trống" })}
                                            placeholder="Tên đăng nhập"
                                            className='outline-none bg-transparent'
                                        />
                                    </div>
                                </div>
                            </div>
                            {errors.username && <p className='text-red-500 pt-2'>{errors.username.message}</p>}

                            <div className='w-[481px] h-[65px] bg-[#D2D7D5] rounded-[45px] mt-[40px]'>
                                <div className='max-w-[300px] flex justify-between pl-[26px] pt-[15px]'>
                                    <div>
                                        <img src={lock} alt='Password'></img>
                                    </div>
                                    <div className='pt-[8px]'>
                                        <input 
                                            {...register("password", { required: "Mật khẩu không được để trống" })} 
                                            type="password" 
                                            placeholder="Mật khẩu"
                                            className='outline-none bg-transparent'
                                        />
                                    </div>
                                </div>
                            </div>
                            {errors.password && <p className='text-red-500 pt-2'>{errors.password.message}</p>}

                            <div className='max-w-[400px] flex justify-between mx-auto pt-[18px]'>
                                <div className='flex max-w-[245.8px] justify-between'>
                                    <div className='min-h-[22px] min-w-[23.21px]'><FaRegSquare /></div>
                                    <div className='pl-[8px]'><p className='font-semibold text-[16px] leading-[24px] tracking-[1.6px] text-[#000000]'>Nhớ mật khẩu</p></div>
                                </div>
                                <div>
                                    <p className='font-semibold text-[16px] leading-[24px] tracking-[1.6px] text-[#000000]'>Quên mật khẩu?</p>
                                </div>
                            </div>

                            <div className='pt-[40px]'>
                                <button type="submit" className='w-[301px] h-[65px] rounded-[45px] bg-[#71BC9F] font-semibold text-[25px] leading-[37.5px] tracking-[2.5px] pr-[6px]'>Đăng nhập</button>
                            </div>

                            <div className='pt-[18px] max-w-[198px] mx-auto'>
                                <p className='font-semibold text-[16px] leading-[24px] tracking-[1.6px] text-[#000000]'>Hoặc đăng nhập với</p>
                            </div>

                            <div className='flex max-w-[223px] justify-between mx-auto pt-[12px]'>
                                <div><img className='' src={img_git} alt='GitHub'></img></div>
                                <div><img className='' src={img_face} alt='Facebook'></img></div>
                                <div><img className='' src={img_google} alt='Google'></img></div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
