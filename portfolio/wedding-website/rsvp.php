<!DOCTYPE html>
<html>
  <head>
    <link href='https://fonts.googleapis.com/css?family=Josefin+Slab: 600|Dancing+Script:400,700|Amaranth|Great+Vibes' rel='stylesheet' type='text/css'/>
    <link rel="stylesheet" href="style.css"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="app.js"></script>
  </head>
  <title>RSVP</title>
  <body>

    <div class="rsvp">
      <div class="header">
          <h1>Joseph and Catalina</h1>
          <h2>RSVP</h2>
      </div>
    </div>

    <div class="menu">
      <div class="container">
        <ul class="nav">
          <li><a href="en/en.php">Welcome</li>
          <li><a href="en/thewedding.html">Wedding</a></li>
          <li><a href="en/schedule.html">Schedule</a></li>
          <li><a href="en/accomodations.html">Accomodations</a></li>
          <li><a href="en/registry.html">Registry</a></li>
          <li><a href="rsvp">RSVP</a></li>
        </ul>
      </div>
    </div>

    <div class="invitebody">
      <div class="invite-active">
        <div class="wedding-card">
          <img class="card" src="invite.jpg"/>
        </div>
        <div class="invite-button">
          <button class="btn" id="view-menu" href="">View Menu</button>
        </div>
      </div>
      <div class="menu-active">
        <div class="wedding-card">
          <img class="card" src="Wedding_Menu.jpg"/>
        </div>
        <div class="invite-button">
            <button class="btn" id="view-invite" href="">View Invitation</button>
        </div>
      </div>      
    </div>

    <?php

      $servername = "mysql.joeandcata.com";
      $username = "joeandcata";
      $password = "Lacrimosa7";
      $dbname = "joeandcata_wedding";

      $nameErr = $attendErr = $foodErr = $success = "";
      $name = $attend = $food = "";

      if ($_SERVER["REQUEST_METHOD"] == "POST") {

        if (empty($_POST["name"])) {
          $nameErr = "*Name is required";
        } else {
          $name = test_input($_POST["name"]);
        }

        if (empty($_POST["attend"])) {
          $attendErr = "*Attendance option is required";
        } else {
          $attend = test_input($_POST["attend"]);
        }

        if ($_POST["attend"] == "yes" and empty($_POST["food"])) {
          $foodErr = "Don't forget to choose your entree!";
        } else {
          $food = test_input($_POST["food"]);
        }

        if ($nameErr == "" and $attendErr == "" and $foodErr == "") {
          $conn = mysqli_connect($servername, $username, $password, $dbname);
          if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
           }
          $sql = "INSERT INTO RSVP (name, attend, food) VALUES ('$name', '$attend', '$food')";
          if (mysqli_query($conn,$sql)) {
           $success = "<br>Your RSVP was submitted successfully! Continue to add the next guest in your party.";
           $name = $attend = $food = "";
          } else {  
          $success = "Error:" . $sql . "<br>" . mysqli_error($conn);
          }
          mysqli_close($conn);
        }
      }

      function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
      }
    ?>

    <div class="rsvpbox">
      <div class="rsvptext">
        <p id="help">Help</p>
        <div class="rsvpHeading">
          <h1>RSVP</h1>
        </div>
        <div class="rsvp-info">
          <p>Hello dear guest! Enter each of the guests in your party individually in the form below. For more information, click "help" on the top right corner.</p>
          <p style="text-align: center;"><i>~ Kindly respond by March 31st ~</i></p>
          <p style="text-align: center;"><span class="submitted"><?php echo $success;?></span><span class="error"><?php echo $foodErr;?></span></p>
        </div>
        <form id="rsvpForm" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>"> 
          <div class="rsvp-section">
            <label for="name"><b>First and Last Name: </b></label><br>
            <input type="text" name="name" class="form-field" id="name" value="<?php echo $name;?>" autocorrect=off><br><span class="error"><?php echo $nameErr;?></span>
          </div>
          <div class="rsvp-section">
            <div class="option-separate">
              <label for="attend"><b>Will you be attending?</b></label><br>
            </div>
            <div class="option-separate">
              <input type="radio" name="attend" id="attend-yes" value="yes">Joyfully Accepts<br>
            </div>
            <div class="option-separate">
              <input type="radio" name="attend" id="attend-no" value="no">Regretfully Declines<br>
            </div>
            <div class="option-separate">
             <span class="error"><?php echo $attendErr;?></span>
            </div>
          </div>
          <div class="rsvp-section" id="food-option">
            <div class="option-separate">
              <b>Choose your entr&eacutee:</b>
            </div>
            <div class="option-separate">
              <select name="food">
                 <option value="">Please choose an option...</option>
                 <option value="ribs">Braised Short Ribs, Mashed Potatoes</option>
                 <option value="salmon">Pan Seared Salmon, Parnsip Puree</option>
                 <option value="veggie">Corn Gnocchi</option>
                 <option value="kids">Chicken Strips and French Fries</option>
              </select><br>
            </div>
          </div>
          <button type="submit" class="btn">Submit RSVP</button>
        </form>
      </div>
    </div>

    <div class="help-background">
      <div class="help-box">
        <img id="close-icon" src="../close-icon.png"/>
          <div class="help-text">
          <h2>RSVP Instructions: </h2>
            <p>If you would prefer to RSVP by phone, text, or email, please contact Catalina at (928)965-1214, catalina.astengo@hotmail.com.</p>
            <p>Otherwise, please follow the instructions below: </p>
            <ol>
              <li>Enter your name in the entry box</li>
              <li>Click on your choice of attendance</li>
              <li>If you enter no, click "SUBMIT" and you're done</li>
              <li>If you enter yes, a drop-down menu with entree options for the wedding dinner will appear. Choose your entree and click "SUBMIT" (you can view a detailed version of the menu above the RSVP form)</li>
              <li>Enter the information for other guests in your party, if any, by repeating the steps above</li>
              <li>If you change your mind, please contact Catalina directly at (928)965-1214</li>
            </ol>
            <p> Thanks for visiting our website and using our online RSVP! We will still love you if you can't attend!</p>
          </div>

      </div>
    </div>

    <div class="footer">
      <div class="container">
        <p>&copy; Catalina Astengo 2015</p>
      </div>

          <?php if ($success != "" or $nameErr != "" or $attendErr != "" or $foodErr != "") {
          ?>
          <script>
             window.location="#rsvpForm";
          </script>

    <?php } ?>

    </div> 
  </body>
</html>