import ProductBox from '../../../Components/ProductBox/productBox'
import useScrollToTop from '../../../Components/Common/useScrollToTop';
import { PlantsProps, useGetAppHousePlantsQuery, } from '../../../Redux/productsSlice';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import './housePlants.scss';
import '../../../Components/ProductBox/productBox.scss';
import LoadingBox from '../../../Components/LoadingBox/loadingBox';
function HousePlants() {

  useScrollToTop();
  const { data, isLoading } = useGetAppHousePlantsQuery('/getHousePlants');

  return (
    <>
      <div className='housePlants-container'>
        <h2>گیاهان آپارتمانی</h2>
        <p>استفاده از گیاهان آپارتمانی سبز و شاداب در خانه‌های امروزی فضایی دلنشین، با انرژی و حس مثبت ایجاد می‌کند. سبزی گل‌ آپارتمانی هماهنگی زیادی با رنگ‌های به کار رفته در دکوراسیون داخلی منزل دارد و برگ‌‌های براق و پرفروغ آن جلوه بی‌نظیری به دکوراسیون خانه شما می‌بخشد. امروزه برخی از این گل‌ها پرطرفدارتر بوده و فروش بیشتری دارند. برای تهیه و نگهداری انواع گل‌های آپارتمانی باید با مشخصات و روش نگهداری انواع گیاهانی که قابلیت نگهداری در آپارتمان‌های امروزی را دارند آشنا شوید. در این مطلب از چیدانه با همراهی دیش‌گاردن نیروانا به معرفی 20 گل آپارتمانی از معروف‌ترین‌ها و پرطرفدار‌ترین‌ها و نحوه نگهداری از گیاهان آپارتمانی پرداخته و ویژگی‌های پرفروش‌ترین، ارزان‌ترین و گرانترین‌ گیاهان‌ آپارتمانی پرداخته می‌‌شود.</p>
        <div className='housePlants-wrapper'>
          {
            isLoading ?
              <LoadingBox />
              :
              data.map((item: PlantsProps) => (
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

export default HousePlants;
