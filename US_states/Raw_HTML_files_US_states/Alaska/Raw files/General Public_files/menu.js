$(document).ready(function () {

    initMenu();

    initSearch();

});


var initMenu = function () {

    // Script compares document url with each menu url such that only those submenus that are children of the current page are toggled visible.
    // Compares both subfolders (Pages/folder/item.aspx) and subsites (site/Pages/folder/item.aspx) with url.

    // Hide all second-level menus.
    $('#DhssZenNav li.static ul').attr('style', 'display: none;');

    // Define regular expression.
    var myRegExp = new RegExp('(?:/|.*?//?.*?/)(?:pub/|home/)*((?:.*?/)*).*?.aspx');
    // note that ?: indicates an ignored block, (not passed to result array).
    // Breakdown:
    //  (?:/|.*?//?.*?/) => [ignored] / [or] http://, localhost/, etc
    //  .*?/             => [ignored] alaska.gov/, www.alaska.gov/
    //  (?:pub/|home/)*  => [ignored] pub/home/, pub/, home/
    //  (?:.*?/)*)       => [$1]      division/Pages/subfolder/anothersubfolder/
    //  .*?.aspx         => [ignored] default.aspx, test.aspx

    // Extract the folder uri from page URL and apply regular expression.
    var pageUri = myRegExp.exec(document.URL);
    pageUri = (pageUri && pageUri.length > 1) ? pageUri[1] : null;

    // If regular expression returns nothing or the site root, exit.
    if (!pageUri || pageUri === 'Pages/') return;

    // Iterate through all links in the menu.
    $('#DhssZenNav li.static > a').each(function (key, el) {
        // Extract folder uri from each link.
        var result = myRegExp.exec($(el).attr('href'));
        var linkUri = (result && result.length > 1) ? result[1] : null;
        if (!linkUri) return true; // Continue
        // Trim page uri to the length of the link uri, compare, and add the appropriate class on match.
        if (linkUri && pageUri.substr(0, linkUri.length) == linkUri) {
            $(el).parents('li').addClass('selected');
        };
    });

    // Add "selected" class to selected link's associated menu and show.
    $('#DhssZenNav li.static.selected > ul').addClass('selected').attr('style', '');
    // Add "active" class to selected link's parent menus and show.
    $('#DhssZenNav li.static.selected').parents('ul').addClass('active').attr('style', '');

}


var initSearch = function () {

    var searchAction = function () {
        // Get search string and cancel if empty.
        var searchStr = $('#soa-searchquery').val();
        if (searchStr.length === 0) return;
        // Redirect based on desired search location.
        if ($('#soa-searchDepartment').is(':checked')) {
            window.location = 'http://dhss.alaska.gov/pages/search.aspx?q=' + searchStr + '&sort=date%3AD%3AL%3Ad1&output=xml_no_dtd&ie=UTF-8&oe=UTF-8&x=36&y=12';
        }
        else {
            window.location = 'http://dhss.alaska.gov/pages/search.aspx?q=' + searchStr + '&sort=date%3AD%3AL%3Ad1&output=xml_no_dtd&ie=UTF-8&oe=UTF-8&x=43&y=21';
        }
    }

    $('#soa-searchsubmit').click(function () {
        searchAction();
    });

}


// This is the son of suckerfish dropdown javascript code for IE

sfHover = function () {
    var sfEls = document.getElementById("menu_list").getElementsByTagName("LI");
    for (var i = 0; i < sfEls.length; i++) {
        sfEls[i].onmouseover = function () {
            this.className += " sfhover";
        }
        sfEls[i].onmouseout = function () {
            this.className = this.className.replace(new RegExp(" sfhover\\b"), "");
        }
    }
}
if (window.attachEvent) window.attachEvent("onload", sfHover);
