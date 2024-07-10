import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setSelectedProduct } from '../redux/slices/productSlice';
import { addToBasket } from '../redux/slices/basketSlice';
import '../css/ProductDetail.css'; // CSS dosyasını ekleyin

const ProductDetail = () => {
    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product);
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1); // Ürün miktarı için state

    useEffect(() => {
        getProductById();
    }, [id, products]);

    const getProductById = () => {
        const product = products.find((product) => product.id === Number(id));
        if (product) {
            dispatch(setSelectedProduct(product));
        }
    }

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const addbasket = () => {
        if (selectedProduct) {
            dispatch(addToBasket({ ...selectedProduct, count: quantity }));
        }
    };

    if (!selectedProduct) {
        return <div>Loading...</div>;
    }

    const { price, image, title, description } = selectedProduct; // Burada destructure işlemi yapılmalı

    return (
        <div className="product-detail-container">
            <div className="product-image">
                <img src={image} alt={title} />
            </div>
            <div className="product-info">
                <h1>{title}</h1>
                <p className="product-description">{description}</p>
                <p className="product-price">{price} ₺</p>

                <div className="quantity-container">
                    <button className="quantity-btn" onClick={decreaseQuantity}>-</button>
                    <span className="quantity">{quantity}</span>
                    <button className="quantity-btn" onClick={increaseQuantity}>+</button>
                </div>

                <button onClick={addbasket} className="add-to-cart-btn">Sepete Ekle</button>
            </div>
        </div>
    );
}

export default ProductDetail;
