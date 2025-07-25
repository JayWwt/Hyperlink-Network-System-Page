$(document).ready(function () {
 
  $('#header-universal').load('/header.html', function () {
    
    const currentPage = window.location.pathname.split("/").pop();
    $(".nav-links a").each(function () {
      const href = $(this).attr("href");
      if (href === currentPage || (href === "index.html" && currentPage === "")) {
        $(this).addClass("active");
      }
    });

    $('.search').click(function (e) {
      e.stopPropagation();
      $('.search-container').toggleClass('active');
    });

    $(document).click(function (e) {
      if (!$(e.target).closest('.search-container').length) {
        $('.search-container').removeClass('active');
      }
    });

   
    $('.menu-toggle').click(function (e) {
      e.stopPropagation();
      $('.nav-links').toggleClass('active');
      $(this).find('i').toggleClass('fa-bars fa-xmark');
    });

    $(document).click(function (e) {
      if (!$(e.target).closest('.nav-links, .menu-toggle').length) {
        $('.nav-links').removeClass('active');
        $('.menu-toggle i').removeClass('fa-xmark').addClass('fa-bars');
      }
    });

  }); // end of .load()
});

$(function () {
  $("#footer-universal").load("/footer.html");
});