// PRELOADER
const loader = document.querySelector(".preloader");
window.addEventListener("load", anyFun);

function anyFun() {
  loader.classList.add("disappear");
}

// NAVBAR SCROLL

window.addEventListener("scroll", function () {
  var menu = this.document.querySelector(".menu");
  menu.classList.toggle("sticky", window.scrollY > 0);
});

// GO TO TOP
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $(".go_top").fadeIn();
    } else {
      $(".go_top").fadeOut();
    }
  });

  $(".go_top").click(function () {
    $("html ,body").animate({ scrollTop: 0 }, 1400);
  });
});

// ANIMATIONS
AOS.init();

// BANNNER SLIDES
$(".banner-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  centerPadding: false,
  variableWidth: true,
  centerMode: true,
  autoplaySpeed: 3000,
  dots: true,
});

// TRUSTED SLIDES
$(".trusted_slide").slick({
  dots: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 575,
      settings: {
        arrows: false,
        slidesToShow: 2,
      },
    },
  ],
});

// VENOBOX
new VenoBox({
  selector: ".video__card",
});

// COUNTERUP
$(".about__timer-count").counterUp({ delay: 10, time: 1000 });

// CUSTOMER SLIDES
$(".customer__slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 600,
  dots: true,
});

// INTERFACE SLIDES
$(".interface__slider").slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  speed: 600,
  dots: true,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        arrows: false,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 575,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
});
