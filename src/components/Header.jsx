import React, { useState } from 'react';
import '../css/Header.css';
import { CiShoppingBasket, CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import Badge from '@mui/material/Badge';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function Header() {
    const [theme, setTheme] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { products } = useSelector((store) => store.basket);

    const changeTheme = () => {
        const root = document.getElementById("root");
        if (theme) {
            root.style.background = "black";
            root.style.color = "#fff";
        } else {
            root.style.background = "#fff";
            root.style.color = "black";
        }
        setTheme(!theme);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className='flex-row'>
                <img className='logo' src="../image/logoo.png" />
                <p className='logo-text'> FIRAT A.Ş</p>
            </div>
            <div className='flex-row'>
                <input className='serch-input' type='text' placeholder='bir şeyler ara' />
                <div>
                    {theme ? <FaMoon className='icon' onClick={changeTheme} /> : <CiLight className='icon' onClick={changeTheme} />}
                    <Badge onClick={() => dispatch(setDrawer())} badgeContent={products.length} color="error">
                        <CiShoppingBasket className='icon' style={{ marginRight: 6 }} />
                    </Badge>

                </div>


            </div>
        </div>
    )
}

export default Header;