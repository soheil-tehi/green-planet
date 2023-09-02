import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import '../ProductBox/productBox.scss';


function LoadingBox() {

    return (
        Array(20).fill({}).map(() => {
            return (
                <div className='productBox-container' style={{ height: "250px" }}>
                    <div className='product-img-wrapper'>
                        <Skeleton />
                    </div>
                    <div className='productBox-info'>
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