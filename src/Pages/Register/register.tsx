import { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { GiArchiveRegister } from 'react-icons/gi';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import useScrollToTop from '../../Components/useScrollToTop';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './register.scss';
import axios from 'axios';



interface InitialValuesProps {
    userName: string,
    email: string,
    password: string,
    confirmPassword: string,
}

const initialValues: InitialValuesProps = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
}

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



    const fromValidation = (values: InitialValuesProps) => {
        const error: InitialValuesProps = {
            userName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };

        if (!values.userName) {
            error.userName = "userName is empty"
        } else if (values.userName.length < 3) {
            error.userName = "userName is invalid name"
        }

        if (!values.email) {
            error.email = "email is empty"
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            error.email = 'Invalid email address';
        }


        if (!values.password) {
            error.password = "password is empty"
        } else if (values.password.length < 8) {
            error.password = "password field should not empty"
        }

        if (!values.confirmPassword) {
            error.confirmPassword = "confirmPassword is empty"
        } else if (values.confirmPassword.length < 8) {
            error.confirmPassword = "confirmPassword field should not empty"
        } else if (values.password !== values.confirmPassword) {
            error.confirmPassword = "pass word not match"
        }
        return error;
    }

    const registerUser = (values: InitialValuesProps) => {

        axios.post("http://localhost:5500/user/register", values, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })

    }

    return (
        < div className='register-wrapper' >
            <div className='register-title'>
                <GiArchiveRegister />
                <h3 style={{ textAlign: "center" }}>ساخت حساب کاربری</h3>
            </div>

            <Formik
                initialValues={initialValues}
                onSubmit={(values) => registerUser(values)}
            // validate={(values) => fromValidation(values)}

            >


                <Form className='register-form' >
                    <label htmlFor="userName" >نام کاربری </label>
                    <Field className='register-name-input' type="text" name="userName" id="userName" />
                    <ErrorMessage name='userName'>{msg => <p className='error-message'>{msg}</p>}</ErrorMessage>
                    <label htmlFor="email" >ایمیل </label>
                    <Field className='register-name-input' type="text" name="email" id="email" />
                    <ErrorMessage name='email'>{msg => <p className='error-message'>{msg}</p>}</ErrorMessage>

                    <label htmlFor="password" >گذرواژه </label>
                    <div className='register-password'>
                        <Field type={showFirstPass ? "text" : "password"} id='password' name="password" />

                        <a onClick={toggleShowPass}>
                            {
                                showFirstPass ?
                                    <AiFillEyeInvisible />
                                    :
                                    <AiFillEye />
                            }
                        </a>
                    </div>
                    <ErrorMessage name='password'>{msg => <p className='error-message'>{msg}</p>}</ErrorMessage>
                    <label htmlFor="confirmPassword" >تکرار گذرواژه </label>
                    <div className='register-password'>
                        <Field type={showSecondPass ? "text" : "password"} id='confirmPassword' name="confirmPassword" />
                        <a onClick={toggleShowSecondPass}>
                            {
                                showSecondPass ?
                                    <AiFillEyeInvisible />
                                    :
                                    <AiFillEye />
                            }
                        </a>
                    </div>
                    <ErrorMessage name='confirmPassword'>{msg => <p className='error-message'>{msg}</p>}</ErrorMessage>
                    {/* <button
                            type="button"
                            onClick={() => validateForm().then(() => submitForm())}
                        >
                            Validate All
                        </button> */}
                    <button type='submit' className='btn-register'>ثبت نام</button>

                    <button className='btn-login' onClick={() => navigate("/login")}>بازگشت به ورود</button>

                </Form>


            </Formik>

            {/* 
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
            </form> */}
        </div>
    )
}

export default Register;