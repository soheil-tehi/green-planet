import useScrollToTop from '../../Components/useScrollToTop';
import { BiTimeFive } from 'react-icons/bi';
import ImgTest from '../../assets/Images/del2.jpg';
import { useNavigate, useParams } from 'react-router-dom';
import { PiCactusBold, PiPottedPlantBold } from 'react-icons/pi';
import { TbPlant2 } from 'react-icons/tb';
import LastArticles from '../../Components/LastArticles/lastArticles';
import './showBlog.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { useEffect } from 'react';
import { getBlogById } from '../../Redux/blogSlice';

function ShowBlog() {

    useScrollToTop();
    const navigate = useNavigate();

    const { id } = useParams();
    const dispatch = useDispatch();
    const { blogById } = useSelector((state: RootState) => state.blogs);

    useEffect(() => {
        dispatch(getBlogById(id));
    }, []);
      

    return (
        <div className="showBlog-container">

            <div className="blog-right">
                <img src={`http://localhost:5500/${blogById.imageCover}`} alt="" />
                <h2>همه چیز درباره روش نگهداری گیاه بامبو</h2>
                <div className='right-info'>
                    <p>نویسنده : {"سبزینه"}</p>
                    <p>به روز رسانی شده در : {blogById.date}</p>
                </div>
                <div className='read-time'>
                    <BiTimeFive />
                    <p>زمان مطالعه : {blogById.readTime} دقیقه</p>
                </div>
                <div className='description' dangerouslySetInnerHTML={{ __html: blogById.description }} />
            </div>
            <aside className="aside-blog-left">
                <div className='aside-products'>
                    <h3>محصولات</h3>
                    <div className='aside-box' onClick={() => navigate("/products")}>
                        <PiPottedPlantBold />
                        <h4>گیاهان آپارتمانی</h4>
                    </div>
                    <div className='aside-box' onClick={() => navigate("/products")}>
                        <TbPlant2 />
                        <h4>ساکولنت ها</h4>
                    </div>
                    <div className='aside-box' onClick={() => navigate("/products")}>
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