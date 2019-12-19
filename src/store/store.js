import {createStore} from "redux";

// const USER_SUCCESS = "USER_SUCCESS";
// const USER_REQUEST = "USER_REQUEST";
// const USER_FAILURE = "USER_FAILURE";

const ITEM_ADDED = "ITEM_ADDED";
// const ITEM_REMOVED = "ITEM_ADDED";

export const addItem = (item) => ({
    type: ITEM_ADDED,
    payload: item,
});

const initialState = {
    user: {
        email: null,
        _id: null,
        token: null,
    },
    cart: [
        //item
    ],
};

const reducer = (state = initialState, action) => {
    switch (action.type){
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

const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));



export default store; 