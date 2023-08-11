import { useEffect, useState } from 'react';
import LogoImg from '../../assets/Images/logo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { PiPottedPlantFill } from 'react-icons/pi';
import { RiArticleFill, RiContactsBook2Fill } from 'react-icons/ri';
import { BsInfoSquareFill } from 'react-icons/bs';
import { ImExit } from 'react-icons/im';
import { AiTwotoneHome, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BiCartAlt, BiLogIn, BiUser } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { IoMdArrowDropdown } from 'react-icons/io';
import './navbar.scss';

function Navbar() {

    const [isClose, setIsClose] = useState<boolean>(false);
    const [cartItems, setCartItems] = useState<number>(0);
    const [isLoign, setIsLogin] = useState<boolean>(false);
    const [signOut, setSignOut] = useState<boolean>(false);
    const cartItemsLocal = useSelector((state: RootState) => state.cart);
    const data = localStorage.getItem("user") || "";
    const navigate = useNavigate();

    useEffect(() => {
        if (data) {
            setIsLogin(true)
        } else {
            setIsLogin(false);
        }
    }, [data]);

    useEffect(() => {
        const cartCount = cartItemsLocal.cartItems.reduce((prev: any, next: any) => {
            return prev + next.count;
        }, 0)
        setCartItems(cartCount);
    }, [cartItemsLocal]);


    const handleExit = (e: any) => {
        e.preventDefault();
        localStorage.removeItem("user");
        navigate("/");
    }

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
                {
                    isLoign ?
                        <div className='user-icon' onClick={() => setSignOut(!signOut)}>
                            <BiUser />
                            <IoMdArrowDropdown />
                            <div className='sign-out' data-flag={signOut} onClick={handleExit}>
                                <span>خروج</span>
                                <ImExit />
                            </div>
                        </div>
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