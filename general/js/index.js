function workPopup(popup, param) {
  popup.classList.add(param[0]); //добавить
  popup.classList.remove(param[1]); //удалить
}

document.addEventListener("DOMContentLoaded", function () {
  let scheduleDays = [
    {
      title: "Понедельник 15.04.2024",
      listLesson: "1",
      today:"20240415"
    },
    {
      title: "Воскресенье 16.04.2024",
      listLesson: "2",
      today:"20240416"
    },
  ];

  let scheduleLesson = {
    1: [
      {
        time: "12:30 - 14:00",
        location: "Бауманская",
        locationNum : 1,
        type: "Йогатерапия 2 уровень",
        commemt: "Замена",
      },
      {
        time: "15:00 - 16:30",
        location: "Беляево",
        locationNum : 2,
        type: "Йогатерапия 1 уровень",
        commemt: "урок",
      },
    ],
  2: [
      {
        time: "12:30 - 14:00",
        location: "Бауманская",
        locationNum : 1,
        type: "Йогатерапия 2 уровень",
        commemt: "Замена",
      },
      {
        time: "15:00 - 16:30",
        location: "Беляево",
        locationNum : 2,
        type: "Йогатерапия 1 уровень",
        commemt: "урок",
      },
    ],
  };
  let timegInfo = document.querySelector("._timing_info");
  for (let day of scheduleDays) {
    let dayElem = document.createElement("div");
    dayElem.classList.add("_timing_day");

    let dayName = document.createElement("div");
    dayName.classList.add("_timing_day-name");
    dayName.textContent = day["title"];

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
    timegInfo.append(dayElem);
  }
  document.querySelector("._timing-select-cont > select").addEventListener("change", function () {
      console.log(this.value);
    });

    document.querySelector("._timing_button-left").addEventListener("click", function () {
      console.log("left");
    });

    document.querySelector("._timing_button-right").addEventListener("click", function () {
      console.log("right");
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
