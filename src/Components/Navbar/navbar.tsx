import axios from 'axios';
import Spinner from '../Spinner/spinner';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import LogoImg from '../../assets/Images/logo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { PiPottedPlantFill } from 'react-icons/pi';
import { RiArticleFill, RiContactsBook2Fill } from 'react-icons/ri';
import { BsInfoSquareFill } from 'react-icons/bs';
import { ImExit } from 'react-icons/im';
import { AiTwotoneHome, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BiCartAlt, BiErrorCircle, BiLogIn, BiSearchAlt, BiUser } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { IoMdArrowDropdown } from 'react-icons/io';
import { PlantsProps } from '../../Redux/productsSlice';
import './navbar.scss';

function Navbar() {

    const [isClose, setIsClose] = useState<boolean>(false);
    const [showSearch, setShowSearch] = useState<boolean>(false);
    const [showSearchError, setShowSearchError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showResult, setShowResult] = useState<PlantsProps[]>([]);
    const [cartItems, setCartItems] = useState<number>(0);
    const [isLoign, setIsLogin] = useState<boolean>(false);
    const [signOut, setSignOut] = useState<boolean>(false);
    const cartItemsLocal = useSelector((state: RootState) => state.cart);
    const searchInput: React.RefObject<HTMLInputElement> = useRef(null);
    const searchModal: React.RefObject<HTMLDivElement> = useRef(null);
    const serachIcon: React.RefObject<HTMLDivElement> = useRef(null);
    const data = localStorage.getItem("user") || "";
    const navigate = useNavigate();

    useEffect(() => {
        function handler(e: any) {
            if (serachIcon.current?.contains(e.target)) {
                setShowSearchError(false);
                return
            }
            if (!searchModal?.current?.contains(e.target)) {
                setShowSearch(false);
                setIsClose(false);
                setShowResult([]);
                setShowSearchError(false);
                return
            }
        }

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        }
    }, [])

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

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch()
        }
    }

    const handleSearch = async () => {
        setShowResult([]);
        const textSearch = searchInput?.current?.value;
        setShowSearchError(!!textSearch && textSearch?.length < 3);
        if (textSearch!! && textSearch?.length >= 3) {
            setIsLoading(true);
            const result = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/product/searchProduct/${textSearch}`);
            setShowSearchError(result.data.length === 0);
            setShowResult(result.data);
            setIsLoading(false);
        }
    }

    const handleShowResult = (id: string) => {
        navigate(`/products/${id}`);
        setShowSearch(false);
        setShowResult([]);
    }

    const handleExit = (e: any) => {
        e.preventDefault();
        localStorage.removeItem("user");
        navigate("/");
    }

    return (
        <>
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
                    <div className='search' onClick={() => setShowSearch(!showSearch)} ref={serachIcon}>
                        <BiSearchAlt />
                    </div>
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
            {
                showSearch &&
                <div className='search-area' ref={searchModal}>
                    <div className='search-input'>
                        <input type="text" ref={searchInput} placeholder='لطفا برای جستجو 3 کاراکتر وارد نمایید' onKeyDown={handleKeyDown} />
                        {
                            isLoading ?
                                <Spinner />
                                :
                                <BiSearchAlt onClick={handleSearch} />
                        }
                    </div>
                    {
                        showSearchError &&
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className='search-not-found'>
                            <BiErrorCircle />
                            <p className='not-found-message'>با عرض پوزش اما هیچ چیز مطابق با شرایط جستجوی شما نبود لطفا دوباره با کلمات کلیدی مختلف امتحان کنید.</p>
                        </motion.div>
                    }
                    {
                        !!showResult.length &&
                        <div className='showResult-container'>
                            {
                                showResult.map((item: PlantsProps) => (
                                    <div className='show-result-wrapper' onClick={() => handleShowResult(item._id)}>
                                        <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/${item.imageCover}`} alt={item.productName} />
                                        <p>{item.productName}</p>
                                    </div>
                                ))
                            }
                        </div>
                    }
                </div>
            }
        </>
    )
}

export default Navbar;