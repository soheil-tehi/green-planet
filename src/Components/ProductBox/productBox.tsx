import { useNavigate } from 'react-router-dom';
import { separate } from '../../Pages/Cart/cart';
import { PlantsProps } from '../../Redux/productsSlice';
import './productBox.scss';

function ProductBox({ item }: { item: PlantsProps }) {

    const navigate = useNavigate();

    return (
        <div className='productBox-container' onClick={() => navigate(`/products/${item._id}`)}>
            <div className='product-img-wrapper'>
                <img src={`http://localhost:5500/${item.imageCover}`} alt="" />
            </div>
            <div className='productBox-info'>
                <h3>{item.productName}</h3>
                <p>{separate(item.price)}</p>
            </div>
            <button>مشاهده جزئیات</button>
        </div>
    )
}

export default ProductBox