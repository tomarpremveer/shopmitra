const search = (function () {
  function addClass() {
    let searchElement = document.querySelector("#searchElement");
    searchElement.parentElement.parentElement.classList.add("loading");
  }
  function removeClass() {
    let searchElement = document.querySelector("#searchElement");
    searchElement.parentElement.parentElement.classList.remove("loading");
  }
  return {
    onFocusAddClass: addClass,
    onBlurRemoveClass: removeClass,
  };
})();

export default search;
