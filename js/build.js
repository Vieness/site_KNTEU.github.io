$(function () {
    console.log('ham');
    $('._hamburger').click(function () {
        $('._nav').slideToggle();
    });
});
$('.slider').slick({
    dots : false,
    slidesToShow :1,
    arrows:true,
prevArrow:$(".prev"),
nextArrow:$(".next"),
    responsive: [

      {
        breakpoint: 400,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
     prevArrow:$(".prev"),
nextArrow:$(".next"),
         
        }
      }
    ]
  });


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhhbWJ1cmdlci5qcyIsIm1vZHVsZTEuanMiLCJtb2R1bGUyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coJ2hhbScpO1xuICAgICQoJy5faGFtYnVyZ2VyJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuX25hdicpLnNsaWRlVG9nZ2xlKCk7XG4gICAgfSk7XG59KTsiLCIkKCcuc2xpZGVyJykuc2xpY2soe1xuICAgIGRvdHMgOiBmYWxzZSxcbiAgICBzbGlkZXNUb1Nob3cgOjEsXG4gICAgYXJyb3dzOnRydWUsXG5wcmV2QXJyb3c6JChcIi5wcmV2XCIpLFxubmV4dEFycm93OiQoXCIubmV4dFwiKSxcbiAgICByZXNwb25zaXZlOiBbXG5cbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogNDAwLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgIGFycm93czpmYWxzZSxcbiAgICAgcHJldkFycm93OiQoXCIucHJldlwiKSxcbm5leHRBcnJvdzokKFwiLm5leHRcIiksXG4gICAgICAgICBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfSk7XG4iLCIiXX0=
