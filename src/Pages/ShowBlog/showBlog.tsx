import axios from 'axios';
import ShowBlogLoading from '../../Components/ShowBlogLoading/showBlogLoading';
import useScrollToTop from '../../Components/Common/useScrollToTop';
import { BiTimeFive } from 'react-icons/bi';
import { useNavigate, useParams } from 'react-router-dom';
import { PiCactusBold, PiPottedPlantBold } from 'react-icons/pi';
import { TbPlant2 } from 'react-icons/tb';
import LastArticles from '../../Components/LastArticles/lastArticles';
import { useEffect, useState } from 'react';
import { BlogProps } from '../../Redux/blogSlice';
import './showBlog.scss';

function ShowBlog() {

    useScrollToTop();
    const navigate = useNavigate();
    const [blogById, setBlogById] = useState<BlogProps | null>(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5500/blog/getBlogById/${id}`)
            .then(res => setBlogById(res.data));
    }, [id]);

    return (
        <div className="showBlog-container">
            {
                !blogById ?
                    <ShowBlogLoading />
                    :
                    <>
                        <div className="blog-right">
                            <img src={`http://localhost:5500/${blogById.imageCover}`} alt="" />
                            <h2>{blogById.blogTitle}</h2>
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
                    </>
            }
        </div>
    )
}

export default ShowBlog;