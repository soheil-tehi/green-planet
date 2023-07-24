import React from 'react'
import { BiRun } from 'react-icons/bi';
import { FaTree } from 'react-icons/fa';
import { BsCashCoin } from 'react-icons/bs';
import { SiAdguard } from 'react-icons/si';
import './service.scss';

function Service() {
    return (
        <section className='service-container'>
            <h2>خدمات</h2>
            <p>
                گلستان در راستای راحتی شما و رفع نیازهای روزمره‌تون، خدمات
                باغبانی و فضای سبز رو با بهترین قیمت و کیفیت،‌ در سریع‌ترین زمان
                ممکن و زیر نظر متخصصان حرفه‌ای به شما ارائه می‌ده. ضمنا شما
                می‌تونید با توجه به سوابق و امتیازات متخصصان و قیمت‌های پیشنهادی
                اون‌ها،‌ انتخاب دقیق‌تری داشته باشید. با گلستان می‌تونید یک
                خونه‌ی همیشه سبز داشته باشید
            </p>
            <div className='service-box-wrapper'>
                <div className='service-box'>
                    <BiRun />
                    <h4>ارسال سریع و مطمئن</h4>
                    <p >
                        روز و ساعت دقیق تحویل سفارشات؛ بلافاصله پس از آماده شدن
                        محصول از طریق پیامک، به اطلاع مشتری خواهد رسید
                    </p>
                </div>
                <div className='service-box'>
                    <FaTree />
                    <h4>خدمات باغبانی و گیاهان آپارتمانی</h4>
                    <p >
                        خبر خوب این است که گلستان بعد از اتمام فرآیند خرید، شما را
                        تنها نخواهد گذاشت. کارشناسان ما همواره برای پاسخگویی به
                        سوالات شما عزیزان، آماده به خدمت خواهند بود
                    </p>
                </div>
                <div className='service-box'>
                    <BsCashCoin />
                    <h4>پرداخت در محل</h4>
                    <p >
                        پرداخت به سفیر گلستان در محل، به صورت نقدی و یا از طریق
                        کارت‌خوان.
                    </p>
                </div>
                <div className='service-box'>
                    <SiAdguard />
                    <h4>ضمانت اصالت و سلامت کالا</h4>
                    <p>
                        تمامی محصولات گلستان همراه با پلاکِ مخصوصِ برندِ ما عرضه
                        خواهند شد و شما میتوانید محصولات فرعی و غیر اصل را توسط این
                        پلاک تشخیص دهید.
                    </p>
                </div>


            </div>


        </section>
    )
}

export default Service