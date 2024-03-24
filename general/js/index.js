function openPopup(popup, param) {
  popup.classList.add(param[0]);
  popup.classList.remove(param[1]);
}
function closePopup(popup, param) {
  popup.classList.add(param[0]);
  popup.classList.remove(param[1]);
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("._header-burger").addEventListener("click", function () {
    let popup = document.querySelector("._popup-menu");
    openPopup(popup, ["_header_nav_container", "_popup-menu"]);
    });

  document.querySelector("._popup-close").addEventListener("click", function () {
    let popup = document.querySelector("._header_nav_container");
    closePopup(popup, ["_popup-menu", "_header_nav_container"]);
    });
});

//id="header_nav_container"

/* document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("close").addEventListener("click", function(){
        this.style.display = "none"; 
        document.getElementById("header_nav_container").style.display = "none";
        
    })
    document.getElementById("header-burger").addEventListener("click", ()=>{
        document.getElementById("close").style.display = "block";
        document.getElementById("header_nav_container").style.display = "block";
    })
}) 

}*/

//  window.addEventListener("keydown", keyHandlerEsc);
//window.addEventListener("mousedown", closeByClickOverlay)
