import axios from 'axios';
import ShowProductLoading from '../../Components/ShowProductLoading/showProductLoading';
import useScrollToTop from '../../Components/Common/useScrollToTop';
import { LuReplace } from 'react-icons/lu';
import { MdOutlineLocalShipping } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PlantsProps } from '../../Redux/productsSlice';
import { addToCart } from '../../Redux/cartSlice';
import { separate } from '../Cart/cart';
import './showProduct.scss';

function ShowProduct() {

    useScrollToTop();
    const dispatch = useDispatch();
    const [productById, setProductById] = useState<PlantsProps>();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/product/getProduct/${id}`)
            .then(res => setProductById(res.data))
    }, []);

    return (
        <div className="showProduct-container">
            {
                !productById ?
                    <ShowProductLoading />
                    :
                    <>
                        <div className="showProduct-info">
                            <div className="info-right">
                                <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/${productById.imageCover}`} alt={productById.productName} />
                            </div>
                            <div className="info-middle">
                                <h2>{productById.productName}</h2>
                                <h4>ارتفاع گیاه : {productById.heightPlant} سانتی متر</h4>
                                <h4>ارتفاع گلدان : {productById.heightPot} سانتی متر</h4>
                                <div className='select-color'>
                                    <h4 > رنگ گلدان :</h4>
                                    <select name="" id="" >
                                        <option value="white">سفید</option>
                                        <option value="white">طلایی</option>
                                        <option value="white">مشکی </option>
                                        <option value="white">قهوه ای</option>
                                        <option value="white">سبز</option>
                                        <option value="white">زرد</option>
                                    </select>
                                </div>
                                <h4>قیمت : <span>{separate(productById.price)}</span>  تومان</h4>
                                <button onClick={() => dispatch(addToCart(productById))}>سفارش {productById.productName}</button>
                            </div>
                        </div>
                        <div className="info-left">
                            <div className='info-left-replece-free'>
                                <LuReplace />
                                <h4>تضمین تازگی گیاه</h4>
                                <p>اگر گیاه شما ظرف 30 روز از بین برود آن را به صورت رایگان تعویض می کنیم.</p>
                            </div>
                            <div className='info-left-replece-free'>
                                <MdOutlineLocalShipping />
                                <h4>ارسال رایگان</h4>
                                <p>برای سبد خرید بالای 200,000 تومان ارسال رایگان انجام خواهد شد.</p>
                            </div>
                        </div>
                        <div className="showProduct-description">
                            <div className='desc-img-wrapper'>
                                <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/${productById.imageDescription}`} alt={productById.productName} />
                            </div>
                            <div className='desc-data-wrapper'>
                                <h3>توضیحات</h3>
                                <div dangerouslySetInnerHTML={{ __html: productById.description }} />
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}

export default ShowProduct;