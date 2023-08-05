import React from 'react'
import useScrollToTop from '../../../Components/useScrollToTop';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Redux/store';
import ProductBox, { PlantsProps } from '../../../Components/ProductBox/productBox';

function Cactus() {

  useScrollToTop();

  const { cactusList } = useSelector((state: RootState) => state.products)

  return (
    <>
      <div className='housePlants-container'>
        <h2>کاکتوس</h2>
        <p>انواع کاکتوس در جهان در ابعاد و گونه‌های مختلفی پرورش می‌یابند.

          کاکتوس‌ها گروهی از گیاهان هستند که به دلیل تنوع و مقاومت آنها در شرایط گرم و بیابانی بسیار در جهان شهرت دارند.

          شاید کاکتوس تنها گروهی باشد که برای هر نوع سلیقه ای پیشنهادی جذاب داشته باشد.

          چون امروزه از طریق پیوند کاکتوس‌ها با یکدیگر شکل‌های بسیار زیبا و منحصر به فرد در این گونه شناخته شده، مشاهده می‌شود.

          برای نگهداری کاکتوس در منزل یا محیط کار شرط اصلی داشتن نور اشت.

          اگر در شرایط محیطی خود از نور مناسب کاکتوس بهره‌مند هستید، بهتر است از این گروه زیبا برای خود یک کلکسیون تهیه کنید

          چراکه با داشتن چند نمونه کاکتوس متفاوت و یادگیری قلمه زدن کاکتوس ، پیوند کاکتوس ، تکثیر کاکتوس با بذر و نگهداری کاکتوس در منزل می‌توانید یک مجموعه زیبا و چشم نواز از این گونه زیبا تهیه کنید.</p>
        <div className='housePlants-wrapper'>
          {
            !!cactusList &&
            cactusList.map((item: PlantsProps) => (
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

export default Cactus;