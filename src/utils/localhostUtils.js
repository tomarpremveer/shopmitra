const utils = (function localhost() {
  function remove(itemId) {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    let filteredItems = cartItems.filter(function filterFunction(item) {
      return item.id !== itemId;
    });
    localStorage.setItem("cartItems", JSON.stringify(filteredItems));
  }
  function add(item) {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    let exists = cartItems.filter((p) => {
      return p.id === item.id;
    });
    if (exists.length > 0) {
    } else {
      cartItems.push(item);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }
  return {
    addToLocalStorage: add,
    removeFromLocalStorage: remove,
  };
})();

export default utils;
