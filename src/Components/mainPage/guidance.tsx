import { MdOutlineSupportAgent } from 'react-icons/md';
import './guidance.scss';

function Guidance() {
    return (
        <section className="guidance-container">
            <h2>مشاوره</h2>
            <p>اگر شما هم نیاز به مشاوره برای گیاهان آپارتماین خود دارید،میتوانید روی متخصصین گل و گیاه گلستان حساب کنید و از خدمات و سرویس‌های ما استفاده کنید</p>
            <div className='guidance-btn'>
                <MdOutlineSupportAgent />
                <a href="#">ارتباط با پشتیبانی</a>
            </div>
        </section>
    )
}

export default Guidance;