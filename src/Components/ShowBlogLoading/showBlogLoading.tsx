import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import '../../Pages/ShowBlog/showBlog.scss';

function ShowBlogLoading() {
    return (
        <div className="blog-right">
            <Skeleton />
            <Skeleton />
            <div className='right-info'>
                <Skeleton />
                <Skeleton />
            </div>
            <div className='read-time'>
                <Skeleton />
                <Skeleton />
            </div>
            <Skeleton />
        </div>
    )
}

export default ShowBlogLoading;