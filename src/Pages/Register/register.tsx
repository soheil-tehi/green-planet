import { useEffect, useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { GiArchiveRegister } from 'react-icons/gi';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import useScrollToTop from '../../Components/Common/useScrollToTop';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { BsFillChatHeartFill } from 'react-icons/bs';
import './register.scss';
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

const registerSchema = yup.object().shape({
    userName: yup.string().min(3, "نام کاربری باید حداقل 3 کاراکتر باشد.").required("لطفا نام کاربری را وارد نمایید."),
    email: yup.string().email("فرمت ایمیل وارد شده صحیح نمی باشد.").required("لطفا ایمیل را وارد نمایید."),
    password: yup.string().min(4, "رمز عبور باید حداقل 4 کاراکتر باشد.").required("لطفا رمزعبور را وارد نمایید."),
})

function Register() {

    useScrollToTop();
    const navigate = useNavigate();
    const [showFirstPass, setShowFirstPass] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [registerError, setRegisterError] = useState<boolean>(false);
    const navigation = useNavigate();

    useEffect(() => {
        let timerId: any;
        if (showModal) {
            timerId = setTimeout(() => { setShowModal(false), setRegisterError(false) }, 5000);
        }
        return () => {
            clearTimeout(timerId);
        };
    }, [showModal])

    const toggleShowPass = () => {
        setShowFirstPass(!showFirstPass);
    }

    const responseMessage = (response: any) => {
        console.log(jwtDecode(response.credential));
    };
    const errorMessage = (error: any) => {
        console.log(error);
    };

    const registerUser = (values: InitialValuesProps, resetForm: any) => {
        axios.post("http://localhost:5500/user/register", values, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(res => {
            if (res.data) {
                resetForm();
                setShowModal(true);
                localStorage.setItem("user", res.data.user);
                setTimeout(() => {
                    navigation("/");
                }, 2500);
            } else {
                setShowModal(true);
                setRegisterError(true);
            }
        })
    }

    return (
        <div className='register-container'>
            {
                showModal &&
                <div className='messager-success-register'>
                    <BsFillChatHeartFill />
                    {registerError ?
                        <p>ایمیل وارد شده قبلا ثبت شده است.</p>
                        :
                        <p>ثبت نام با موفقیت انجام شد.</p>
                    }
                </div>
            }
            < div className='register-wrapper' >
                <div className='register-title'>
                    <GiArchiveRegister />
                    <h3 style={{ textAlign: "center" }}>ساخت حساب کاربری</h3>
                </div>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, { resetForm }) => registerUser(values, resetForm)}
                    validateOnBlur={false}
                    validateOnChange={false}
                    validationSchema={registerSchema}
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
                        <button type='submit' className='btn-register'>ثبت نام</button>
                        <button className='btn-login' onClick={() => navigate("/login")}>بازگشت به ورود</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Register;