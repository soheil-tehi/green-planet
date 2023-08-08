import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { BlogProps } from '../../Redux/blogSlice';
import './lastArticles.scss';

//Fake Data
const articlesData = [
    { id: 1, title: "کتاب یادگیری بوت استرپ ", imgUrl: "https://www.mindinventory.com/blog/wp-content/uploads/2018/07/reactjs-gained.jpg" },
    { id: 2, title: "کتاب یادگیری بوت استرپ  ", imgUrl: "https://www.mindinventory.com/blog/wp-content/uploads/2018/07/reactjs-gained.jpg" },
    { id: 4, title: "کتاب یادگیری بوت استرپ ری بوت استرپ  ", imgUrl: "https://www.mindinventory.com/blog/wp-content/uploads/2018/07/reactjs-gained.jpg" },
    { id: 5, title: "کتاب یادگیری بوت استرپ  ", imgUrl: "https://www.mindinventory.com/blog/wp-content/uploads/2018/07/reactjs-gained.jpg" },
    { id: 6, title: "کتاب یادگیری بوت استرپ  ", imgUrl: "https://www.mindinventory.com/blog/wp-content/uploads/2018/07/reactjs-gained.jpg" },
]

function LastArticles() {

    const { blogList } = useSelector((state: RootState) => state.blogs);
    const navigate = useNavigate();

    return (
        <div className='lastArticles-wrapper'>
            <h3>آخرین مقالات</h3>
            {
                blogList.map((item: BlogProps) => (
                    <div onClick={() => navigate(`/blogs/${item._id}`)}>
                        <div className='lastArticles-item'>
                            <img src={`http://localhost:5500/${item.imageCover}`} alt="" />
                            <p>{item.blogTitle}</p>
                        </div>
                    </div>
                ))
            }
        </div>

    )
}

export default LastArticles;