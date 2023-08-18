import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import './blogLoading.scss';

function blogLoading() {
    return Array(20).fill({}).map(() => {

        return (
            <div className="sk-blog-box-container" >
                <div className='sk-blog-img-wrapper'>
                    <Skeleton />
                </div>
                <div className='sk-blog-box-info'>
                    <div className='sk-box-info-date-view'>
                        <div className='sk-info-date-wrapper'>
                            <Skeleton />
                            <Skeleton />
                        </div>
                        <div className='sk-info-date-wrapper'>
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