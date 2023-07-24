import Guidance from '../../Components/mainPage/guidance'
import Header from '../../Components/mainPage/header'
import ProductsMain from '../../Components/mainPage/productsMain'
import Purposes from '../../Components/mainPage/purposes'
import Say from '../../Components/mainPage/say'
import Service from '../../Components/mainPage/service'

function MianPage() {
    return (
        <>
            <Header />
            <Purposes />
            <Service />
            <Guidance />
            <ProductsMain/>
            <Say/>
        </>
    )
}

export default MianPage