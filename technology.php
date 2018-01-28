<!DOCTYPE html>
<html>
    <head>
        <title>Technology</title>
        <link rel="stylesheet" href="css/ucss.css" type="text/css">
        <script>
            current = "1";
            function setPage(id)
            {
                if(id == current)return;
                current = id;
                document.getElementById('frame_div').innerHTML = '<iframe src = "pages/page'+ id +'.php" ></iframe>'
            }
        </script>
        <?php
            require "nav_bar.html";
        ?>
    </head>

    <body class="img_body">
        <div class="tec_div">
            <div>
                <ul class="side_nav_ul">
                    <li onclick="setPage('1')"><img ><p>Who we are</p></li>
                    <li onclick="setPage('2')"><img ><p>Mission</p></li>
                    <li onclick="setPage('6')"><img ><p>Vision</p></li>
                    <li onclick="setPage('3')"><img ><p>Why SELF</p></li>
                    <li onclick="setPage('4')"><img ><p>The Problem & Solution</p></li>
                    <li onclick="setPage('5')"><img ><p>Road Map</p></li>
                </ul>
            </div>
            <div class="frame_div" id="frame_div">
                <iframe src = "pages/page1.php" ></iframe>
            </div>
        </div>
    </body>
</html>