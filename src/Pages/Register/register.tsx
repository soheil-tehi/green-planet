import { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { GiArchiveRegister } from 'react-icons/gi';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import './register.scss';
import useScrollToTop from '../../Components/useScrollToTop';

function Register() {

    useScrollToTop();
    const navigate = useNavigate();
    const [showFirstPass, setShowFirstPass] = useState(false);
    const [showSecondPass, setShowSecondPass] = useState(false);

    const toggleShowPass = () => {
        setShowFirstPass(!showFirstPass);
    }

    const toggleShowSecondPass = () => {
        setShowSecondPass(!showSecondPass);
    }

    const responseMessage = (response: any) => {
        console.log(jwtDecode(response.credential));
    };
    const errorMessage = (error: any) => {
        console.log(error);
    };

    return (
        < div className='register-wrapper' >
            <div className='register-title'>
                <GiArchiveRegister />
                <h3 style={{ textAlign: "center" }}>ساخت حساب کاربری</h3>
            </div>
            <form className='register-form' action="">
                <label htmlFor="Name" >نام </label>
                <input className='register-name-input' type="text" id='Name' />
                <label htmlFor="Email" >ایمیل </label>
                <input className='register-name-input' type="text" id='Email' />
                <label htmlFor="Password">گذرواژه</label>
                <div className='register-password'>
                    <input type={showFirstPass ? "text" : "password"} id='Password' />
                    <a onClick={toggleShowPass}>
                        {
                            showFirstPass ?
                                <AiFillEyeInvisible />
                                :
                                <AiFillEye />
                        }
                    </a>
                </div>
                <label htmlFor="Password">تکرار گذرواژه</label>
                <div className='register-password'>
                    <input type={showSecondPass ? "text" : "password"} id='Password' />
                    <a onClick={toggleShowSecondPass}>
                        {
                            showSecondPass ?
                                <AiFillEyeInvisible />
                                :
                                <AiFillEye />
                        }
                    </a>
                </div>
                <button className='btn-register'>ثبت نام</button>
                <button className='btn-login' onClick={() => navigate("/login")}>بازگشت به ورود</button>
                <div className='google-register'>
                    <GoogleOAuthProvider clientId="789241900390-a5e9djesllvktl407v4pha9t8hn8442s.apps.googleusercontent.com">
                        <GoogleLogin onSuccess={responseMessage} />
                    </GoogleOAuthProvider>
                </div>
            </form>
        </div>
    )
}

export default Register;