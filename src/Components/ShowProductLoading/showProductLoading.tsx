import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import '../../Pages/ShowProduct/showProduct.scss';
function ShowProductLoading() {
    return (
        <>
            <div className="showProduct-container">

                <div className="showProduct-info">
                    <div className="info-right">
                        <Skeleton />
                    </div>
                    <div className="info-middle">
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </div>
                </div>
                <div className="info-left">
                    <div className='info-left-replece-free'>
                        <Skeleton />
                    </div>
                    <div className='info-left-replece-free'>
                        <Skeleton />
                    </div>
                </div>
                <div className="showProduct-description">
                    <div className='desc-img-wrapper'>
                        <Skeleton />
                    </div>
                    <div className='desc-data-wrapper'>
                        <Skeleton />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShowProductLoading