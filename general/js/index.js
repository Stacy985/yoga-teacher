function workPopup(popup, param) {
  popup.classList.add(param[0]); //добавить
  popup.classList.remove(param[1]); //удалить
}

function createElementScheduleDays(direction){
  let numDay = 0;
  let countDay = 0;
  let start = 0;
  let stop = 4;
  let elem = 0;
  let allCountDay = scheduleDays.length - 1;
if (direction == undefined){
  // first start
  //дата время поставить
  //получить текущее время(рассчитать старт исходя из текущего дня)
  }
  else{
  let timingDay = document.querySelectorAll("._timing_day");
    if(direction == "left"){
    elem = parseInt(timingDay[0].dataset["id_day"], 10);
    start = elem - 5;
      if(start < 0){
      start = 0;
      }
    }
    else {
    elem = parseInt(timingDay[timingDay.length - 1].dataset["id_day"], 10);
    start = elem + 1;
      if (timingDay.length - 1 <= 3 )  {
        return;
      }
    }
    if(start > allCountDay){
      start = allCountDay - 5;
    }
  stop = start + 4;
  document.querySelector("._timing_info").innerHTML = "";

  }

console.log("start: "+start+" stop: "+stop);


  for(let day of scheduleDays) {
    if(numDay >= start && numDay <= stop){
    let dayElem = document.createElement("div");
    dayElem.classList.add("_timing_day");
    dayElem.dataset["id_day"] = numDay;

    let dayName = document.createElement("div");
    dayName.classList.add("_timing_day-name");
    dayName.textContent = day["title"];
    //присвоить класс если это текуший день

    let dayList = document.createElement("div");
    dayList.classList.add("_timing_day-list");

    if (scheduleLesson[day["listLesson"]]) {
      for (let less of scheduleLesson[day["listLesson"]]) {

        let lessElem = document.createElement("div");
        lessElem.classList.add("_timing_day-list-class");

        let lessDayTime = document.createElement("div");
        lessDayTime.classList.add("_timing_day-time");
        lessDayTime.textContent = less["time"];

        let lessDayType = document.createElement("div");
        lessDayType.classList.add("_timing_day-type");
        lessDayType.textContent = less["type"];

        let lessDayLocation = document.createElement("div");
        lessDayLocation.classList.add("_timing_day-location");
        lessDayLocation.textContent = less["location"];

        let lessDayComment = document.createElement("div");
        lessDayComment.classList.add("_timing_day-comment");
        lessDayComment.textContent = less["commemt"];

        lessElem.append(lessDayTime);
        lessElem.append(lessDayType);
        lessElem.append(lessDayLocation);
        lessElem.append(lessDayComment);

        dayList.append(lessElem);
      }
    }

    dayElem.append(dayName);
    dayElem.append(dayList);
    document.querySelector("._timing_info").append(dayElem);
    countDay++;
      if(countDay == 5){
      break;
      }
    }
    numDay++;
  }
}
document.addEventListener("DOMContentLoaded", function () {

  window.scheduleDays = [
    {
      title: "Понедельник1 15.04.2024",
      listLesson: "1",
      day: "20240415",
    },
    {
      title: "Воскресенье2 16.04.2024",
      listLesson: "2",
      day: "20240416",
    },
    {
      title: "Воскресенье3 16.04.2024",
      listLesson: "2",
      day: "20240416",
    },
    {
      title: "Воскресенье4 16.04.2024",
      listLesson: "2",
      day: "20240416",
    },
    {
      title: "Воскресенье5 16.04.2024",
      listLesson: "2",
      day: "20240416",
    },
    {
      title: "Воскресенье6 16.04.2024",
      listLesson: "2",
      day: "20240416",
    },
    {
      title: "Вторник7 16.04.2024",
      listLesson: "2",
      day: "20240416",
    },
    {
      title: "Вторник8 16.04.2024",
      listLesson: "2",
      day: "20240416",
    },
    
  ];

  window.scheduleLesson = {
    1: [
      {
        time: "12:30 - 14:00",
        location: "Бауманская",
        locationNum: 1,
        type: "Йогатерапия 2 уровень",
        commemt: "Замена",
      },
      {
        time: "15:00 - 16:30",
        location: "Беляево",
        locationNum: 2,
        type: "Йогатерапия 1 уровень",
        commemt: "урок",
      },
    ],
    2: [
      {
        time: "12:30 - 14:00",
        location: "Бауманская",
        locationNum: 1,
        type: "Йогатерапия 2 уровень",
        commemt: "Замена",
      },
      {
        time: "15:00 - 16:30",
        location: "Беляево",
        locationNum: 2,
        type: "Йогатерапия 1 уровень",
        commemt: "урок",
      },
    ],
  };
  createElementScheduleDays();

  document
    .querySelector("._timing-select-cont > select")
    .addEventListener("change", function () {
      console.log(this.value);
    });

  document
    .querySelector("._timing_button-left")
    .addEventListener("click", function () {
      console.log("left");
    });

  document
    .querySelector("._timing_button-right")
    .addEventListener("click", function () {
      console.log("right");
    });

/*     function scrollPage(direction) {
      const scrollDistance = 220; 
      const scrollDirection = direction === "left" ? -scrollDistance : scrollDistance;
      document.querySelector("._timing_info").scrollBy({
        top: 0,
        left: scrollDirection,
        behavior: "smooth" // Плавная прокрутка
      });
    } */
    
    document.querySelector("._timing_button-left").addEventListener("click", function () {
      createElementScheduleDays("left");
    });
    
    document.querySelector("._timing_button-right").addEventListener("click", function () {
      createElementScheduleDays("right");
    });


  document
    .querySelector("._header-burger")
    .addEventListener("click", function () {
      let popup = document.querySelector("._popup-menu");
      workPopup(popup, ["_header_nav_container", "_popup-menu"]);
    });

  document
    .querySelector("._popup-close")
    .addEventListener("click", function () {
      let popup = document.querySelector("._header_nav_container");
      workPopup(popup, ["_popup-menu", "_header_nav_container"]);
    });

  let url = document.location.href;
  let pattern = /[\/]{1}([a-z\.]+)$/;
  if (pattern.test(url)) {
    let fileName = pattern.exec(url);
    if (fileName[1] !== "index.php") {
      document
        .querySelector("._header_content")
        .classList.add("_header_content-page");
    }
  }
});
