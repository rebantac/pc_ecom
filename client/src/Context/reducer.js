export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
        case "REMOVE_FROM_CART":
            return { ...state, cart: state.cart.filter(c => c.Id !== action.payload.Id) };
        case "UPDATE_QUANTITY":
            return {
                ...state,
                cart: state.cart.filter((c) =>
                    c.Id === action.payload.Id ? (c.qty = action.payload.qty) : c.qty
                ),
            };
        default:
            return state;
    }
}