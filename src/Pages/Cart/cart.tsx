import { Fragment, useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { IoIosPricetags } from 'react-icons/io';
import { PiPottedPlantFill } from 'react-icons/pi';
import { BsBoxSeam } from 'react-icons/bs';
import LogoImg from '../../assets/Images/logo.png';
import { useNavigate } from 'react-router-dom';
import './cart.scss';


// fake data
const db = [
    { id: 1, title: "دوره آموزشی طراحی داشبورد با Power BI", imgUrl: "https://www.mindinventory.com/blog/wp-content/uploads/2018/07/reactjs-gained.jpg", price: "200.000" },
    { id: 2, title: "اموزش پروزه محور React ", imgUrl: "https://www.mindinventory.com/blog/wp-content/uploads/2018/07/reactjs-gained.jpg", price: "200.000" },
    { id: 3, title: "دوره آموزشی طراحی داشبورد با Powبا Power BI", imgUrl: "https://www.mindinventory.com/blog/wp-content/uploads/2018/07/reactjs-gained.jpg", price: "200.000" },
    { id: 4, title: "", imgUrl: "https://www.mindinventory.com/blog/wp-content/uploads/2018/07/reactjs-gained.jpg", price: "200.000" },
    { id: 5, title: "دوره آموزشی طراحی داشبورد با Power BI", imgUrl: "https://www.mindinventory.com/blog/wp-content/uploads/2018/07/reactjs-gained.jpg", price: "200.000" },
    { id: 6, title: "node js", imgUrl: "https://www.mindinventory.com/blog/wp-content/uploads/2018/07/reactjs-gained.jpg", price: "200.000" },
]

function Cart() {

    const [cartItems, setCartItems] = useState([""]);
    const navigate = useNavigate();

    if (cartItems.length == 0) {
        return (
            <div className='cart-empty'>
                <img src={LogoImg} alt="logo" />
                <h2>سبد خرید شما خالیست</h2>
                <p>برای خرید گیاه مورد علاقه خود وارد صفحه محصولات شوید</p>
                <button className='btn-products' onClick={() => navigate("/products")}>
                    <PiPottedPlantFill />
                    محصولات</button>
            </div>
        )
    } else {
        return (
            <div className='cart-container'>
                <div className="cart-right">
                    <table className='table-content'>
                        <thead>
                            <tr>
                                <th>محصول</th>
                                <th>تعداد</th>
                                <th>قیمت</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                db.map(item => (
                                    <Fragment key={item.id}>
                                        <tr >
                                            <td >
                                               
                                                    <div className='product-wrapepr'>
                                                        <div className='product-img-wrapper'>
                                                            <img src={item.imgUrl} alt="sss" />
                                                        </div>
                                                        <p>{item.title}</p>
                                                    </div>
                                             
                                            </td>
                                         
                                                <td>
                                                    <div className='product-count'>
                                                        <AiOutlinePlus style={{ color: "green" }} />
                                                        <p>5</p>
                                                        <AiOutlineMinus style={{ color: "red" }} />
                                                    </div>
                                                </td>
                                                <td>{item.price}</td>
                                                <td>
                                                    <MdDeleteForever className='delete-icon' />
                                                </td>
                                         
                                        </tr>
                                    </Fragment>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className="cart-left">
                    <div className='total-price-box'>
                        <div className='total-price-title'>
                            <h3>جمع کل سبد خرید</h3>
                            <IoIosPricetags />
                        </div>
                        <div className='total-price-cost'>
                            <p>مجموع</p>
                            <p>3.390.000</p>
                        </div>
                        <button className='btn-buy'>ادامه جهت تسویه حساب</button>
                    </div>
                    <div className='off-box'>
                        <input type="text" placeholder='افزودن کد تخفیف 🎫' />
                        <button>ثبت</button>
                    </div>
                    <div className="left-info">
                        <BsBoxSeam />
                        بسته‌های پستی طی ۷۲ ساعت کاری ارسال می‌شوند.
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;