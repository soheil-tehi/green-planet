import { useDispatch } from 'react-redux';
import ProductsMain from '../../Components/mainPage/productsMain'
import useScrollToTop from '../../Components/useScrollToTop';
import { getAllProducts, useGetAppProductsQuery } from '../../Redux/productsSlice';

function Products() {

    useScrollToTop();
    // const { data } = useGetAppProductsQuery('/getAllProduct');
    // const dispatch = useDispatch();
    // dispatch(getAllProducts(data));

    return (
        <div style={{ marginTop: "100px" }}>
            <ProductsMain />
        </div>
    )
}

export default Products;