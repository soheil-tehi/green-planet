import { MdOutlineSupportAgent } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import './guidance.scss';


function Guidance() {
    const navigate = useNavigate();

    return (
        <section className="guidance-container">
            <h2>مشاوره</h2>
            <p>اگر شما هم نیاز به مشاوره برای گیاهان آپارتماین خود دارید،میتوانید روی متخصصین گل و گیاه سبزینه حساب کنید و از خدمات و سرویس‌های ما استفاده کنید</p>
            <div className='guidance-btn'>
                <MdOutlineSupportAgent />
                <a onClick={() => navigate("/contact-us")} href="#">ارتباط با پشتیبانی</a>
            </div>
        </section>
    )
}

export default Guidance;