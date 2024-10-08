import React from 'react';
import { useForm } from 'react-hook-form';
import logo from '../../assets/Signin/logo.png';
import img_signin from '../../assets/Signin/img_signin.png';
import person from '../../assets/Signin/person.png';
import lock from '../../assets/Signin/Lock.png';
import phone from '../../assets/Signin/Phone.png';
import img_git from '../../assets/Signin/img_git.png';
import img_face from '../../assets/Signin/img_face.png';
import img_google from '../../assets/Signin/img_google.png';
import icon from '../../assets/Signin/Icon.png';
import bg_signin from '../../assets/Signin/bg_signin.png';
import { Link } from 'react-router-dom';

function SignUp() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data); // Xử lý dữ liệu đăng ký ở đây
    };

    return (
        <div className="max-w-screen-2xl font-poppins">
            <div className='bg-no-repeat' style={{ backgroundImage: `url(${bg_signin})` }}>
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

                    <div className='max-w-[621px] min-h-[822px] rounded-[45px] border-[1px] text-center -mt-[34px] hover:shadow-custom'>
                        <div className='max-w-[543px] mx-auto flex justify-end pt-[44px]'>
                            <Link to='/'> <img src={icon} alt='Icon'></img></Link>
                        </div>
                        <h1 className='font-bold text-[50px] leading-[75px] pt-[6px] tracking-[0.1px]'>Đăng ký</h1>

                        <form onSubmit={handleSubmit(onSubmit)} className='pt-[40px]'>
                            <div className='mt-[40px]'>
                                <button type="button" className='w-[481px] h-[65px] bg-[#D2D7D5] rounded-[45px]'>
                                    <div className='max-w-[300px] flex justify-between pl-[26px]'>
                                        <div>
                                            <img src={person} alt='Họ và tên'></img>
                                        </div>
                                        <div className='pt-[8px]'>
                                            <input 
                                                {...register("fullName", { required: true })} 
                                                placeholder="Họ và tên"
                                                className='outline-none bg-transparent w-full'
                                            />
                                        </div>
                                    </div>
                                </button>

                                <button type="button" className='w-[481px] h-[65px] bg-[#D2D7D5] rounded-[45px] mt-[40px]'>
                                    <div className='max-w-[300px] flex justify-between pl-[26px]'>
                                        <div>
                                            <img src={phone} alt='Số điện thoại'></img>
                                        </div>
                                        <div className='pt-[8px]'>
                                            <input 
                                                {...register("phone", { required: true })} 
                                                placeholder="Số điện thoại"
                                                className='outline-none bg-transparent w-full'
                                            />
                                        </div>
                                    </div>
                                </button>

                                <button type="button" className='w-[481px] h-[65px] bg-[#D2D7D5] rounded-[45px] mt-[40px]'>
                                    <div className='max-w-[300px] flex justify-between pl-[26px]'>
                                        <div>
                                            <img src={lock} alt='Mật khẩu'></img>
                                        </div>
                                        <div className='pt-[8px]'>
                                            <input 
                                                {...register("password", { required: true })} 
                                                type="password" 
                                                placeholder="Mật khẩu"
                                                className='outline-none bg-transparent w-full'
                                            />
                                        </div>
                                    </div>
                                </button>

                                <button type="button" className='w-[481px] h-[65px] bg-[#D2D7D5] rounded-[45px] mt-[40px]'>
                                    <div className='max-w-[300px] flex justify-between pl-[26px]'>
                                        <div>
                                            <img src={lock} alt='Nhập lại mật khẩu'></img>
                                        </div>
                                        <div className='pt-[8px]'>
                                            <input 
                                                {...register("confirmPassword", { required: true })} 
                                                type="password" 
                                                placeholder="Nhập lại mật khẩu"
                                                className='outline-none bg-transparent w-full'
                                            />
                                        </div>
                                    </div>
                                </button>
                            </div>

                            <div className='pt-[40px]'>
                                <button type="submit" className='w-[301px] h-[65px] rounded-[45px] bg-[#71BC9F] font-semibold text-[25px] leading-[37.5px] tracking-[2.3px] pt-[1px]'>Đăng Ký</button>
                            </div>

                            <div className='pt-[18px] max-w-[198px] mx-auto'>
                                <p className='font-semibold text-[16px] leading-[24px] tracking-[1.6px] text-[#000000]'>Hoặc đăng ký với</p>
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

export default SignUp;
