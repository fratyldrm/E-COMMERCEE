import React from 'react';
import './App.css';
import PageContainer from './container/PageContainer';
import Header from './components/Header';
import RouterConfig from './config/RouterConfig';
import Loading from './components/Loading';
import Drawer from '@mui/material/Drawer';
import { useSelector } from 'react-redux';

function App() {
  const { products, drawer } = useSelector((store) => store.basket);

  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
        <Drawer className='drawer' sx={{ padding: '20px' }} anchor='right' open={drawer}>
          {
            products && products.map((product) => (
              <div key={product.id} className='flex-row' style={{ padding: '20px' }}>
                <img style={{ marginRight: '5px' }} src={product.image} width={50} height={50} alt={product.title} />
                <p style={{ width: '320px', marginRight: '5px' }}>
                  {product.title} ({product.count})
                </p>
                <p>{product.price} TL</p>
              </div>
            ))
          }
        </Drawer>
      </PageContainer>
    </div>
  );
}

export default App;
