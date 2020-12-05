let utils = (function utils() {
  function cleanProduct(Products) {
    var cleanedProducts = Products.data.map(function (e) {
      let newElement = {
        imageSrc: e.image[0].src,
        price: e.price,
        id: e.articleCode,
        title: e.title,
      };
      return newElement;
    });
    return cleanedProducts;
  }
  return {
    cleanProduct: cleanProduct,
  };
})();

export default utils;
