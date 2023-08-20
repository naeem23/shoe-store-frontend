import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const item = state.cartItems.find(
                (p) => p.id === action.payload.id
            );
            if (item) {
                item.quantity++;
                const newPrice = item.pricePerUnit * item.quantity;
                item.price = newPrice.toFixed(2);
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },

        updateCart: (state, action) => {
            state.cartItems = state.cartItems.map((item) => {
                if (item.id === action.payload.id) {
                    if (action.payload.key === 'quantity') {
                        const newPrice = item.pricePerUnit * action.payload.val;
                        item.price = newPrice.toFixed(2);
                    }
                    return {
                        ...item,
                        [action.payload.key]: action.payload.val,
                    };
                }
                return item;
            });
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload.id
            );
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToCart, updateCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
