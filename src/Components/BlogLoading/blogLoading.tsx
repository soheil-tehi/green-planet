import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import '../BlogBox/blogBox.scss';

function blogLoading() {
    return Array(20).fill({}).map(() => {

        return (
            <div className="blog-box-container" style={{ height: "350px" }}>
                <div className='blog-img-wrapper'>
                    <Skeleton />
                </div>
                <div className='blog-box-info'>
                    <div className='box-info-date-view'>
                        <div className='info-date-wrapper'>
                            <Skeleton />
                            <Skeleton />
                        </div>
                        <div className='info-date-wrapper'>
                            <Skeleton />
                            <Skeleton />
                        </div>
                    </div>
                    <Skeleton />
                    <Skeleton />
                </div>
            </div >
        )
    })
}

export default blogLoading