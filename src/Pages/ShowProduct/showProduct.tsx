import { LuReplace } from 'react-icons/lu';
import { MdOutlineLocalShipping } from 'react-icons/md';
import ImageTest from '../../assets/Images/del2.jpg';
import './showProduct.scss';

function ShowProduct() {
    return (
        <div className="showProduct-container">
            <div className="showProduct-info">
                <div className="info-right">
                    <img src={ImageTest} alt="" />
                </div>
                <div className="info-middle">
                    <h2>گندمی</h2>
                    <h4>ارتفاع گیاه : {28} سانتی متر</h4>
                    <h4>ارتفاع گلدان : {25000} سانتی متر</h4>
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
                    <h4>قیمت : <span>{"350,000"}</span>  تومان</h4>
                    <button>سفارش {"گندومی پیستونس"}</button>
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
                    <p>برای سبد خرید بالای 200.000 تومان ارسال رایگان انجام خواهد شد.</p>
                </div>
            </div>




            <div className="showProduct-description">
                <div className='desc-data-wrapper'>
                    <h3>توضیحات</h3>
                </div>
                <div className='desc-img-wrapper'>
                    <img src={ImageTest} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ShowProduct;