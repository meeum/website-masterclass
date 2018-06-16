
// call polyfill so IE will read custom properties
cssVars();


// open mobile menu
$('.nav-prompt').click(function () {

  if ($('.nav-inner').attr('aria-expanded') === 'false') {
    $('.nav-inner').attr('aria-expanded', 'true');
  } else {
    $('.nav-inner').attr('aria-expanded', 'false');
  };


  if ($('.nav-prompt').text() === 'Open Navigation') {
    $('.nav-prompt').text('Close Navigation');
  } else {
    $(".nav-prompt").text("Open Navigation");
  }
})


// active class on nav
function active_menu() {
  var url = window.location.href;
  $(".nav-inner a")
    .filter(function () {
      return this.href == url;
    }).addClass("active");
}

active_menu();


//iframe
// function iframeFix() {
//   $("iframe").wrap('<div class="iframe-container"></div>');
// }

// iframeFix();


// image gallery
// gallery http://dbrekalo.github.io/simpleLightbox/
function imageGallery() {
  if (!$(".image-gallery").length) {
    return;
  }
  
  $(".image-gallery a").simpleLightbox();
}

imageGallery();



