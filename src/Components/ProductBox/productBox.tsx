import { useNavigate } from 'react-router-dom';
import TestImg from '../../assets/Images/del.jpg';
import './productBox.scss';

function ProductBox() {
    const navigate = useNavigate();

    return (
        <div className='productBox-container' onClick={() => navigate("/products/25")}>
            <div className='product-img-wrapper'>
                <img src={TestImg} alt="" />
            </div>
            <div className='productBox-info'>
                <h3>گندمی</h3>
                <p>30.000</p>
            </div>
            <button>مشاهده جزئیات</button>
        </div>
    )
}

export default ProductBox