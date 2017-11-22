addEventListener("load", function () {
  setTimeout(hideURLbar, 0);
}, false);

function hideURLbar() {
  window.scrollTo(0, 1);
}


<script src="js/jquery.tools.min.js"></script>
<script src="js/jquery.mobile.custom.min.js"></script>
<script src="js/jquery.cm-overlay.js"></script>


$(document).ready(function () {
  $('.cm-overlay').cmOverlay();
});

<!-- //gallery -->

<link rel="stylesheet" href="css/jquery-ui.css" />
<script src="js/jquery-ui.js"></script>


$(function () {
  $("#datepicker,#datepicker1").datepicker();
});

<script type="text/javascript" src="js/move-top.js"></script>
<script type="text/javascript" src="js/easing.js"></script>
<script type="text/javascript">
jQuery(document).ready(function ($) {
  $(".scroll").click(function (event) {
    event.preventDefault();

    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  });
});




$(document).ready(function () {


  $().UItoTop({
    easingType: 'easeOutQuart'
  });

});


<script src="js/SmoothScroll.min.js"></script>


$(document).ready(function () {
  size_li = $("#myList li").size();
  x = 1;
  $('#myList li:lt(' + x + ')').show();
  $('#loadMore').click(function () {
    x = (x + 1 <= size_li) ? x + 1 : size_li;
    $('#myList li:lt(' + x + ')').show();
  });
  $('#showLess').click(function () {
    x = (x - 1 < 0) ? 1 : x - 1;
    $('#myList li').not(':lt(' + x + ')').hide();
  });
});

<script src="js/bootstrap.js"></script>
