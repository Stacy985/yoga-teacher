function openPopup(popup, param) {
  popup.classList.add(param[0]);
  popup.classList.remove(param[1]);
}
function closePopup(popup, param) {
  popup.classList.add(param[0]);
  popup.classList.remove(param[1]);
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("._header-burger")
    .addEventListener("click", function () {
      let popup = document.querySelector("._popup-menu");
      openPopup(popup, ["_header_nav_container", "_popup-menu"]);
    });

  document
    .querySelector("._popup-close")
    .addEventListener("click", function () {
      let popup = document.querySelector("._header_nav_container");
      closePopup(popup, ["_popup-menu", "_header_nav_container"]);
    });

  let url = document.location.href;
  let pattern = /[\/]{1}([a-z\.]+)$/;
  if (pattern.test(url)) {
    let fileName = pattern.exec(url);
    if (fileName[1] !== "index.php") {
      document.querySelector("._header_content").classList.add("_header_content-page");
    }
  }
});
