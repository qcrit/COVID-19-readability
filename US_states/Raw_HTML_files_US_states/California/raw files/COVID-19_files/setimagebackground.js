//Type.registerNamespace('Ribbon.Image.Image.Properties.SetBackground.PageComponent');
//Ribbon.Image.Image.Properties.SetBackground.PageComponent.prototype = {
//    handleCommand: function (commandId, properties, sequence) {
//        switch (commandId) {
//            case 'MyRibbons.CheckBoxCommand':
//                RTE.SnapshotManager.takeSnapshot(); // make a snapshot for the RTE history
//                var range = RTE.Cursor.get_range(); // get the current selected range from RTE
//                var $element = $(range.$3_0); // select the element
//                if (properties.On) {
//                    $element.addClass('setBackground'); // manipulate the element
//                }
//                range.deleteContent(); // delete the range content
//                range.insertBefore($element[i]); // insert your new element
//                RTE.Cursor.update(); // update RTE
//                break;
//            case 'MyRibbons.CheckBoxQueryCommand':
//                if (!this.checkBoxDefaultSet) {
//                    properties.On = true;
//                    this.checkBoxDefaultSet = true;
//                }
//                break;
//        }
//    },
//    checkBoxDefaultSet: false,
//}
var checkBoxDefaultSet = false;
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';
// At least Safari 3+: "[object HTMLElementConstructor]"
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;
// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;
// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;
// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;

var fromSavedImage = false;
function handleCommand(obj, commandId) {
    RTE.SnapshotManager.takeSnapshot(); // make a snapshot for the RTE history
    var range = RTE.Cursor.get_range(); // get the current selected range from RTE
    var $element = $(range.$4K_0);
    var imgName = "";
    try {
        if ($(range.$4K_0).alt === undefined) {
            if ($(range.$4K_0).context.alt == "Skip to main content") {
                if ($element[0] === undefined) {
                    imgName = $element.src.substring($element.src.lastIndexOf('/') + 1, $element.src.length);
                    //$element.alt = imgName.substr(0, imgName.lastIndexOf("."));

                    if (imgName.lastIndexOf(".") === -1) {
                        $element.alt = imgName;
                    }
                    else {
                        $element.alt = imgName.substr(0, imgName.lastIndexOf("."));
                    }

                    //$element.className = "img-responsive";
                }
                else {
                    imgName = $element[0].src.substring($element[0].src.lastIndexOf('/') + 1, $element[0].src.length);
                    //$element[0].alt = imgName.substr(0, imgName.lastIndexOf("."));

                    if (imgName.lastIndexOf(".") === -1) {
                        $element[0].alt = imgName;
                    }
                    else {
                        $element[0].alt = imgName.substr(0, imgName.lastIndexOf("."));
                    }

                   // $element[0].className = "img-responsive";
                }
                //$element[0].alt = $element[0].src.substring($element[0].src.lastIndexOf('/') + 1, $element[0].src.length)
            }
            else {
                if ($element[0] === undefined) {
                    if ($(range.$4K_0).context.alt == "") {
                        imgName = $element.src.substring($element.src.lastIndexOf('/') + 1, $element.src.length);
                        //$element.alt = imgName.substr(0, imgName.lastIndexOf("."));

                        if (imgName.lastIndexOf(".") === -1) {
                            $element.alt = imgName;
                        }
                        else {
                            $element.alt = imgName.substr(0, imgName.lastIndexOf("."));
                        }

                      // $element.className = "img-responsive";
                    }
                    else {
                        imgName = $(range.$4K_0).context.alt;
                        //$element.alt = imgName.substr(0, imgName.lastIndexOf("."));

                        if (imgName.lastIndexOf(".") === -1) {
                            $element.alt = imgName;
                        }
                        else {
                            $element.alt = imgName.substr(0, imgName.lastIndexOf("."));
                        }

                        //$element.className = "img-responsive";
                    }
                }
                else {
                    if ($(range.$4K_0).context.alt == "") {
                        imgName = $element[0].src.substring($element[0].src.lastIndexOf('/') + 1, $element[0].src.length);                        
                        if (imgName.lastIndexOf(".") === -1) {
                            $element[0].alt = imgName;
                        }
                        else {
                            $element[0].alt = imgName.substr(0, imgName.lastIndexOf("."));
                        }

                       // $element[0].className = "img-responsive";
                    }
                    else {
                        imgName = $(range.$4K_0).context.alt;

                        if (imgName.lastIndexOf(".") === -1)
                        {
                            $element[0].alt = imgName;
                        }
                        else
                        {
                            $element[0].alt = imgName.substr(0, imgName.lastIndexOf("."));
                        }                       
                      //  $element[0].className = "img-responsive";
                    }

                }
            }
        }
        else {
            if ($element[0] === undefined) {
                imgName = $element.src.substring($element.src.lastIndexOf('/') + 1, $element.src.length)
                //$element.alt = imgName.substr(0, imgName.lastIndexOf("."));

                if (imgName.lastIndexOf(".") === -1) {
                    $element.alt = imgName;
                }
                else {
                    $element.alt = imgName.substr(0, imgName.lastIndexOf("."));
                }

               // $element.className = "img-responsive";
            }
            else {
                imgName = $element[0].src.substring($element[0].src.lastIndexOf('/') + 1, $element[0].src.length);
                //$element[0].alt = imgName.substr(0, imgName.lastIndexOf("."));

                if (imgName.lastIndexOf(".") === -1) {
                    $element[0].alt = imgName;
                }
                else {
                    $element[0].alt = imgName.substr(0, imgName.lastIndexOf("."));
                }

              //  $element[0].className = "img-responsive";
            }
        }
    }
    catch (err) {
        if ($element.alt == "") {
            imgName = $element.src.substring($element.src.lastIndexOf('/') + 1, $element.src.length);
           // $element[0].alt = imgName.substr(0, imgName.lastIndexOf("."));
            if (imgName.lastIndexOf(".") === -1) {
                $element[0].alt = imgName;
            }
            else {
                $element[0].alt = imgName.substr(0, imgName.lastIndexOf("."));
            }
           // $element[0].className = "img-responsive";
        }
        fromSavedImage = true;
    }

    //if (isChrome) { $element.alt = $element.src.substring($element.src.lastIndexOf('/') + 1, $element.src.length) }
    //else { $element.alt = $element.nameProp; }


    //if ($element.className == "setBackground") {
    //    obj.checked = true;
    //}
    //else {
    //    obj.checked = false;
    //}
    switch (commandId) {
        case 'CheckBoxCommand':
            RTE.SnapshotManager.takeSnapshot(); // make a snapshot for the RTE history
            // var range = RTE.Cursor.get_range(); // get the current selected range from RTE
            //var $element = $(range.$3_0); // select the element
            
            if (fromSavedImage == true) {
                if (document.getElementById("MyRibbons.AddClass-Medium-checkbox").checked) { $element[0].className = "setBackground img-responsive"; } else { $element[0].className = ""; }
            }
            else {
                if (document.getElementById("MyRibbons.AddClass-Medium-checkbox").checked) { $element.className = "setBackground img-responsive"; } else { $element.className = ""; }
            }

            //if (isChrome) {
            //    if (document.getElementById("MyRibbons.AddClass-Medium-checkbox").checked) { $element.className = "setBackground"; } else { $element.className = ""; }
            //}
            //else {
            //    if (obj.checked) {
            //        try { $element.className = "setBackground"; }
            //        catch (err) { }
            //    }
            //    else {
            //        try { $element.className = ""; }
            //        catch (err) { }
            //    }
            //}
            //range.deleteContent(); // delete the range content
            //range.insertBefore($element[0]); // insert your new element
            RTE.Cursor.update(); // update RTE
            break;
        case 'CheckBoxQueryCommand':
            //if (!checkBoxDefaultSet) {
            //    obj.checked = true;
            //    checkBoxDefaultSet = true;
            //}
            break;
    }
}