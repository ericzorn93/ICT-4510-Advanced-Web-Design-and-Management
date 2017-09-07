<!DOCTYPE html>
<!--  Eric Zorn: Module 1 (Forms) ICT 4510 -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Eric Zorn ICT 4510 - Module 1 Project (Forms)</title>

    <!--Bootstrap CSS-->
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">

    <!--Custom CSS-->
    <link rel="stylesheet" type="text/css" href="css/styles.css">
</head>
<body id="indexBody">

<nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="index.php">Home</a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">Form Using HTML5 &amp; Bootstrap <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="submit.php" target="_blank">Submitted</a>
            </li>
        </ul>
    </div>
</nav>


<div class="container">
    <header>
        <h2 class="header-font">Eric Zorn ICT 4510 - Module 1 Project (Forms) w/ Bootstrap</h2>
    </header>

    <section class="first-section">
        <form action="submit.php" class="contact-form">
            <div class="form-group row">
                <label for="firstName" class="col-2 col-form-label">First Name:</label>
                <input type="text" class="form-control" name="name" id="firstName" placeholder="Please Enter Your First Name" required="" autofocus>
            </div>

            <div class="form-group row">
                <label for="lastName" class="col-2 col-form-label">Last Name:</label>
                <input type="text" class="form-control" name="name" id="lastName" placeholder="Please Enter Your Last Name" required="">
            </div>

            <div class="form-group row">
                <label for="email" class="col-2 col-form-label">Email:</label>
                <input type="email" class="form-control" name="email" id="email" placeholder="Please Enter Your Email Address" required="">
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
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
<script src="js/bootstrap.min.js"></script>

<script src="js/scripts.js"></script>
</body>
</html>