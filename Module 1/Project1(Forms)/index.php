<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Eric Zorn ICT 4510 - Module 1 Project (Forms)</title>

    <!--Bootstrap CSS-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">

    <!--Custom CSS-->
    <link rel="stylesheet" type="text/css" href="css/styles.css">
</head>
<body>


    <div class="container">
        <header>
            <h2 class="header-font">Eric Zorn ICT 4510 - Module 1 Project (Forms) w/ Bootstrap</h2>
        </header>

        <section class="first-section">
            <form action="submit.php" class="contact-form">
                <div class="form-group row">
                    <label for="firstName" class="col-2 col-form-label">First Name:</label>
                    <input type="text" class="form-control" name="name" id="firstName" placeholder="Please Enter Your First Name" required autofocus>
                </div>

                <div class="form-group row">
                    <label for="lastName" class="col-2 col-form-label">Last Name:</label>
                    <input type="text" class="form-control" name="name" id="lastName" placeholder="Please Enter Your Last Name" required>
                </div>

                <div class="form-group row">
                    <label for="email" class="col-2 col-form-label">Email:</label>
                    <input type="email" class="form-control" name="email" id="email" placeholder="Please Enter Your Email Address" required>
                </div>

                <div class="form-group row">
                    <label for="phone" class="col-2 col-form-label">Phone Number:</label>
                    <input type="tel" class="form-control" name="phone" id="phoneNumber" placeholder="Please Enter Your Phone Number">
                </div>

                <aside>
                 <h4>What is your best way of being contacted?</h4>
                </aside>

                <div class="form-group row">
                    <label for="email" class="col-2 col-form-label">Email:</label>
                    <input type="radio" class="form-control" name="radio" id="email" placeholder="Yes">
                </div>

                <div class="form-group row">
                    <label for="phone" class="col-2 col-form-label">Phone:</label>
                    <input type="radio" class="form-control" name="radio" id="phone" placeholder="Yes">
                </div>

                <button type="submit" id="submitButton" class="btn btn-success">Submit Form</button>
                <button type="reset" id="resetButton" class="btn btn-danger">Reset Form</button>
            </form>

            <br/><br/>
            <div class="jumbotron">
                <h4>Key for Input Styles</h4>
                <ul>
                    <li>Blue Border: Required Input</li>
                    <li>Green Border with Light Grey Background &amp; Green Type: Focused Input</li>
                    <li>Red Solid Border: Invalid Inputs</li>
                </ul>
            </div>
        </section>
    </div>



    <!--Scripts-->
    <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>

    <script src="js/scripts.js"></script>
</body>
</html>