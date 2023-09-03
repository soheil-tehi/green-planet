import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { BlogProps } from '../../Redux/blogSlice';
import './lastArticles.scss';

function LastArticles() {

    const { blogList } = useSelector((state: RootState) => state.blogs);
    const navigate = useNavigate();


    return (
        <div className='lastArticles-wrapper'>
            <h3>آخرین مقالات</h3>
            {
                blogList.map((item: BlogProps) => (
                    <div key={item._id} onClick={() => navigate(`/blogs/${item._id}`)}>
                        <div className='lastArticles-item'>
                            <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/${item.imageCover}`} alt="" />
                            <p>{item.blogTitle}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default LastArticles;