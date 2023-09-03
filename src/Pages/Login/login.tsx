import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { FiLogIn } from 'react-icons/fi';
import jwtDecode from 'jwt-decode';
import useScrollToTop from '../../Components/Common/useScrollToTop';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { BiErrorCircle } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import './login.scss';
interface InitialValuesProps {
    email: string,
    password: string,
}

function Login() {

    useScrollToTop();
    const [showPass, setShowPass] = useState<boolean>(false);
    const [hasError, setHasError] = useState<boolean>(false);
    const navigate = useNavigate();

    const loginSchema = yup.object().shape({
        email: yup.string().email("فرمت ایمیل وارد شده صحیح نمی باشد.").required("لطفا ایمیل را وارد نمایید."),
        password: yup.string().min(4, "رمز عبور باید حداقل 4 کاراکتر باشد.").required("لطفا رمزعبور را وارد نمایید."),
    })

    const initialValues: InitialValuesProps = {
        email: "",
        password: "",
    }
    const toggleShowPass = () => {
        setShowPass(!showPass);
    }

    const loginUser = async (values: InitialValuesProps, resetForm: any) => {
        const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/user/login`, values, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (response.data.user) {
            localStorage.setItem("user", response.data.user);
            resetForm();
            navigate("/");
        }
        else {
            setHasError(true);
        }
    };

    useEffect(() => {
        let timerId: any;
        if (hasError) {
            timerId = setTimeout(() => setHasError(false), 5000);
        }
        return () => {
            clearTimeout(timerId);
        };
    }, [hasError])

    return (
        <>
            <div className='login-wrapper'>
                <div className='login-title'>
                    <FiLogIn />
                    <h3 style={{ textAlign: "center" }}>ورود به حساب کاربری</h3>
                </div>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, { resetForm }) => loginUser(values, resetForm)}
                    validateOnBlur={false}
                    validateOnChange={false}
                    validationSchema={loginSchema}
                >
                    <Form className='login-form' >
                        <label htmlFor="email" >ایمیل </label>
                        <Field className='login-name-input' type="text" name="email" id="email" />
                        <ErrorMessage name='email'>{msg => <p className='error-message'>{msg}</p>}</ErrorMessage>
                        <label htmlFor="password" >گذرواژه </label>
                        <div className='login-password'>
                            <Field type={showPass ? "text" : "password"} id='password' name="password" />
                            <a onClick={toggleShowPass}>
                                {
                                    showPass ?
                                        <AiFillEyeInvisible />
                                        :
                                        <AiFillEye />
                                }
                            </a>
                        </div>
                        <ErrorMessage name='password'>{msg => <p className='error-message'>{msg}</p>}</ErrorMessage>
                        <button type='submit' className='btn-login'>ورود</button>
                        <button className='btn-register' onClick={() => navigate("/register")}>ثبت نام</button>
                    </Form>
                </Formik>
            </div>
            {
                hasError &&
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='error-message-wrapper'>
                    <BiErrorCircle />
                    <p>اطلاعات کاربری نادرست است.</p>
                </motion.div >
            }
        </>
    )
}

export default Login;