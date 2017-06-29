<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script type="text/javascript" src="js/jquery-3.2.0.min.js"></script>
	<script type="text/javascript" src="js/jquery-ui.min.js"></script>
  <script type="text/javascript" src="js/app.js"></script>
	<link rel="stylesheet" href="css/semantic.min.css"/>
  <link rel="stylesheet" href="css/styles.css"/>
</head>
<body>

<div class="ui segments" id="wrapper">
  <div class="ui horizontal segments" id="main">
    <div class="ui segment" style="width: 1vw;" id="score">
        <div class="ui statistic h-center">
          <div class="value" id="score_val">
            0
          </div>
          <div class="label">
            Runs
          </div>
        </div>
    </div>
    <div class="ui segment" style="width: 1vw;" id="wickets">
        <div class="ui statistic h-center" >
          <div class="value"  id="wickets_val" style="color: #fff;">
            0
          </div>
          <div class="label" style="color: #fff;">
            Wickets
          </div>
        </div>
    </div>
  </div>
  <div class="ui horizontal segments">
    <div class="ui segment" style="width: 1vw;" id="overs">
      <div class="ui statistic h-center" >
        <div class="value"  id="overs_val" style="color: #fff;">
          0.0
        </div>
        <div class="label" style="color: #fff;">
          Overs
        </div>
      </div>
    </div>
    <div class="ui segment" style="width: 1vw;" id="batsmen">

        <div class="ui vertical segments" style="border: none; box-shadow: none; text-align: left;">
          <div class="ui segment" id="batsman1" style="height:15.5vh;">
            <h2 class="ui header" style="font-size: 6vh; display: inline-block;">
            <i class="asterisk icon"></i>
              <p id="bats1name">Mathake</p>
              
            </h2>
            <div class="ui horizontal statistic" style="float: right;">
                  <div class="value"  id="bats1"  style="font-size: 10vh !important;">
                    0
                  </div>
                  <div class="label"  id="balls1" style="font-size: 4vh !important;">
                    0
                  </div>
                </div>
          </div>
          <div class="ui segment"  id="batsman2" style="height:15.5vh;">
              <h2 class="ui header"  style="font-size: 6vh; display: inline-block;">
                <i class="icon"></i>
                <p id="bats2name">Hasa</p>
              </h2>
              <div class="ui horizontal statistic" style="float: right;">
                  <div class="value"  id="bats2" style="font-size: 10vh !important;">
                    0
                  </div>
                  <div class="label" id="balls2" style="font-size: 4vh !important;">
                    0
                  </div>
                </div>
          </div>
        </div>
    </div>
  </div>
</div>

</body>

<form>
    <input type="hidden" name="hiddenField" />
</form>


<style type="text/css">
  body{
    background-color: #a1a1a1;
  }

</style>
</html>