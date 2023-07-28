import { useNavigate } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';
import { TbFileInfo } from 'react-icons/tb';
import { MdAir } from 'react-icons/md';
import { RiMentalHealthFill } from 'react-icons/ri';
import { GiStrong } from 'react-icons/gi';
import './purposes.scss';

function Purposes() {
    const navigate = useNavigate();
    return (
        <section className='purpose-container'>
            <div className='purpose-right'>
                <div className='right-wrapper'>
                    <h3>اهمیت و مزایای نگهداری گل در منزل و محل کار</h3>
                    <p>
                        فواید بی نظیر نگهداری گل و گلدان در منزل و شرکت بر هیچکس
                        پوشیده نیست؛ نگهداری گلدان در محل کار و منزل، علاوه بر القای
                        حس زیبایی، مزایای جسمی و روحی بسیاری بر افراد دارد. بسیاری
                        از خانم‌های خانه دار و حتی مدیران شرکت‌ها از انواع گل‌ها جهت
                        زیباسازی دکوراسیون منزل و شرکت استفاده می‌کنند و بر این
                        باورند که نگاه کردن به گل‌ها در طول روز، باعث افزایش انرژی،
                        سرزندگی و شادابی می شود. اما این‌ موارد تنها مزایای نگهداری
                        گلدانی پر از گل‌های زیبا در منزل نیست و همان طور که اشاره
                        کردیم نگهداری گل مزایای فراوانی بر سلامت جسم و روان افراد
                        نیز دارد.
                    </p>
                    <div className='right-btn'>
                        <TbFileInfo />
                        <a onClick={() => navigate("/about-us")} href="#">درباره ما</a>
                    </div>
                </div>
            </div>
            <div className='purpose-left'>
                <div className='left-wrapper'>
                    <div className='purpose-info-top'>

                        <div className='purpose-info'>

                            <MdAir />
                            <h4>تصفیه هوا و آزاد شدن اکسیژن</h4>
                            <p>
                                با قرار دادن گل در نقاط مختلف منزل می توان این آلودگی را
                                تا حدودی کنترل کرد، چرا که گل‌ها، دی اکسید کربن هوا را
                                می گیرند و اکسیژن آزاد می کنند.
                            </p>
                        </div>

                        <div className='purpose-info'>

                            <RiMentalHealthFill />
                            <h4> کاهش استرس</h4>
                            <p>
                                نگهداری گل استرس در منزل و محل کار را کاهش می دهد؛
                                گیاهان روح و روان انسان ها را تسکین می دهند و به عنوان
                                راهی برای از بین بردن استرس معرفی می شوند.
                            </p>
                        </div>

                    </div>
                    <div className='purpose-info-bottom'>

                        <div className='purpose-info'>

                            <AiFillHeart />
                            <h4>افزایش روابط صمیمی‌تر و موثرتری با دیگران </h4>
                            <p>
                                در زمینه تاثیر نگهداری گل در خانه و شرکت تحقیقات بسیاری
                                صورت گرفته که یکی دیگر از آن‌ها نشان می‌دهد افرادی که
                                زمان زیادی را صرف نگهداری از گل و گیاه می کنند، روابط
                                صمیمی‌تر و موثرتری با دیگران دارند
                            </p>

                        </div>

                        <div className='purpose-info'>

                            <GiStrong />
                            <h4>کاهش سرماخوردگی، گلودرد و سرفه‌های خشک</h4>
                            <p>
                                براساس مطالعه‌ای که در دانشگاه کشاورزی نروژ انجام شد
                                وجود گیاهان سالم در فضای خانه احتمال ابتلا به
                                سرماخوردگی، گلودرد و سرفه‌های خشک را کاهش می‌دهد. ظاهرا
                                افزایش رطوبت محیط خانه عاملی است که از گسترش ویروس
                                آنفلوآنزا جلوگیری می‌کند.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Purposes;