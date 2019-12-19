import {
    ITEMS_SUCCESS, ITEM_ADDED, ITEM_REMOVED
} from "./actions.js";

const initialState = {
    user: {
        email: null,
        _id: null,
        token: null,
    },
    cart: [
        // item
    ],
    items: [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case ITEMS_SUCCESS: {
            return {
                ...state,
                items: action.payload,
            };
        }
        case ITEM_REMOVED: {
            return {
                ...state,
                cart: removeItemById(state.cart, action.payload)
            };
        }
        case ITEM_ADDED: {
            return {
                ...state,
                cart: state.cart.concat([action.payload])
            };
        }
        default: {
            return state;
        }
    }
};

const removeItemById = (items, _id) => {
    const index = items.findIndex(item => item._id === _id);
    if(index === -1) return items;
    const copy = items.slice();
    copy.splice(index, 1);
    return copy;
};