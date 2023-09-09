import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import '../../Pages/ShowBlog/showBlog.scss';

function ShowBlogLoading() {
    return (
        <div className="blog-right">
            <Skeleton style={{ width: "650px", height: "200px" }} />
            <div className='right-info'>
            </div>
            <div className='read-time'>
                <Skeleton />
                <Skeleton />
            </div>
            <Skeleton style={{ width: "300px" }} />
            <Skeleton style={{ width: "650px" }} />
            <Skeleton style={{ width: "650px" }} />
            <Skeleton style={{ width: "650px" }} />
            <Skeleton style={{ width: "650px" }} />
        </div>
    )
}

export default ShowBlogLoading;