// SharePoint uses its own body onload function called _spBodyOnLoadFunctionNames which will collide with your document ready (run before or after).  
// Instead, create a function with a custom name, and push the custom name into the _spBodyOnLoadFunctionNames array.  
// Itâ€™s wonderful and allows things to load in their proper order.

_spBodyOnLoadFunctionNames.push("executeScripts");

// Execution of the scripts happens here
function executeScripts() {

    // Accessabiluty changes for SharePoint
    webAccessibility($);
    checkAccessability();

    // Web part tagging - adds web-part-name attribute and wp-[web part name] to ms-webpartzone-cell
    webPartZoneTagging($);

    // Add class for edit mode to HTML tag
    markEditMode();

    //Add parallax to a band
    $('.rowBand').spParallax({
        callBack: null					// Add additional functions to exicute after parallax is run.
    });
    $('#s4-workspace').stellar({
        horizontalScrolling: false, 	// Set scrolling to be in either one or both directions
        verticalScrolling: true, 		// Set scrolling to be in either one or both directions
        horizontalOffset: 0, 			// Set the global alignment offsets
        verticalOffset: 40, 			// Set the global alignment offsets
        responsive: false, 				// Refreshes parallax content on window load and resize
        scrollProperty: 'scroll', 		// Select which property is used to calculate scroll. Choose 'scroll', 'position', 'margin' or 'transform'.
        positionProperty: 'position' 	// Select which property is used to position elements. Choose between 'position' or 'transform'
    });

    // Social Media
    cdphSocialMedia();

    // EDIT MODE: Run scripts for edit mode
    if ($('.ms-SPZoneLabel, .edit-mode-panel, .ewiki-margin').length) {

        // Give web parts a drop down for width, to help with responsive design
        responsiveWebPartWidthSelectionEditMode($, {
            webPartName: 'Page Content,Content Editor'				// List out the names of the web parts that should have this added.  Coma delimited.
        });

        // Make web part tool pane fixed in view
        webPartToolPanePlacement($, {
            webPartHighlight: '#f2f5a9',		// Color to highlight the web part selected.
            webPartContent: '#ffffff',			// Color to highlight the content of the web part.
            positionLeftRight: 'right',			// Position the tool pane either left or right.
            distanceLeftRight: '20px',			// Distance from the left or right.
            distanceTop: '164px',				// Distance from the top.
            heightMax: '500px',					// Height of the tool pane as it will need to scroll.
            sideBar: '260px',					// Width to give the area where the tool pane goes.
            webPartZIndex: 3000					// Index to ensure the tool pane is above the page.
        });

        // Return to web part zone when adding, deleting or returning after saving
        webPartZoneJumpTo($);

        // Remove class from web part zone
        $('#MSOZone .ms-webpart-cell-horizontal:first-child')
            .removeClass('ms-webpart-cell-horizontal')
            .addClass('horizontal-webpart-zone');

        // DISPLAY MODE: Run scripts for display mode
    } else {

        // Adjusts the coloring of the row bands
        $('.rowBand').bandAdjustments({
            pageMode: '', //Indicate what mode this should executed in, view or edit. Leave blank for view and add edit for edit mode.  Default: ''
            contentLength: 0,       // Number of characters or less to hide band Default: 0
            webPartLength: 0,       // Number of web parts or less to hide band Default: 0
            imageLength: 0,         // Number of images or less to hide band Default: 0
            googleMapLength: 0,     // Number of google maps or less to hide band Default: 0
            parallaxLength: 0       // Number of parallax web parts or less to hide band Default: 0
        });

        // Changes the horizontal web parts to be responsive
        responsiveWebPartZoneHorizontal($, {
            webPartBreakPoint: 'lg'  // Bootstrap breakpoint - xs, sm, md, lg
        });

    }

}