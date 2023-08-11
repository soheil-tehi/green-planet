import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { FiLogIn } from 'react-icons/fi';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import useScrollToTop from '../../Components/useScrollToTop';
import axios from 'axios';
import { userLogin } from '../../Redux/userSlice';
import jwt from 'jsonwebtoken';
import './login.scss';
import { useDispatch } from 'react-redux';

function Login() {

    useScrollToTop();
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const toggleShowPass = () => {
        setShowPass(!showPass);
    }

    const responseMessage = (response: any) => {
        console.log(jwtDecode(response.credential));
    };

    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleLogin = async (e: any) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:5500/user/login", formData, {
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (response.data.user) {
            localStorage.setItem("user", response.data.user);
            // dispatch(userLogin(response.data.user));
            navigate("/");
        }
        else {
            console.log("errror");
        }



    };

    return (
        <div className='login-wrapper'>
            <div className='login-title'>
                <FiLogIn />
                <h3 style={{ textAlign: "center" }}>ورود به حساب کاربری</h3>
            </div>
            <form className='login-form' action="">
                <label htmlFor="Name" >نام کاربری / ایمیل</label>
                <input className='login-name-input' type="text" id='Name' value={formData.email} onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} />
                <label htmlFor="Password">گذرواژه</label>
                <div className='login-password'>
                    <input type={showPass ? "text" : "password"} id='Password' value={formData.password} onChange={(e) => { setFormData({ ...formData, password: e.target.value }) }} />
                    <a onClick={toggleShowPass}>
                        {
                            showPass ?
                                <AiFillEyeInvisible />
                                :
                                <AiFillEye />
                        }
                    </a>
                </div>
                <button onClick={handleLogin} className='btn-login'>ورود</button>
                <button className='btn-register' onClick={() => navigate("/register")}>ثبت نام</button>
                <div className='google-register'>
                    <GoogleOAuthProvider clientId="789241900390-a5e9djesllvktl407v4pha9t8hn8442s.apps.googleusercontent.com">
                        <GoogleLogin onSuccess={responseMessage} />
                    </GoogleOAuthProvider>
                </div>
            </form>
        </div>
    )
}

export default Login;