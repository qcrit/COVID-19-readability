var subWebs = [];
var allSubWebs = [];
var Url = "";
var Title = "";
var containerId = "";
var AZIndexItem = [];
var __o = "";
var __w = "";
var __d = "";
var ProgramUrl = "";
var searchText = "";
var AZIndexItems;


function getAZIndexSearchResult(url, _o, _w, _d, authenticationMode, programUrl, queryText, azIndexCacheExpiry) {
    var taskData = {};
    taskData.SiteUrl = url;
    taskData.ProgramRootUrl = programUrl;
    taskData.oo = _o;
    taskData.ww = _w;
    taskData.dd = _d;
    taskData.AZIndexCacheExpiry = azIndexCacheExpiry;
    taskData.Query = "<ViewFields><FieldRef Name='EncodedAbsUrl' /><FieldRef Name='Title' /></ViewFields>";
    taskData.QueryText = queryText;
    taskData.AuthenticationMode = authenticationMode;
    var dataAsString = JSON.stringify(taskData);
    $.when(getGetAZIndexData(dataAsString, url))
    .done(function (result) {
        if (result.length > 0) {
            AZIndexItems = result;
            writeAZIndexSearchResult(queryText);
        }
        else {
            $('#loadingDiv').hide();
            AZIndexItems = [];
        }
    }).
    fail(function (error) {
        errorAZHandler('Error calling service method from GetAZIndexData: ' + error.message);
        $('#loadingDiv').hide();
    })
}
function getGetAZIndexData(dataAsString, url) {
    var _deferred = $.Deferred();
    var _AZIndexItems;
    $.ajax({
        url: url + "/_vti_bin/cdphservice.svc/GetAZIndexData",
        type: "POST",
        data: JSON.stringify(dataAsString),
        headers: {
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            "Accept": "application/json; odata=verbose",
            "Content-Type": "application/json; odata=verbose"
        },
        cache: true,
        //async: false,
        success: function (data) {
            if (data != "") {
                _AZIndexItems = JSON.parse(data);
                //gsSortBy = "Title";
                //_AZIndexItems.sort(AZIndexCompare);
                _deferred.resolve(_AZIndexItems);
                //writeAZIndexSearchResult(queryText);
            }
        },
        error: function (error) {
            _AZIndexItems = [];
            _deferred.resolve(_AZIndexItems);
            //$('#loadingDiv').hide();
        }
    });
    return _deferred.promise();
}

function writeAZIndexSearchResult(queryText) {
    try {
        $('#topMenuAZindexListContainerDiv').html("");
        var itemCount = 0;
        var columnCount = 6;
        var resultHTML = "";
        var matchingCount = 0;
        for (var i = 0; i < AZIndexItems.length; i++) {
            if (AZIndexItems[i].Title.toLowerCase().startsWith(queryText.toLowerCase())) {
                matchingCount = matchingCount + 1;
                itemCount = itemCount + 1;
                if (itemCount == 0 || (itemCount % columnCount) == 1) {
                    resultHTML += "<ul class='topMenuAZindexList'>";
                }
                resultHTML += "<li><a title='" + AZIndexItems[i].Title + "' href='" + escape(AZIndexItems[i].PageUrl) + "'>" + AZIndexItems[i].Title + "</a></li>";
                if ((itemCount % columnCount) == 0) {
                    resultHTML += "</ul>";
                }
            }
        }
        if (matchingCount == 0) {
            $('#noRecordDiv').show();
        }
        else {
            if ((matchingCount % columnCount) != 0) {
                resultHTML += "</ul>";
            }
            $('#noRecordDiv').hide();
        }
        $('#topMenuAZindexListContainerDiv').html(resultHTML);
    }
    catch (err) {
        errorAZHandler(err.message);
    }
    finally {
        $('#loadingDiv').hide();
    }
}

function errorAZHandler(message) {
    $('#errMsgDiv').show();
    $('#errMsgSpan').text(message);
}

var AZIndexCompare = function (v1, v2) {
    if (v1[gsSortBy] > v2[gsSortBy]) return -1;
    if (v1[gsSortBy] < v2[gsSortBy]) return 1;
    return 0;
}


//////////////////////////


function searchAZIndex(url) {
    Url = url;
    collectAllAZIndex(query);
}
function searchAZIndexByKeyWord(value, url, _o, _w, _d, programUrl) {
    Url = url;
    __o = _o;
    __w = _w;
    __d = _d;
    ProgramUrl = programUrl;
    searchText = value;
    collectAllAZIndex();
}

function GetAllWebs(url) {
    $('#loading' + containerId).show();
    subWebs = [];
    var data = {};
    data.SiteUrl = Url;
    data.ProgramRootUrl = ProgramUrl;
    data.oo = __o;
    data.ww = __w;
    data.dd = __d;
    var dataAsString = JSON.stringify(data);
    $.ajax({
        //url: url + "/_api/web/webs",
        url: url + "/_vti_bin/cdphservice.svc/GetAllPrograms",
        type: "POST",
        data: JSON.stringify(dataAsString),
        //dataType: 'json',
        headers: {
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            "Accept": "application/json; odata=verbose",
            "Content-Type": "application/json; odata=verbose"
        },
        //processData: true,
        async: false,
        success: function (data) {

            var Programs = JSON.parse(data);
            for (var i = 0; i < Programs.length; i++) {
                var subWeb = [];
                subWeb.Title = Programs[i].Program;
                subWeb.Url = Programs[i].url;
                subWebs.push(subWeb);
            }
        },
        error: function (error) {

            $('#loading' + containerId).hide();
        }
    });
    return subWebs;
}

function GetAZIndexItem(url) {
    $('#loading' + containerId).show();
    var aZIndexItem;
    var query = "<Where><And><Eq><FieldRef Name='Available_x0020_in_x0020_AZ_x0020_Index' /><Value Type='Boolean'>Yes</Value></Eq><BeginsWith><FieldRef Name='Title' /><Value Type='Text'>" + searchText + "</Value></BeginsWith></And></Where>";
    var requestData = {
        "query":
               {
                   "__metadata":
                     { "type": "SP.CamlQuery" }
                  , "ViewXml": "<View><Query>" + query + "</Query></View>"
               }
    };
    $.ajax({
        url: url + "/_api/web/lists/getbytitle('Pages')/GetItems",
        type: "POST",
        data: JSON.stringify(requestData),
        headers: {
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            "Accept": "application/json; odata=verbose",
            "Content-Type": "application/json; odata=verbose"
        },
        async: false,
        success: function (data) {
            aZIndexItem = data.d.results;
        },
        error: function (error) {
            aZIndexItem = [];
        }
    });
    return aZIndexItem;
}

function collectAllAZIndex() {

    //if (AZIndexItem.length == 0) {
    AZIndexItem = [];
    if (allSubWebs.length == 0) {
        allSubWebs = GetAllWebs(Url);
    }

    extractAZIndexResult(GetAZIndexItem(Url), Url, AZIndexItem);
    for (var i = 0; i < allSubWebs.length; i++) {
        try {

            extractAZIndexResult(GetAZIndexItem(allSubWebs[i].Url), allSubWebs[i].Url, AZIndexItem);
        }
        catch (err) { }
    }
    //$('#loading' + containerId).hide();
    //writeRelatedNewsOnPage(RelatedItem);
    //}
    writeAZSearchResult(AZIndexItem);
}




function writeAZSearchResult(AZIndexItem) {
    $('#topMenuAZindexListContainerDiv').html("");
    var itemCount = 0;
    var columnCount = 6;
    var resultHTML = "";
    $('#noRecordDiv').show();
    for (var i = 0; i < AZIndexItem.length; i++) {
        $('#noRecordDiv').hide();
        if (AZIndexItem[i].length > 0) {
            for (var j = 0; j < AZIndexItem[i].length; j++) {
                //if (AZIndexItem[i][j].Title != undefined) 
                if (AZIndexItem[i][j].Title.toLowerCase().startsWith(queryText.toLowerCase())) {
                    if (itemCount == 0 || (itemCount % columnCount) == 1) {
                        resultHTML += "<ul class='topMenuAZindexList'>";
                    }
                    resultHTML += "<li><a href='" + escape(AZIndexItem[i][j].Url) + "'>" + AZIndexItem[i][j].Title + "</a></li>";
                    if (((itemCount % columnCount) == 0) || (i == AZIndexItem.length - 1)) {
                        resultHTML += "</ul>";
                    }
                    itemCount = itemCount + 1;
                }
            }
        }

    }
    $('#topMenuAZindexListContainerDiv').html(resultHTML);
}


function extractAZIndexResult(azIndexArray, url, AZIndexItem) {
    if (azIndexArray.length > 0) {
        for (var i = 0; i < azIndexArray.length; i++) {
            var azIndexItems = [];
            var azIndexItem = [];
            $.ajax({
                url: url + "/_api/web/lists/getbytitle('Pages')/items?$select=Title,FileRef&$filter=ID eq " + azIndexArray[i].ID,
                type: "GET",
                headers: { "accept": "application/json;odata=verbose" },
                async: false,
                success: function (data) {
                    azIndexItem = [];
                    azIndexItem.Title = data.d.results[0].Title;
                    azIndexItem.Url = data.d.results[0].FileRef;
                    azIndexItems.push(azIndexItem);
                },
                error: function (error) { }
            });
            if (azIndexItems.length > 0) {
                AZIndexItem.push(azIndexItems)
            }

        }
    }
}



