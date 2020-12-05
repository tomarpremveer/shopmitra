const search = (function Search() {
  function addClass() {
    let searchElement = document.querySelector("#searchElement");
    searchElement.parentElement.parentElement.classList.add("loading");
  }
  function removeClass() {
    let searchElement = document.querySelector("#searchElement");
    searchElement.parentElement.parentElement.classList.remove("loading");
  }
  function afn() {}
  return {
    onFocusAddClass: addClass,
    onBlurRemoveClass: removeClass,
  };
})();

export default search;
