// <!-- js -->
<script src="js/jquery-2.2.3.min.js"></script>
// <!--/js-->
// <!-- //gallery -->
<script src="js/jquery.tools.min.js"></script>
<script src="js/jquery.mobile.custom.min.js"></script>
<script src="js/jquery.cm-overlay.js"></script>

<script>
  $(document).ready(function () {
    $('.cm-overlay').cmOverlay();
  });
</script>
// <!-- //gallery -->
// <!--start-date-piker-->
<link rel="stylesheet" href="css/jquery-ui.css" />
<script src="js/jquery-ui.js"></script>
<script>
  $(function () {
    $("#datepicker,#datepicker1").datepicker();
  });
</script>
// <!-- /End-date-piker -->
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
</script>
// <!--//end-smooth-scrolling-->
// <!-- smooth-scrolling-of-move-up  -->
<script type="text/javascript">
  $(document).ready(function () {
    /*
    var defaults = {
      containerID: 'toTop', // fading element id
      containerHoverID: 'toTopHover', // fading element hover id
      scrollSpeed: 1200,
      easingType: 'linear'
    };
    */

    $().UItoTop({
      easingType: 'easeOutQuart'
    });

  });
</script>


<script src="js/SmoothScroll.min.js"></script>

<script>
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
</script>
// <!-- Bootstrap core JavaScript
//   ================================================== -->
// <!-- Placed at the end of the document so the pages load faster -->
<script src="js/bootstrap.js"></script>
