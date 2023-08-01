import { useNavigate } from 'react-router-dom';
import { PiCactusBold, PiPottedPlantBold } from 'react-icons/pi';
import { TbPlant2 } from 'react-icons/tb';
import { RiArticleLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import './header.scss';

function Header() {
    const navigate = useNavigate();
    return (
        <header className='header-container'>
            <div className="header-info">
                <motion.h1
                    initial={{ x: 1000 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className='header-title'
                >به سبزینه خوش آمدید</motion.h1>
                <motion.div
                    initial={{ y: 200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                >
                    <h3>فروش آنلاین انواع گیاهان </h3>
                    <div className='header-product-info' onClick={() => navigate('/products/housePlants')}>
                        <PiPottedPlantBold />
                        <span>گیاهان آپارتمانی</span>
                    </div>
                    <div className='header-product-info' onClick={() => navigate('/products/succulent')}>
                        <TbPlant2 />
                        <span>ساکولنت ها</span>
                    </div>
                    <div className='header-product-info' onClick={() => navigate('/products/cactus')}>
                        <PiCactusBold />
                        <span>کاکتوس ها</span>
                    </div>
                    <h3>آموزش نگهداری از گیاهان</h3>
                    <div className='header-product-info' onClick={() => navigate('/blogs')}>
                        <RiArticleLine />
                        <span>مقالات</span>
                    </div>
                </motion.div>
            </div>
        </header>
    )
}

export default Header