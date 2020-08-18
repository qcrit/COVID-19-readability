var monthNamesLower = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

function restrictContentLength(string, wordCount) {
    if (string == null) {
        return "";
    }
    var retVal = "";
    if (string.length > wordCount) {
        retVal = string.substring(0, wordCount);
        return retVal + " ...";
    }
    else {
        return string;
    }
}

function removeExtension(filename) {
    var lastDotPosition = filename.lastIndexOf(".");
    if (lastDotPosition === -1) return filename;
    else return filename.substr(0, lastDotPosition);
}

function NullCheckString(str) {
    if ((typeof str === 'undefined') || (str == null)) {
        return "";
    }
    else {
        return str;
    }
}
function formatDate(dateString) {
    if (dateString == null) {
        return "";
    }

    var date = new Date(dateString.replace("T", " ").replace("Z", "").replace(/-/g, "/"));
    date = ConvertDateToPst(date);
    var formatteddate = monthNamesLower[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
    return formatteddate;
}

function getTodayDate() {
    var today = new Date();
    return ((today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear());
}
function getTodayDateWithTime() {
    var today = new Date();
    return ((today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear() +" " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
}


function getStartYearDateWithTime(year) {
    var today = new Date();
    return (01 + '/' + 01 + '/' + year + " " + 00 + ":" + 00 + ":" + 01);
}


function getLastYearDateWithTime(year) {
    var today = new Date();
    return (12 + '/' + 31 + '/' + year + " " + 23 + ":" + 59 + ":" + 59);
}


function getDateWithTime(spDate) {
    if (spDate == null) {
        return "";
    }
    var formatteddate = new Date(spDate.replace("T", " ").replace("Z", "").replace(/-/g, "/"));
    formatteddate = ConvertDateToPst(formatteddate);
    return ((formatteddate.getMonth() + 1) + '/' + formatteddate.getDate() + '/' + formatteddate.getFullYear() + " " + formatteddate.getHours() + ":" + formatteddate.getMinutes() + ":" + formatteddate.getSeconds());
}

Date.prototype.stdTimezoneOffset = function () {
    var jan = new Date(this.getFullYear(), 0, 1);
    var jul = new Date(this.getFullYear(), 6, 1);
    return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
}
Date.prototype.dst = function () {
    return this.getTimezoneOffset() < this.stdTimezoneOffset();
}

function ConvertDateToPst(date) {
    //var timeZoneOffset = date.getTimezoneOffset() / 60;
    if (date.dst()) {
        date.setHours(date.getHours() + 7);
    }
    else {
        date.setHours(date.getHours() + 8);
    }
    return date;
}
function ConvertISTToPST(date) {
    if (date.getTimezoneOffset() = -330) {
        if (date.dst()) {
            date.setHours(date.getHours() - 7);
        }
        else {
            date.setHours(date.getHours() - 8);
        }
    }
    return date;
}


function showLessMoreText(textString, wordCount) {
    if (textString == null) {
        return "";
    }
    var splittedString = textString.split(" ");
    var retVal = "";
    if (splittedString.length > wordCount) {
        for (var i = 0; i < wordCount; i++) {
            if (splittedString[i].indexOf("<div") == -1 || splittedString[i].indexOf("class=") == -1 || splittedString[i].indexOf("<p") == -1 || splittedString[i].indexOf("<p") == -1)
                retVal += splittedString[i] + " ";

        }
        return retVal + "... ";
    }
    else {
        return textString;
    }
}

function checkDate(dateString, todayDate) {
    var date = new Date();
    try {
        if (dateString != null) {
            date = new Date(dateString);
        }
    }
    catch (err) { }
    return date;

}

