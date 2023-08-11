import { useEffect, useState } from 'react';
import LogoImg from '../../assets/Images/logo.png';
import { NavLink } from 'react-router-dom';
import { PiPottedPlantFill } from 'react-icons/pi';
import { RiArticleFill, RiContactsBook2Fill } from 'react-icons/ri';
import { BsInfoSquareFill } from 'react-icons/bs';
import { AiTwotoneHome, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BiCartAlt, BiLogIn, BiUser } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import jwt_decode from 'jwt-decode';
import './navbar.scss';

function Navbar() {

    const [isClose, setIsClose] = useState<boolean>(false);
    const [cartItems, setCartItems] = useState<number>(0);
    const [isLoign, setIsLogin] = useState<boolean>(false);
    const cartItemsLocal = useSelector((state: RootState) => state.cart);



    // const userInfo = jwt_decode(localStorage.getItem("user") || "");
    // const userInfo = ""
    // console.log(555, userInfo);

    const data = localStorage.getItem("user") || "";


    // console.log(jwt_decode(userInfo));


    useEffect(() => {
        if (data) {
            const userInfo = jwt_decode(data);
            setIsLogin(true)
            console.log("eeff", userInfo);

        } else {
            setIsLogin(false);


        }
    }, [data]);

    useEffect(() => {
        if (isLoign) {
            const cartItemUser: any = jwt_decode(data);
            console.log("is login", cartItemUser.cartItems);
            if (cartItemUser.cartItems.length !== 0) {
                const cartCount = cartItemUser.cartItems.reduce((prev: any, next: any) => {
                    return prev + next.count;
                }, 0);
                setCartItems(cartCount);
            } else {
                setCartItems(0);
            }
        }
        else {
            const cartCount = cartItemsLocal.cartItems.reduce((prev: any, next: any) => {
                return prev + next.count;
            }, 0)
            setCartItems(cartCount);

        }
    }, [isLoign])


    return (
        <nav className="nav-container" >
            <div className="nav-logo">
                <NavLink to="/"
                    className="nav-logo-link"
                >
                    <img src={LogoImg} alt="logo" />
                    <h3>سبزینه</h3>
                </NavLink>
            </div>
            <div className='nav-item' data-flag={isClose}>
                <NavLink
                    className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}
                    to="/">
                    <AiTwotoneHome />
                    <span>خانه</span>
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}
                    to="/products">
                    <PiPottedPlantFill />
                    <span>محصولات</span>
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}
                    to="/blogs">
                    <RiArticleFill />
                    <span>مقالات</span>
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}
                    to="/contact-us">
                    <RiContactsBook2Fill />
                    <span>تماس با ما</span>
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}
                    to="/about-us">
                    <BsInfoSquareFill />
                    <span>درباره ما</span>
                </NavLink>
            </div>
            <div className='nav-mini' onClick={() => setIsClose(!isClose)}>
                {isClose ?
                    <AiOutlineClose />
                    :
                    <AiOutlineMenu />
                }
            </div>
            <div className='nav-cart' >
                {/* <NavLink className={({ isActive }) => isActive ? "userActive" : ""} to="/login"> */}
                {
                    isLoign ?
                        <NavLink className={({ isActive }) => isActive ? "userActive" : ""} to="/dashboard">
                            <BiUser />
                        </NavLink>
                        :
                        <NavLink className={({ isActive }) => isActive ? "userActive" : ""} to="/login">
                            <div className='login-icon'>
                                <BiLogIn />
                                <span >ورود | ثبت نام</span>
                            </div>
                        </NavLink>
                }
                <div className='divider'></div>
                <NavLink className={({ isActive }) => isActive ? "cartActive cart-icon" : "cart-icon"}
                    to="/cart">
                    <BiCartAlt className="cart-logo" />
                    {
                        cartItems !== 0 &&
                        <div className='cart-count'><span>{cartItems}</span></div>
                    }
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;