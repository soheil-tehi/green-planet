import TestImg from '../../assets/Images/cta-bg.jpg';

import './productsMain.scss';

function ProductsMain() {
    return (
        <section className='productsMain-container'>
            <h2>محصولات</h2>
            <p>
                هنگام خرید گیاه آپارتمانی جدید، آن را به چشم یک موجود زنده نگاه
                کنید. شرایط خانه‌تان را برای ورود انواع گیاه گلدانی جدید آماده
                کنید. جای مناسب به او اختصاص دهید. سپس از گلخانه فروشگاه
                اینترنتی گل و گیاه گلستان او را به خانه خود دعوت کنید. گلستان با
                راه‌اندازی لاین فروش گل و گیاه اینترنتی این موقعیت را برای شما
                فراهم کرده و شما می‌توانید بدون نیاز به رفتن به بازار گل و گیاه،
                با خرید آنلاین گیاه آن‌ها را در محل خود تحویل بگیرید
            </p>
            <div className='productMain-wrapper'>

                <div className='productsMain-box'>
                    <img src={TestImg} />
                </div>
                <div className='productsMain-box'>
                    <img src={TestImg} />
                </div>
                <div className='productsMain-box'>
                    <img src={TestImg} />
                </div>
            </div>

        </section>
    )
}

export default ProductsMain