import { motion } from 'framer-motion';
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
                سبزینه در راستای راحتی شما و رفع نیازهای روزمره‌تون، خدمات
                باغبانی و فضای سبز رو با بهترین قیمت و کیفیت،‌ در سریع‌ترین زمان
                ممکن و زیر نظر متخصصان حرفه‌ای به شما ارائه می‌ده. ضمنا شما
                می‌تونید با توجه به سوابق و امتیازات متخصصان و قیمت‌های پیشنهادی
                اون‌ها،‌ انتخاب دقیق‌تری داشته باشید. با سبزینه می‌تونید یک
                خونه‌ی همیشه سبز داشته باشید.
            </p>
            <div className='service-box-wrapper'>
                <motion.div
                    initial={{ y: 300, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                    className='service-box'>
                    <BiRun />
                    <h4>ارسال سریع و مطمئن</h4>
                    <p >
                        روز و ساعت دقیق تحویل سفارشات؛ بلافاصله پس از آماده شدن
                        محصول از طریق پیامک، به اطلاع مشتری خواهد رسید.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ y: 300, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    viewport={{ once: true }}
                    className='service-box'>
                    <FaTree />
                    <h4>خدمات باغبانی و گیاهان آپارتمانی</h4>
                    <p >
                        خبر خوب این است که سبزینه بعد از اتمام فرآیند خرید، شما را
                        تنها نخواهد گذاشت. کارشناسان ما همواره برای پاسخگویی به
                        سوالات شما عزیزان، آماده به خدمت خواهند بود.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ y: 300, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    viewport={{ once: true }}
                    className='service-box'>
                    <BsCashCoin />
                    <h4>پرداخت در محل</h4>
                    <p >
                        پرداخت به سفیر سبزینه در محل، به صورت نقدی و یا از طریق
                        کارت‌خوان.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ y: 300, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    viewport={{ once: true }}
                    className='service-box'>
                    <SiAdguard />
                    <h4>ضمانت اصالت و سلامت کالا</h4>
                    <p>
                        تمامی محصولات سبزینه همراه با پلاکِ مخصوصِ برندِ ما عرضه
                        خواهند شد و شما میتوانید محصولات فرعی و غیر اصل را توسط این
                        پلاک تشخیص دهید.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Service