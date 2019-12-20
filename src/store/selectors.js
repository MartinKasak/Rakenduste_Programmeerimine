export const getToken = (store) => {
    return store.token;
};

export const getUser = (store) => {
    return store.user;
};

export const getCart = (store) => {
    if(!store.user) return [];
    return store.user.cart;
};

export const getItems = (store) => {
    return store.items;
}; 