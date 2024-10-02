import logo from '../../assets/Signin/logo.png'
import img_signin from '../../assets/Signin/img_signin.png'
import person from '../../assets/Signin/person.png'
import lock from '../../assets/Signin/Lock.png'
import phone from '../../assets/Signin/Phone.png'

import img_git from '../../assets/Signin/img_git.png'
import img_face from '../../assets/Signin/img_face.png'
import img_google from '../../assets/Signin/img_google.png'

import icon from '../../assets/Signin/Icon.png'
import bg_signin from '../../assets/Signin/bg_signin.png'
import { Link } from 'react-router-dom';
function SignUp() {
    return (
        <>
            <div className="max-w-screen-2xl font-poppins">
                <div className='bg-no-repeat' style={{ backgroundImage: `url(${bg_signin})` }}>
                    <div className="max-w-[1390px] mx-auto flex justify-between pt-[123px] pl-[24px] pr-[24px] pb-[225px]">
                        <div className="max-w-[658px] pl-[3px]">
                            <div className='flex'>
                                <img src={logo} alt='abc'></img>
                                <p className='font-semibold text-[35px] leading-[52.5px] tracking-[0.2px] text-center text-[#000000] max-w-[477px] pt-[24.5px]'>Chào mừng bạn đến với hệ thống của chúng tôi</p>
                            </div>

                            <div>
                                <img className='m-0 m-auto' src={img_signin} alt='abc'></img>
                            </div>
                        </div>

                        <div className='max-w-[621px] min-h-[822px] rounded-[45px] border-[1px] text-center -mt-[34px] hover:shadow-custom'>
                            <div className='max-w-[543px] mx-auto flex justify-end pt-[44px]'>
                               <Link to='/'> <img src={icon} alt='abc'></img></Link>
                            </div>
                            <h1 className='font-bold text-[50px] leading-[75px] pt-[6px] tracking-[0.1px]'>Đăng ký</h1>

                            <div className='pt-[40px]'>
                                <button className='w-[481px] h-[65px]  bg-[#D2D7D5] rounded-[45px]'>
                                    <div className='max-w-[194.96px] flex justify-between pl-[26px]'>
                                        <div>
                                            <img src={person} alt='abc'></img>
                                        </div>
                                        <div className='pt-[1px]'><p className='font-semibold text-[20px] leading-[30px] tracking-[2px]'>Họ và tên</p></div>
                                    </div>
                                </button>

                                <button className='w-[481px] h-[65px]  bg-[#D2D7D5] rounded-[45px] mt-[40px]'>
                                    <div className='max-w-[235.96px] flex justify-between pl-[26px]'>
                                        <div>
                                            <img src={phone} alt='abc'></img>
                                        </div>
                                        <div className='pt-[3px]'><p className='font-semibold text-[20px] leading-[30px] tracking-[2px]'>Số điện thoại</p></div>
                                    </div>
                                </button>

                                <button className='w-[481px] h-[65px] bg-[#D2D7D5] rounded-[45px] mt-[40px]'>
                                    <div className='max-w-[186.96px] flex justify-between pl-[26px]'>
                                        <div>
                                            <img src={lock} alt='abc'></img>
                                        </div>
                                        <div>
                                            <p className='font-semibold text-[20px] leading-[30px] tracking-[1.6px]'>Mật khẩu</p>
                                        </div>
                                    </div>
                                </button>

                                <button className='w-[481px] h-[65px]  bg-[#D2D7D5] rounded-[45px] mt-[40px]'>
                                    <div className='max-w-[308.96px] flex justify-between pl-[26px]'>
                                        <div>
                                            <img src={lock} alt='abc'></img>
                                        </div>
                                        <div className='pt-[1px]'><p className='font-semibold text-[20px] leading-[30px] tracking-[2.5px]'>Nhập lại mật khẩu</p></div>
                                    </div>
                                </button>
                            </div>

                            <div className='pt-[40px]'>
                                <button className='w-[301px] h-[65px] rounded-[45px] bg-[#71BC9F] font-semibold text-[25px] leading-[37.5px] tracking-[2.3px] pt-[1px]' >Đăng Ký</button>
                            </div>

                            <div className='pt-[18px] max-w-[198px] mx-auto'>
                                <p className='font-semibold text-[16px] leading-[24px] tracking-[1.6px] text-[#000000]'>Hoặc đăng ký với</p>
                            </div>

                            <div className='flex max-w-[223px] justify-between mx-auto pt-[12px]'>
                                <div><img className='' src={img_git} alt='abc'></img></div>
                                <div><img className='' src={img_face} alt='abc'></img></div>
                                <div><img className='' src={img_google} alt='abc'></img></div>
                            </div>


                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default SignUp;