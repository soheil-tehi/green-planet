import { useDispatch } from 'react-redux';
import BlogBox from '../../Components/BlogBox/blogBox';
import useScrollToTop from '../../Components/useScrollToTop';
import { BlogProps, getAllblogs, useGetAppBlogsQuery } from '../../Redux/blogSlice';
import './blogs.scss';

function Blogs() {

    useScrollToTop();
    const { data } = useGetAppBlogsQuery("/getblogs");
    const dispatch = useDispatch();
    dispatch(getAllblogs(data));

    return (
        <div className="blogs-container">
            {
                data &&
                data.map((item: BlogProps) => (
                    <BlogBox item={item} key={item._id} />
                ))
            }
        </div>
    )
}

export default Blogs;