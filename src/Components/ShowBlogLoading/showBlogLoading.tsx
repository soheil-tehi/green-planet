import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import '../../Pages/ShowBlog/showBlog.scss';
function ShowBlogLoading() {
    return (
        <div className="blog-right">
            {/* <img src={`http://localhost:5500/${blogById.imageCover}`} alt="" /> */}
            {/* <h2>{blogById.blogTitle}</h2> */}
            <Skeleton />
            <Skeleton />

            <div className='right-info'>
                {/* <p>نویسنده : {"سبزینه"}</p>
            <p>به روز رسانی شده در : {blogById.date}</p> */}
                <Skeleton />
                <Skeleton />

            </div>
            <div className='read-time'>
                <Skeleton />
                <Skeleton />

            </div>
            {/* <div className='description' dangerouslySetInnerHTML={{ __html: blogById.description }} /> */}
            <Skeleton />

        </div>
    )
}

export default ShowBlogLoading;