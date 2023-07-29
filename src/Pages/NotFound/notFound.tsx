import { useNavigate } from 'react-router-dom';
import { PiPottedPlantFill } from 'react-icons/pi';
import NotFoundImg from '../../assets/Images/img-404.jpg';
import './notFound.scss';
import useScrollToTop from '../../Components/useScrollToTop';

function NotFound() {
    const navigate = useNavigate();
    useScrollToTop();

    return (
        <div className='notFound-container'>
            <div className='img-wrapper'>
                <img src={NotFoundImg} alt="not Found" />
            </div>
            <h2 style={{ marginTop: "30px" }}>باعرض پوزش صفحه ای که دنبال آن بودید یافت نشد!</h2>
            <button className='btn-products' onClick={() => navigate("/products")}>
                <PiPottedPlantFill />
                محصولات</button>
        </div>
    )
}

export default NotFound;