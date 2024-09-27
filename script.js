<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #header{
            font-size: 6.5vh;
            color: blue;
            position: absolute;
            top: 1vh;
            left: 21vw;
            user-select: none;
            text-shadow: 0.5vh -0.5vh lightblue;
            text-decoration: none;
        }
        .rectangle {
            height: 100vh;
            width: 20vw;
            background-color: #555;
            position: absolute;
        }
        #rightbox{
            left: 80vw;
        }
        #leftbox{
            left: 0vw;
        }
        #logo{
            position: absolute;
            top: 1vh;
            left: 65vw;
            height: 12vh;
            width: 12vw;
        }
    </style>
</head>
<body>
    <a href = "home.html" id = "header">MooSA Computing Olympiad</a>
    <a href = "home.html"><img src = "logo.png" id = "logo"></a>
    <div class = "rectangle" id = "rightbox"></div>
    <div class = "rectangle" id = "leftbox"></div>
</body>
</html>
