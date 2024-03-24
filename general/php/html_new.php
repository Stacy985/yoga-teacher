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
        <div class="_header_logo"><img class="_header_img" src="general/img/FT_Yoga.svg" alt=""></div>
        <div class="_header_container">
            <nav class="_header_nav">
                <div class="_header-burger"><img src="general/img/burger.svg" alt=""></div>
                   <!-- _header_nav_container-->

                   <div class="_popup-menu">
                        <div class="_popup-close"><img src="general/img/close.svg" alt=""></div>
                        <ul>
                        <li class="_header_nav-list"><a href="#" class="_header_list_link">Обо мне</a></li>
                        <li class="_header_nav-list"><a href="#" class="_header_list_link">Классы</a></li>
                        <li class="_header_nav-list"><a href="record.php" class="_header_list_link">Записаться</a></li>
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

    <?php echo $_BODY; ?>
</body>
</html>