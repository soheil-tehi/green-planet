import { useState } from 'react';
import LogoImg from '../../assets/Images/logo.png';
import { NavLink } from 'react-router-dom';
import { PiPottedPlantFill } from 'react-icons/pi';
import { RiArticleFill, RiContactsBook2Fill } from 'react-icons/ri';
import { BsInfoSquareFill } from 'react-icons/bs';
import { AiTwotoneHome, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BiCartAlt, BiUser } from 'react-icons/bi';
import './navbar.scss';

function Navbar() {
    const [isClose, setIsClose] = useState<boolean>(false);

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
                <NavLink className={({ isActive }) => isActive ? "userActive" : ""} to="/login">
                    <BiUser />
                </NavLink>
                <div className='divider'></div>
                <NavLink className={({ isActive }) => isActive ? "cartActive" : ""}
                    to="/cart">
                    <BiCartAlt />
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;