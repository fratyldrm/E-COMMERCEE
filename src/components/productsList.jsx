import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice';
import Product from './product';


function ProductsList() {
    const dispatch = useDispatch();

    const { products } = useSelector((store) => store.product);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]); // dispatch bağımlılık dizisine eklendi

    return (
        <div className='flex-row' style={{ flexWrap: "wrap", marginTop: 25 }}>
            {products && products.length > 0 ? ( // products.length kontrolü eklendi
                products.map((product) => (
                    <Product key={product.id} product={product} />
                ))
            ) : (
                <p>Ürün bulunamadı.</p> // Ürün bulunamadığında gösterilecek mesaj
            )}
        </div>
    );
}

export default ProductsList;