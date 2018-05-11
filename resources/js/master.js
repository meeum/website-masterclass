//this function includes all necessary js files for the application
function include(file) {
  var script = document.createElement("script");
  script.src = file;
  script.type = "text/javascript";
  script.defer = true;

  document
    .getElementsByTagName("head")
    .item(0)
    .appendChild(script);
}

/* include any js files here */
include("resources/js/css-var-polyfill.js");
//github.com/jhildenbiddle/css-vars-ponyfill

include("resources/js/jquery-3.3.1.min.js");
include("resources/js/scripts.js");
