

// nav
function active_menu() {
    var url = window.location.href;
    $(".nav-header a")
      .filter(function() {
        return this.href == url;
      })
      .addClass("active");
}

active_menu();



// open mobile menu
$(".nav-prompt").click(function () {
  $(".nav-header").attr("aria-expanded", function(index, attr) {
    return attr == "true" ? "false" : "true";
  });

  // if ($(".nav-prompt").text() == "Open Navigation") {
  //   $(this).text("Close Navigation").addClass('nav-is-open').removeClass('nav-is-closed');
  // } else {
  //   $(this).text("Open Navigation").addClass("nav-is-closed").removeClass("nav-is-open");;
  // }; 

  if ($(".nav-prompt").text() == "Open Navigation") {
    $(this).text("Close Navigation");
  } else {
    $(this).text("Open Navigation");
  }; 

  
});




//iframe
iframeFix();

function iframeFix() {
  $("iframe").wrap('<div class="iframe-container"></div>');
}

function imageGallery() {
  if (!$(".image-gallery").length) {
    return;
  }
  // gallery http://dbrekalo.github.io/simpleLightbox/

  $(".image-gallery a").simpleLightbox();

}

imageGallery();



