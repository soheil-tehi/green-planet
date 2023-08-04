import { useNavigate } from 'react-router-dom';
import TestImg from '../../assets/Images/del.jpg';
import './productBox.scss';

export interface PlantsProps {
    _id: string,
    productName: string,
    price: number,
    heightPlant: number,
    heightPot: number,
    imageCover: string,
    imageDescription: string,
    description: string,
}

function ProductBox({ item }: { item: PlantsProps }) {

    const navigate = useNavigate();

    return (
        <div className='productBox-container' onClick={() => navigate("/products/25")}>
            <div className='product-img-wrapper'>
                <img src={`http://localhost:5500/${item.imageCover}`} alt="" />
            </div>
            <div className='productBox-info'>
                <h3>{item.productName}</h3>
                <p>{item.price}</p>
            </div>
            <button>مشاهده جزئیات</button>
        </div>
    )
}

export default ProductBox