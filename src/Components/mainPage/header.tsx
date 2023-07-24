import HeaderImg from '../../assets/Images/poster.png';
import Animate from '../animate';
import './header.scss';

function Header() {
    return (
        <header className='header-container'>
            <div className='right'>
                <div className='header-info'>

                <h1>گیاهان سرسبز و زیبای زینتی خانه </h1>
                <h2> خانه خود را با گل  زیبا و آرامش بخش کنید </h2>
                </div>
            </div>
            <div className='left'>
                <div className='header-img'>                
                </div>
                <Animate />
            </div>
        </header>
    )
}

export default Header