import { useNavigate } from 'react-router-dom';
import { BsCalendarWeek } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';
import { BlogProps } from '../../Redux/blogSlice';
import './blogBox.scss';

function BlogBox({ item }: { item: BlogProps }) {

    const navigate = useNavigate();

    return (
        <div className="blog-box-container" onClick={() => navigate(`/blogs/${item._id}`)}>
            <div className='blog-img-wrapper'>
                <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/${item.imageCover}`} alt="" />
            </div>
            <div className='blog-box-info'>
                <div className='box-info-date-view'>
                    <div className='info-date-wrapper'>
                        <BsCalendarWeek />
                        <p>{item.date}</p>
                    </div>
                    <div className='info-date-wrapper'>
                        <AiOutlineEye />
                        <p>{item.viewCount}</p>
                    </div>
                </div>
                <h3>{item.blogTitle}</h3>
                <p className='box-info-desc'>{item.description}</p>
            </div>
        </div >
    )
}

export default BlogBox;