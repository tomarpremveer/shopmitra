export const addToLocalStorage = function add(item) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems.push(item);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeFromLocalStorage = function remove(itemId) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  let filteredItems = cartItems.filter(function filterFunction(item) {
    return item.id !== itemId;
  });
  localStorage.setItem("cartItems", JSON.stringify(filteredItems));
};
