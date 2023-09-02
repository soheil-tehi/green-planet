import { useEffect, useState } from 'react'
import Customers from '../../Components/mainPage/customers'
import Guidance from '../../Components/mainPage/guidance'
import Header from '../../Components/mainPage/header'
import ProductsMain from '../../Components/mainPage/productsMain'
import Purposes from '../../Components/mainPage/purposes'
import Say from '../../Components/mainPage/say'
import Service from '../../Components/mainPage/service'
import useScrollToTop from '../../Components/Common/useScrollToTop'

function MianPage() {
    useScrollToTop();
    const [isMobile, setIsMobile] = useState(false);



    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 600);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <Header />
            <Purposes />
            <Service />
            <Guidance />
            <ProductsMain />
            <Say />
            {!isMobile && <Customers />}
        </>
    )
}

export default MianPage