import { useState } from 'react';
import LogoImg from '../../assets/Images/del.png';
import { NavLink } from 'react-router-dom';
import { PiPottedPlantFill } from 'react-icons/pi';
import { MdArticle } from 'react-icons/md';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { BsInfoSquareFill } from 'react-icons/bs';
import { AiTwotoneHome, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BiCartAlt, BiUser } from 'react-icons/bi';
import './navbar.scss';

function Navbar() {
    const [isClose, setIsClose] = useState<boolean>(false);

    return (
        <nav className="nav-container" >
            <div className="nav-logo">
                <img src={LogoImg} alt="logo" />
            </div>
            <div className='nav-item' data-flag={isClose}>
                <NavLink
                    className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}
                    to="/">
                    <AiTwotoneHome />
                    <span>خانه</span>
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}
                    to="">
                    <PiPottedPlantFill />
                    <span>محصولات</span>
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}
                    to="">
                    <MdArticle />
                    <span>مقالات</span>
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}
                    to="/contact-us">
                    <RiContactsBook2Fill />
                    <span>تماس با ما</span>
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}
                    to="">
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
                <BiUser />
                <div className='divider'></div>
                <BiCartAlt />
            </div>
        </nav>
    )
}

export default Navbar;