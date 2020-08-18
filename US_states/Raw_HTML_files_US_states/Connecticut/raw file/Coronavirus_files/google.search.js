$.QSParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return '';
    }
    else {
        return decodeURIComponent(results[1]) || '';
    }
}


$(document).ready(function () {

    $('#ddlSearchTermType').val($.QSParam('exactTerms') == '' ? '0' : '1');
    $('#txtExactWords').val($.QSParam('q'));
    $('#txtExcludeWords').val($.QSParam('excludeTerms'));
    $('#ddlFileTypeOption').val($.QSParam('fileType').startsWith('-') ? '1' : '0');
    $('#ddlFileType').val($.QSParam('fileType').startsWith('-') ? $.QSParam('fileType').substring(1) : $.QSParam('fileType'));
    $('#ddlSortOption').val($.QSParam('sort'));

    $('#btnAdvanceSearch').on('click', function () {
        var searchTerm = $('#txtExactWords').val();
        if (searchTerm != '') {
            var selectedTermType = $('#ddlSearchTermType').val();
            var searchTermToExclude = $('#txtExcludeWords').val();
            var selectedFileTypeOption = $('#ddlFileTypeOption').val();
            var selectedFileType = $('#ddlFileType').val();
            var selectedSortOption = $('#ddlSortOption').val();

            var qsvSearchTerm = searchTerm;
            var qsvExactTerm = selectedTermType == '1' ? searchTerm : '';
            var qsvSearchTermToExclude = searchTermToExclude;
            var qsvFileType = (selectedFileTypeOption == '1' ? '-' : '') + selectedFileType;
            var qsvSort = selectedSortOption;

            var queryString = 'q=' + encodeURIComponent(qsvSearchTerm) +
                '&exactTerms=' + encodeURIComponent(qsvExactTerm) +
                '&excludeTerms=' + encodeURIComponent(qsvSearchTermToExclude) +
                '&fileType=' + qsvFileType +
                '&sort=' + qsvSort;

            window.location = window.location.pathname + (queryString != '' ? '?' + queryString : '');
        }
    });
});
