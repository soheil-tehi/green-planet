import useScrollToTop from '../../Components/useScrollToTop';
import { BiTimeFive } from 'react-icons/bi';
import ImgTest from '../../assets/Images/del2.jpg';
import { useNavigate } from 'react-router-dom';
import { PiCactusBold, PiPottedPlantBold } from 'react-icons/pi';
import { TbPlant2 } from 'react-icons/tb';
import LastArticles from '../../Components/LastArticles/lastArticles';
import './showBlog.scss';

function ShowBlog() {

    const navigate = useNavigate();

    useScrollToTop();

    return (
        <div className="showBlog-container">
            <div className="blog-right">
                <img src={ImgTest} alt="" />
                <h2>همه چیز درباره روش نگهداری گیاه بامبو</h2>
                <div className='right-info'>
                    <p>نویسنده : {"گلستانی"}</p>
                    <p>به روز رسانی شده در : {"1402/04/20"}</p>
                </div>
                <div className='read-time'>
                    <BiTimeFive />
                    <p>زمان مطالعه : {17} دقیقه</p>
                </div>
            </div>
            <aside className="aside-blog-left">
                <div className='aside-products'>
                    <h3>محصولات</h3>
                    <div className='aside-box' onClick={() => navigate("/products/housePlants")}>
                        <PiPottedPlantBold />
                        <h4>گیاهان آپارتمانی</h4>
                    </div>
                    <div className='aside-box' onClick={() => navigate("/products/succulent")}>
                        <TbPlant2 />
                        <h4>ساکولنت ها</h4>
                    </div>
                    <div className='aside-box' onClick={() => navigate("/products/cactus")}>
                        <PiCactusBold />
                        <h4>کاکتوس ها</h4>
                    </div>
                </div>
                <div className='aside-blogs'>
                    <LastArticles />
                </div>
            </aside>
        </div>
    )
}

export default ShowBlog;