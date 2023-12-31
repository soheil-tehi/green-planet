import { Link } from 'react-router-dom';
import { BsInstagram, BsWhatsapp, BsSkype, BsFacebook, BsTelegram } from 'react-icons/bs'
import './footer.scss';

function Footer() {
    return (
        <footer>
            <div className='footer-container'>
                <div className='footer-wrapper'>
                    <div className="footer-right">
                        <div className='right-menu-img'>
                        </div>
                        <ul className='right-item'>
                            <Link to="/" className='right-item-link'><li>خانه</li></Link>
                            <Link to="/products" className='right-item-link'><li>محصولات</li></Link>
                            <Link to="/blogs" className='right-item-link'><li>مقالات</li></Link>
                            <Link to="/contact-us" className='right-item-link'><li>تماس با ما</li></Link>
                            <Link to="/about-us" className='right-item-link'><li>درباره ما</li></Link>
                        </ul>
                    </div>
                    <div className="footer-middle">
                        <div className="footer-newsletter">
                            <h4>عضویت در خبرنامه</h4>
                            <p>برای اطلاع از آخرین مقالات و تخفیف ها عضو خبر نامه شوید</p>
                            <div className="footer-newsletter-box">
                                <button>عضویت</button>
                                <input type="text" placeholder='ایمیل را وارد کنید' />
                            </div>
                        </div>
                    </div>
                    <div className="footer-left">
                        <div className='foooter-left-wrapper'>
                            <h2>سبزینه</h2>
                            <p>آدرس گل فروشی آنلاین سبزینه (دفتر مرکزی): تهران، خیابان کریمخان زند، خیابان ایرانشهر، خیابان بهشهر، پلاک 37، عمارت سبزینه</p>
                            <p>
                                <br />
                                <strong>تلفن :</strong>  88954121451
                                <br />
                                <strong>  ایمیل :</strong> golestan@info.com
                                <br />
                            </p>
                            <div className='footer-social'>
                                <BsInstagram />
                                <BsWhatsapp />
                                <BsSkype />
                                <BsFacebook />
                                <BsTelegram />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>© تمامی حقوق برای سایت گل و گیاه سبزینه محفوظ است.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;