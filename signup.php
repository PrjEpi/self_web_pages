<!DOCTYPE html>
<html>

<head>
    <title>Sign up</title>
    <link rel="stylesheet" href="css/ucss.css" type="text/css">
    <style>
        .div_text_input {
            background-color: rgba(255, 255, 255, 0.1);
            margin-left: 20%;
            margin-right: 20%;
            padding: 20px;
            padding-left: 30px;
            margin-top: 5px;
        }

        .div_text_input p2 {
            color:#FFFFFF;
        }

        .div_text_input input {
            color: white;
            background-color: rgba(0, 0, 0, 0.01);
            border: none;
            font-size: 18px;
            margin-left: 10px;
        }
    </style>
    <?php
    require "nav_bar.html";
    ?>
</head>

<body class="img_body">
    <div class="root_div" style="margin-top:18%; padding-left:12%; padding-right:15%">
        <h1>Sign up for the selfmedia</h1>
        <p>be the first to hear news and developments from selfmedia</p>
        <form action="">
            <div style="padding-top:5%">
                <div class="div_text_input">
                    <p2>First Name:</p2>
                    <input type="text" name="firstname" value="" size="45">
                </div>
                <div class="div_text_input">
                    <p2>Last Name:</p2>
                    <input type="text" name="firstname" value="" size="45">
                </div>
                <div class="div_text_input">
                    <p2>Email:</p2>
                    <input type="text" name="firstname" value="" size="45">
                    </div>
                    <button type="submit" style="margin-right:20%;float:right;margin-top:25px">Submit</button>
                </div>
        </form>
    </div>
</body>

</html>