import { useEffect, useState } from 'react';
import ProductBox, { PlantsProps } from '../../../Components/ProductBox/productBox'
import useScrollToTop from '../../../Components/useScrollToTop';
import './housePlants.scss';
import axios from 'axios';



function HousePlants() {

  useScrollToTop();

  const [housePlants, setHousePlants] = useState<PlantsProps[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5500/product/getAllProduct")
      .then(res => setHousePlants(res.data))

  }, [])

  return (
    <>
      <div className='housePlants-container'>
        <h2>گیاهان آپارتمانی</h2>
        <p>استفاده از گیاهان آپارتمانی سبز و شاداب در خانه‌های امروزی فضایی دلنشین، با انرژی و حس مثبت ایجاد می‌کند. سبزی گل‌ آپارتمانی هماهنگی زیادی با رنگ‌های به کار رفته در دکوراسیون داخلی منزل دارد و برگ‌‌های براق و پرفروغ آن جلوه بی‌نظیری به دکوراسیون خانه شما می‌بخشد. امروزه برخی از این گل‌ها پرطرفدارتر بوده و فروش بیشتری دارند. برای تهیه و نگهداری انواع گل‌های آپارتمانی باید با مشخصات و روش نگهداری انواع گیاهانی که قابلیت نگهداری در آپارتمان‌های امروزی را دارند آشنا شوید. در این مطلب از چیدانه با همراهی دیش‌گاردن نیروانا به معرفی 20 گل آپارتمانی از معروف‌ترین‌ها و پرطرفدار‌ترین‌ها و نحوه نگهداری از گیاهان آپارتمانی پرداخته و ویژگی‌های پرفروش‌ترین، ارزان‌ترین و گرانترین‌ گیاهان‌ آپارتمانی پرداخته می‌‌شود.</p>
        <div className='housePlants-wrapper'>
          {
            housePlants.length !== 0 &&
            housePlants.map((item:PlantsProps) => (
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