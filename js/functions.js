window.onload = function() {
  (function($){
    // add your jQuery code here
    // we are using this function because we must be sure that $ is assigned to the jQuery framework
    
  })(jQuery);
}

// this code is executed before images are loaded; pretty basic mobile detection
document.addEventListener("DOMContentLoaded", function(event) {
  function is_touch_device() {
    return (('ontouchstart' in window)
        || (navigator.MaxTouchPoints > 0)
        || (navigator.msMaxTouchPoints > 0));
    }
  var pHtml = document.getElementsByTagName( 'html' )[0];
  if (!is_touch_device()) {
    pHtml.setAttribute( 'class', 'no-touch' );
  }
  else {
    pHtml.setAttribute( 'class', 'touch' );
    function checkOrientation(){
      var oA = window.orientation;
        pHtml.setAttribute( 'class', 'touch orientation-'+oA );
    }
    window.addEventListener('orientationchange', function () {
      checkOrientation();
    });
    checkOrientation();
  }

});
