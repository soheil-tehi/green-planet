import { useDispatch } from 'react-redux';
import BlogBox from '../../Components/BlogBox/blogBox';
import useScrollToTop from '../../Components/Common/useScrollToTop';
import { BlogProps, getAllblogs, useGetAppBlogsQuery } from '../../Redux/blogSlice';
import './blogs.scss';
import BlogLoading from '../../Components/BlogLoading/blogLoading';

function Blogs() {

    useScrollToTop();
    const { data, isLoading } = useGetAppBlogsQuery("/getblogs");
    const dispatch = useDispatch();
    dispatch(getAllblogs(data));

    return (
        <div className="blogs-container">
            {
                isLoading ?
                    <BlogLoading />
                    :
                    data.map((item: BlogProps) => (
                        <BlogBox item={item} key={item._id} />
                    ))
            }
        </div>
    )
}

export default Blogs;