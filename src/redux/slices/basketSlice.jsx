import { createSlice } from '@reduxjs/toolkit';

const getFromBasketToStorage = () => {
    if (localStorage.getItem("basket")) {
        return JSON.parse(localStorage.getItem("basket"));
    }
    return [];
}

const initialState = {
    products: getFromBasketToStorage(),
    drawer: false
}

const writeFromBasketToStorage = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket));
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const findProduct = state.products.find((product) => product.id === action.payload.id);
            if (findProduct) {
                // daha önce eklenmiştir
                const extractedProducts = state.products.filter((product) => product.id !== action.payload.id);
                findProduct.count += action.payload.count;
                state.products = [...extractedProducts, findProduct];
                writeFromBasketToStorage(state.products);
            } else {
                state.products = [...state.products, action.payload];
                writeFromBasketToStorage(state.products);
            }
        },

        setDrawer: (state) => {
            state.drawer = !state.drawer;
        }
    }
})

export const { addToBasket, setDrawer } = basketSlice.actions;

export default basketSlice.reducer;