<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="general/style/css/app.css?fef=<?php echo mt_rand(0, 99999); ?>">
    <title><?php echo $_TITLE; ?></title>
    <script src="general/js/index.js?fef=<?php echo mt_rand(0, 99999); ?>"></script>
</head>

<body>

    <header class="_header">
        <div class="_header_logo"><a href="index.php"><img class="_header_img" src="general/img/FT_Yoga.svg" alt=""></a></div>
        <div class="_header_container">
            <nav class="_header_nav">
                <div class="_header-burger"><img src="general/img/burger.svg" alt=""></div>
                   <!-- _header_nav_container-->

                   <div class="_popup-menu">
                        <div class="_popup-close"><img src="general/img/close.svg" alt=""></div>
                        <ul>
                        <li class="_header_nav-list"><a href="#about" class="_header_list_link">Обо мне</a></li>
                        <li class="_header_nav-list"><a href="#" class="_header_list_link">Классы</a></li>
                        <li class="_header_nav-list"><a href="record.php" class="_header_list_link _record">Записаться</a></li>
                        <li class="_header_nav-list"><a href="#" class="_header_list_link">Отзывы</a></li>
                        <li class="_header_nav-list"><a href="#" class="_header_list_link">Контакты</a></li>
                        </ul>
                    </div>
                </div>
         
            </nav>
        </div>
        <div class="_header_content">
            <h1 class="_header_title">Здоровье</h1>
            <h2 class="_header_subtitle">через йогу</h2>
            <div class="_header_batton-info">
                <p class="_header_parag">Скидка на первое занятие 50%</p>
                <a href="#"><img class="_header_button" src="general/img/Button.svg" alt=""></a>
            </div>
        </div>
    </header>
    <main class="_main">
        <div class="_about">
            <div class="_about-img"><img src="general/img/about.svg" alt=""></div>
            <div class="_about-info">
                <h2 class="_about-title"><a href="" name="about"></a> Обо мне:</h2>
                <p class="_about-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
        </div>
    </main>

    <?php echo $_BODY; ?>
    <div class="_timing">
        <div class="_timing-select">
            <h2>Расписание</h2>
            <div class="_timing-select-cont">
                <select name="" id="">
                 <option value="0">Местоположение</option>
                 <option value="1">Бауманская</option>
                 <option value="2">Беляево</option>
                </select>   
            </div>
            <div class="">
            <button class="_timing-button-left"><img src="general/img/arrow.svg" alt=""></button>
            <button class="_timing-button-right"><img src="general/img/button_arrow_left.svg" alt=""></button>
            </div>
        </div>
        <div class="_timing-info">
            <div class="_timing-day">
                <div class="_timing-day-name">Суббота</div>
                <div class="_timing-day-list">
                    <div class="_timing-day-list-class">
                        <div class="_timing-day-time">13:00 - 14:30</div>
                        <div class="_timing-day-type">Йогатерапия 2 уровень</div>
                        <div class="_timing-day-location">Бауманская</div>
                        <div class="_timing-day-comment">замена</div>
                    </div>
                    <div class="_timing-day-list-class"></div>
                    <div class="_timing-day-list-class"></div>
                </div>
            </div>
            <div class="_timing-day">
                <div class="_timing-day-name">Воскресенье</div>
                <div class="_timing-day-list">
                </div>
            </div>
            <div class="_timing-day">Суббота</div>
            <div class="_timing-day">Суббота</div>
            <div class="_timing-day">Суббота</div>
        </div>
    </div>
</body>
</html>