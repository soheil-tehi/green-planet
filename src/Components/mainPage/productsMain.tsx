import { useNavigate } from 'react-router-dom';
import ImgHousePlants from '../../assets/Images/houseplants.jpeg';
import ImgSucculent from '../../assets/Images/succulent.jpg';
import ImgCactus from '../../assets/Images/Cactus.jpeg';
import { TbPlant2 } from 'react-icons/tb';
import { PiPottedPlantBold, PiCactusBold } from 'react-icons/pi';
import './productsMain.scss';

function ProductsMain() {

    const navigate = useNavigate();

    return (
        <section className='productsMain-container'>
            <h2>محصولات</h2>
            <p>
                هنگام خرید گیاه آپارتمانی جدید، آن را به چشم یک موجود زنده نگاه
                کنید. شرایط خانه‌تان را برای ورود انواع گیاه گلدانی جدید آماده
                کنید. جای مناسب به او اختصاص دهید. سپس از گلخانه فروشگاه
                اینترنتی گل و گیاه سبزینه او را به خانه خود دعوت کنید. سبزینه با
                راه‌اندازی فروش گل و گیاه اینترنتی این موقعیت را برای شما
                فراهم کرده و شما می‌توانید بدون نیاز به رفتن به بازار گل و گیاه،
                با خرید آنلاین گیاه آن‌ها را در محل خود تحویل بگیرید.
            </p>
            <div className='productMain-wrapper'>
                <div className='productsMain-box' onClick={() => navigate("/products/housePlants")}>
                    <img src={ImgHousePlants} />
                    <div className='product-box-info'>
                        <h3>گیاهان آپارتمانی</h3>
                        <PiPottedPlantBold />
                    </div>
                </div>
                <div className='productsMain-box' onClick={() => navigate("/products/succulent")}>
                    <img src={ImgSucculent} />
                    <div className='product-box-info'>
                        <h3>ساکولنت ها</h3>
                        <TbPlant2 />
                    </div>
                </div>
                <div className='productsMain-box' onClick={() => navigate("/products/cactus")}>
                    <img src={ImgCactus} />
                    <div className='product-box-info'>
                        <h3>کاکتوس ها</h3>
                        <PiCactusBold />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductsMain