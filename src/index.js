function callServer(dataServer) {
  console.log(dataServer);

console.log(JSON.stringify(dataServer));//обрабатываем получившийся объект, и отправляем на сервер


}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submit").addEventListener("click", function () {
    let error = 0;
/*     let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let message = document.getElementById("message"); */

    let information = document.getElementById("information");
    let dataForServer = new Object();

    let obj = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").innerHTML,
    };
    for (key in obj) {
      if (obj[key] == "") {
        error++;
      } else {
        dataForServer[key] = obj[key];
      }
    }
/* 
    if (name.value != "") {
      dataForServer["name"] = name.value;
    } else {
      error++;
    }

    if (email.value != "") {
      dataForServer["email"] = email.value;
    } else {
      error++;
    }
    if (phone.value != "") {
      dataForServer["phone"] = phone.value;
    } else {
      error++;
    }
    if (message.innerHTML != "") {
      dataForServer["message"] = message.innerHTML;
    } else {
      error++;
    }
 */
    if (error == 0) {
      callServer(dataForServer);
      information.innerHTML = "Пожалуйста подождите";
      information.style.display = "block";
      this.disabled = true;
    } else {
      information.innerHTML = "Ошибка, исправьте форму";
      information.style.display = "block";
    }
  });

  /* 
fetch()
1. AJAX
2. sockets
 */
});
