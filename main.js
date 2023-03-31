window.onload = function () {
  // Date & Time
  var today = new Date();

  var day = today.toLocaleDateString("en-US", {
    weekday: "long",
  });

  var date = today.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  var time = today.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  document.getElementById("day").innerHTML = day;
  document.getElementById("date").innerHTML = date.toUpperCase();
  document.getElementById("time").innerHTML = time;

  // Show/Hide Divs
  $("#forgot-pw-btn").click(function () {
    $(".inner-top-container").addClass("show");
  });

  $("#cancel-btn").click(function () {
    $(".inner-top-container").removeClass("show");
  });

  $("#arrow-back-btn").click(function () {
    $(".inner-top-container").removeClass("show");
  });
};
