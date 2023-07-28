import TestImg from '../../assets/Images/del.jpg';
import './productBox.scss';

function ProductBox() {
    return (
        <div className='productBox-container'>
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