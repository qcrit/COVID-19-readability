	
if (location.protocol !== "https:") location.protocol = "https:";

    function changeDisplay(){
		document.body.innerHTML = "<p>Site has moved <a href='" + location.href.replace("http://", "https://") + "'>here</a>, redirecting.</p>";
        document.body.style.display = 'none';
    }

    //setTimeout(function () { changeDisplay(); }, 0);
