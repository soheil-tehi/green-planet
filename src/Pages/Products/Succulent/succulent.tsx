import useScrollToTop from '../../../Components/useScrollToTop';
import { RootState } from '../../../Redux/store';
import { useSelector } from 'react-redux';
import ProductBox, { PlantsProps } from '../../../Components/ProductBox/productBox';

function Succulent() {

    useScrollToTop();
    const { succulentList } = useSelector((state: RootState) => state.products);

    return (
        <>
            <div className='housePlants-container'>
                <h2>ساکولنت</h2>
                <p>خانواده‌های گیاهی بسیار زیادی وجود دارد که گونه‌های مختلف ساکولنت را شامل می‌شوند و از جمله‌ی آنها می‌توان به کاکتسه، کراسولاسه و آیزواسه اشاره کرد. ساکولنت‌ها در برابر خشکی به شدت مقاوم هستند و می‌توانند در بسیاری از زیستگاه‌هایی که سایر گیاهان رشد نخواهند کرد، زنده بمانند.

                    ساکولنت‌ها به طور کلی گیاهان جمع‌وجور و کوچکی هستند که به عنوان گیاهان آپارتمانی پرورش داده می‌شوند و نیاز به نگهداری کمی دارند. تخمین زده می‌شود که ۶۰ خانواده از انواع ساکولنت‌ها وجود دارد که برخی از انواع معروف آنها شامل آلوئه‌ورا و آگاوه (agave)، گل یشم (jade plants) و کالانکوئه (kalanchoes) می‌شود.ساکولنت‌ها گیاهانی هستند که می‌توان به راحتی آنها را تشخیص داد. اگرچه اغلب به اشتباه آنها را بخشی از جنس کاکتوس‌ها می‌دانند اما از بسیاری جهات با کاکتوس‌ها متفاوت هستند. </p>
                <div className='housePlants-wrapper'>
                    {
                        !!succulentList &&
                        succulentList.map((item: PlantsProps) => (
                            <ProductBox
                                item={item}
                                key={item._id} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Succulent