import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { LuSend } from 'react-icons/lu';
import { TfiLocationPin } from 'react-icons/tfi';
import './contactUs.scss';

function ContactUs() {
    return (
        <section className='contact-container'>
            <div className='contant-head'>
                <h2>تماس با ما</h2>
                <p>تمامی مشتریان میتوانند جهت کسب اطلاعات بیشتر از محصولات سایت گلستان با شماره 88468729 -021 تماس حاصل نمایند و یا با فرم زیر در ارتباط باشند</p>
            </div>
            <div className="contact-wrapper">
                <div className='contact-right'>
                    <div className="right-top">
                        <div className='right-call'>
                            <FiPhoneCall />
                            <h3>با ما تماس بگیرید</h3>
                            <p>88498475</p>
                        </div>
                        <div className='right-call'>
                            <HiOutlineMail />
                            <h3>ایمیل</h3>
                            <p>soheil.st2@gmail.com</p>
                        </div>
                    </div>
                    <div className="right-down">
                        <div className="right-message-box">
                            <div className="message-name">
                                <input type="text" placeholder='نام ' />
                                <input type="text" placeholder='ایمیل' />
                            </div>
                            <div className='message-subject'>
                                <input type="text" placeholder='موضوع' />
                                <textarea placeholder='پیام' cols={10} rows={4} />
                            </div>
                            <button className='message-btn'>
                                <LuSend />
                                ارسال پیام
                            </button>
                        </div>
                    </div>
                </div>
                <div className='contact-left'>
                    <div className="left-top">
                        <div className='right-Address'>
                            <TfiLocationPin />
                            <h3>آدرس</h3>
                            <p>دفتر مرکزی: تهران، خیابان کریمخان زند، خیابان ایرانشهر، خیابان بهشهر، پلاک 37، عمارت گلستان</p>
                        </div>
                    </div>
                    <div className="left-down">
                        <iframe
                            className='google-map'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2665.781368236301!2d51.41990718106466!3d35.71188702325057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e01b4e8ac0045%3A0x831a07098c69a147!2sGol%20Setan%20Florist!5e0!3m2!1sen!2s!4v1631273075969!5m2!1sen!2s"
                            width="600"
                            height="450"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs;