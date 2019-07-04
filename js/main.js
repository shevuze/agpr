
    $(document).ready(function() {
      $('.zoom-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
          verticalFit: true,
          titleSrc: function(item) {
            return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
          }
        },
        gallery: {
          enabled: true
        },
        zoom: {
          enabled: true,
          duration: 300, // don't foget to change the duration also in CSS
          opener: function(element) {
            return element.find('img');
          }
        }
        
      });
    });

    //Slider

    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      arrows: false,
      centerMode: true,
      focusOnSelect: true,
      infinite: true,
      centerPadding: 0,
      speed: 300,
      responsive: [
      {
        breakpoint: 1024,
        settings: {
         slidesToShow: 3
       }
     },
     {
      breakpoint: 640,
      settings: {
        arrows: false,
        slidesToShow: 1,
        autoplay: true,
  autoplaySpeed: 5000,
      }
    }
    ]
  });
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      asNavFor: '.slider-nav'
    });

//Menu

(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu')
        .toggleClass('menu_state_open');
    });
    
    $('.menu__links-item').on('click', function() {
      // do something

      $(this).closest('.menu')
        .removeClass('menu_state_open');
    });
  });
})(jQuery);

//Animation
$(".ba-title").animated("zoomInUp");
$(".ba-about-us__quote").animated("zoomInUp");
$(".ba-about-us__title").animated("rollIn");
$(".flipInX").animated("flipInX");
$(".ba-our-achievements__number").animated("bounceInDown");
$(".ba-our-description").animated("zoomInUp");

//

//------------------------Lazy load gallery---------------------------//
$( "#target" ).mousemove(function( event ) {
  var elem = document.getElementById('movingobject');
    $("#movingobject").css('transform', 'translate(' + event.pageY /50 + 'px,' + -event.pageX /50 + 'px)');
    $("#movingobject1").css('transform', 'translate(' + event.pageX /35 + 'px,' + -event.pageY /40 + 'px)');
    $("#movingobject2").css('transform', 'translate(' + event.pageY /50 + 'px,' + -event.pageX /50 + 'px)');
    $("#movingobject3").css('transform', 'translate(' + event.pageX /35 + 'px,' + -event.pageY /40 + 'px)');
    $("#movingobject4").css('transform', 'translate(' + event.pageX /45 + 'px,' + -event.pageY /40 + 'px)');
    $("#movingobject5").css('transform', 'translate(' + event.pageY /45 + 'px,' + -event.pageX /40 + 'px)');
    $("#movingobject6").css('transform', 'translate(' + event.pageX /35 + 'px,' + -event.pageY /40 + 'px)');
    $("#movingobject7").css('transform', 'translate(' + event.pageY /200 + 'px,' + -event.pageX /140 + 'px)');
});
//-----------------------scroll to anchor--------------------------------//
 $(document).ready(function(){
    $("#menu, #menu1").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

