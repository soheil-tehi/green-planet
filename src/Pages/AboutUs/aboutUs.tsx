import { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import useScrollToTop from '../../Components/useScrollToTop';
import './aboutUs.scss';

interface ImageDataProps {
    i: number,
    image: string
}


const images = [
    "src/assets/Images/Gallery/2.jpeg",
    "src/assets/Images/Gallery/4.jpg",
    "src/assets/Images/Gallery/3.png",
    "src/assets/Images/Gallery/6.jpeg",
    "src/assets/Images/Gallery/1.jpeg",
    "src/assets/Images/Gallery/8.jpeg",
    "src/assets/Images/Gallery/7.jpeg",
    "src/assets/Images/Gallery/5.jpeg",
    "src/assets/Images/Gallery/9.jpg",
];

function AboutUs() {

    const [imageData, setImageData] = useState<ImageDataProps>({ image: "", i: 0 });

    useScrollToTop();

    const viewImage = (image: string, i: number) => {
        setImageData({ image, i })
    }

    const imageAction = (action: string) => {
        let i = imageData.i;
        if (action == "next-image") {
            if (i == 8) {
                setImageData({ image: images[0], i: 0 })
            } else {
                setImageData({ image: images[i + 1], i: i + 1 })
            }
        }
        if (action == "pre-image") {
            if (i == 0) {
                setImageData({ image: images[7], i: 7 })
            }
            else {
                setImageData({ image: images[i - 1], i: i - 1 })
            }
        }
        if (action == "close-gallery") {
            setImageData({ image: '', i: 0 })
        }
    }

    return (
        <section className='about-us-container'>
            <div className="about-head">
                <h2>سخنی چند با شما عزیزان</h2>
                <p>در اولین روزهای سال 96 ، ضرورتی را تحت عنوان تامین گل و گیاه در فضای اینترنت احساس کردیم؛ ولی تقریبا هیچ بستر مناسبی وجود نداشت و یا اگر بستری مناسب وجود داشت ، آن سایت محدود به یک شهر خاص میشد و یا قیمت های آن مناسب نبودند. در نتیجه به این فکر افتادیم که برای اولین بار در ایران، سرویسی را تحت عنوان تامین گل و گیاه ، در سراسر ایران فراهم آوریم. در ابتدا فروشگاه اینترنتی گل و گیاه سبزینه تنها یک سایت تامین گیاهان آپارتمانی بود اما به دلیل استقبال هموطنان ایرانی فروشگاه اینترنتی گل و گیاه سبزینه گسترش یافت و با همکاری با تامین کنندگان گل و گیاه و ملزومات باغبانی توانست تا حد قابل قبولی احتیاجات جامعه گیاه دوست را تامین کند. امروز ، فروشگاه اینترنتی گل و گیاه سبزینه با بیش از 12 نیروی کار جوان و متخصص به صورت مستقیم و بیش از 10 نیروی کار غیر مستقیم و همچنین با بیش از 500 نوع محصول گوناگون اعم از گیاهان آپارتمانی ، انواع تقویت کننده ها و کود های گل و گیاه ، انواع گلدان های پلاستیکی ، سفالی ، سرامیکی و … ، انواع خاک های مخصوص گیاهان توانسته است نیاز های گل و گیاه شما مشتریان عزیز را در کمترین زمان ممکن فراهم آورد. ماموریت و رساله ی فروشگاه اینترنتی گل و گیاه سبزینه ، تامین سریع تمامی گل و گیاه ، ملزومات باغبانی و جلب رضایت شما مشتریان گرامی میباشد.</p>
            </div>
            <div className="about-gallery">
                <div className="gallery-right">
                    <h3>گلخانه ما</h3>
                    <h4>از جمله خدمات مجموعه :</h4>
                    <ul>
                        <li> مشاوره، طراحی، نظارت، اجرا و نگهداری طراحی فضای سبز</li>
                        <li>طراحی سه بعدی محوطه سازی و چیدمان المان ها</li>
                        <li> تولید انواع دیوار گل (گاردن وال) و چمن طبیعی</li>
                        <li>احداث آبنما، برکه، آبشار مصنوعی، باربیکیو و آلاچیق</li>
                        <li> طراحی ماشین عروس ، تزیین سفره عقد و انواع دسته گل</li>
                        <li>فروش انواع گل های آپارتمانی، ساخت تراریوم (باغ شیشه ای) و درختان میوه</li>
                        <li>ساخت انواع گلدان ها و فلاورباکس های مخصوص و فروش ابزار و ادوات باغی</li>
                        <li>مشاوره و تشخیص آفات، بیماری های گیاهی، سم پاشی و دفع آفات</li>
                        <li>تولید و عرضه انواع کودهای گیاهی، حیوانی، خاک برگ، پیت ماس، ورمی کمپوست و </li>
                    </ul>
                </div>
                {
                    imageData.image &&
                    <div className='image-gallery'
                    >
                        <button className='btn-close-image' onClick={() => imageAction("close-gallery")} ><AiOutlineCloseCircle /></button>
                        <button className='btn-next-image' onClick={() => imageAction("next-image")}><GrNext /></button>
                        <img src={imageData.image}
                            className='image-in-gallery'
                        />
                        <button className='btn-pre-image' onClick={() => imageAction("pre-image")}><GrPrevious /></button>

                    </div>
                }
                <div className="gallery-left">
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                    >
                        <Masonry gutter='5px'>
                            {images.map((image, i) => (
                                <img
                                    key={i}
                                    src={image}
                                    style={{ width: "100%", display: "block", cursor: "pointer", borderRadius: "5px" }}
                                    alt=""
                                    onClick={() => viewImage(image, i)}
                                />
                            ))}
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
            </div>
        </section>
    )
}

export default AboutUs