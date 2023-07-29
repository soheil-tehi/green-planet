import ProductsMain from '../../Components/mainPage/productsMain'
import useScrollToTop from '../../Components/useScrollToTop';

function Products() {

    useScrollToTop();

    return (
        <div style={{ marginTop: "100px" }}>
            <ProductsMain />
        </div>
    )
}

export default Products;