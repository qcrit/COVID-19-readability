/*-------------------------
  Menu select
-------------------------*/
function getURI() {
    return $(location).attr('href');
}

function getDir(hrefString) {
    var parser = document.createElement('a');
    parser.href = hrefString;
    var dirs = parser.pathname.split(/[^\w\-\.]+/).filter(String);
    var dir = dirs.filter(function (el) {return !el.match(/^(test.health.ri.gov|index)/i)})[0];
    if (!dir) { dir = 'home'; }
    return dir;
}

function setNavSelected(dir) {
    if (dir) {
	$("ul#nav li." + escape(dir)).addClass('selected');
    }
}

$(document).ready(function() {
    setNavSelected(getDir(getURI()));
});