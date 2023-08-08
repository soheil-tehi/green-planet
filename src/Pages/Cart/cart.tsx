import { Fragment, useEffect, useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { IoIosPricetags } from 'react-icons/io';
import { PiPottedPlantFill } from 'react-icons/pi';
import { BsBoxSeam } from 'react-icons/bs';
import LogoImg from '../../assets/Images/logo.png';
import { useNavigate } from 'react-router-dom';
import useScrollToTop from '../../Components/useScrollToTop';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { addCount, minusCount, removeFromCart } from '../../Redux/cartSlice';
import './cart.scss';

export const separate = (Number: any) => {
    Number += "";
    Number = Number.replace(",", "");
    let x = Number.split(".");
    let y = x[0];
    let z = x.length > 1 ? "." + x[1] : "";
    let rgx = /(\d+)(\d{3})/;
    while (rgx.test(y)) y = y.replace(rgx, "$1" + "," + "$2");
    return y + z;
}

function Cart() {

    useScrollToTop();
    const navigate = useNavigate();

    const { cartItems } = useSelector((state: RootState) => state.cart);

    const dispatch = useDispatch();


    const totalPrice = () => {
        let totalPrice = 0;
        cartItems.map(item => {
            totalPrice += item.price * item.count
        });
        return totalPrice;
    }

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
                                cartItems.map(item => (
                                    <Fragment key={item._id}>
                                        <tr >
                                            <td >
                                                <div className='product-wrapepr'>
                                                    <div className='product-img-wrapper'>
                                                        <img src={`http://localhost:5500/${item.imageCover}`} alt="sss" />
                                                    </div>
                                                    <p>{item.productName}</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='product-count'>
                                                    <AiOutlinePlus style={{ color: "green" }} onClick={() => dispatch(addCount(item._id))} />
                                                    <span>{item.count}</span>
                                                    {
                                                        item.count == 1 ?
                                                            <MdDeleteForever style={{ color: "red" }} onClick={() => dispatch(removeFromCart(item._id))} />
                                                            :
                                                            <AiOutlineMinus style={{ color: "red" }} onClick={() => dispatch(minusCount(item._id))} />
                                                    }
                                                </div>
                                            </td>
                                            <td >{separate(item.price * item.count)}</td>
                                            {/* <td>
                                                <MdDeleteForever className='delete-icon' onClick={() => dispatch(removeFromCart(item._id))} />
                                            </td> */}
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
                            <p>{separate(totalPrice())}</p>
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