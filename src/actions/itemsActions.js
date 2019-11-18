export const getItems = () => {
    return fetch("/api/v1/items")
    .then(res => {
    return res.json();
  });
}; 