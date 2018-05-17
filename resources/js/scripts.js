

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
// add a body class
$(bodyClass()).addClass('cock');

function bodyClass() {
    return 'body';
}


//iframe
$("iframe").wrap('<div class="iframe-container"></div>');
