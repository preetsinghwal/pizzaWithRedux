import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [
        {
            pizzaId: 1,
            name: "Cheese",
            unitPrice: 32,
            quantity: 2,
            totalPrice: 62
        }
    ]
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state,action){
            state.cart.push(action.payload)
        },
        deleteItem(state,action){
            //payload = pizzaId
            state.cart = state.cart.filter((item)=> item.pizzaId !== action.payload)
        },
        increaseItemQuantity(state,action){
            //payload = pizzaId
            const item = state.cart.find((item) => item.pizzaId === action.payload);
            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice;
        },
        decreaseItemQuantity(state,action){
            const item = state.cart.find((item) => item.pizzaId === action.payload);
            item.quantity--;
            item.totalPrice = item.quantity * item.unitPrice;
        },
        clearCart(state){
            state.cart = [];
        }
    }
});

export const {addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart} = cartSlice.actions;

export default cartSlice.reducer;