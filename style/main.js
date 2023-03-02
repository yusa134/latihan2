$(document).ready(function () {
  $(".menu-icon").click(function () {
    $(".mobile-menu nav").addClass("active");
  });
  $(".menu-close").click(function () {
    $(".mobile-menu nav").removeClass("active");
  });
});
