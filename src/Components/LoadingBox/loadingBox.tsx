import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './loadingBox.scss';


function LoadingBox() {

    return (
        Array(20).fill({}).map(() => {
            return (
                <div className='sk-productBox-container'>
                    <div className='sk-product-img-wrapper'>
                        <Skeleton />
                    </div>
                    <div className='sk-productBox-info'>
                        <Skeleton />
                        <Skeleton />
                    </div>
                    <Skeleton />
                </div>
            )
        })

    )
}

export default LoadingBox;