import { useNavigate } from 'react-router-dom';
import { BsCalendarWeek } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';
import IMgText from '../../assets/Images/del2.jpg';
import './blogBox.scss';

function BlogBox() {

    const navigate = useNavigate();

    return (
        <div className="blog-box-container" onClick={() => navigate("/blogs/32")}>
            <div className='blog-img-wrapper'>
                <img src={IMgText} alt="" />
            </div>
            <div className='blog-box-info'>
                <div className='box-info-date-view'>
                    <div className='info-date-wrapper'>
                        <BsCalendarWeek />
                        <p>1402/40/20</p>
                    </div>
                    <div className='info-date-wrapper'>
                        <AiOutlineEye />
                        <p>14,120</p>
                    </div>
                </div>
                <h3>خواص گل بامبو در خانه</h3>
                <p className='box-info-desc'>آیا می دانید خواص گل بامبو چیست؟ چرا تعداد گل بامبو باید فرد آیا می دانید خواص گل بامبو چیست؟ چرا تعداد گل بامبو باید فرد آیا می دانید خواص گل بامبو چیست؟ چرا تعداد گل بامبو باید فردآیا می دانید خواص گل بامبو چیست؟ چرا تعداد گل بامبو باید فردآیا می دانید خواص گل بامبو چیست؟ چرا تعداد گل بامبو باید فردآیا می دانید خواص گل بامبو چیست؟ چرا تعداد گل بامبو باید فرد</p>
            </div>
        </div >
    )
}

export default BlogBox;