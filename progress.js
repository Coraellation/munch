function outputcal() {
    var x, y;
    x = document.getElementById("form");
    y = x.["cal"].value;
    document.getElementById("demo").innerHTML = (y);

    var divArray = document.getElementById("progress-bar progress-bar-success");
    divArray.style.width = "100%";
}

$(function() {
  var value = 0;
  var interval = setInterval(function() {
      value += 10;
      $("#progress-bar")
      .css("width", value + "%")
      .attr("aria-valuenow", value)
      .text(value + "%");
      if (value >= 100)
          clearInterval(interval);
  }, 1000);
});