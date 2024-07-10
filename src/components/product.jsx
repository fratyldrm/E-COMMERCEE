import React from 'react';
import '../css/Product.css';
import { useNavigate } from 'react-router-dom';

function Product({ product }) {
    const { id, price, image, title } = product;

    const navigate = useNavigate();

    return (
        <div className='card'>
            <img className="image" src={image} alt={title} />
            <div>
                <p style={{ textAlign: "center", height: 50 }}>{title}</p>
                <h3 style={{ textAlign: "center" }}>{price} ₺</h3>
            </div>
            <div>
                <button onClick={() => navigate(`/product-details/${id}`)} className='detail-button'>
                    Detayına Git
                </button>
            </div>
        </div>
    );
}

export default Product;
