$(document).ready(function(event) {
	// icons
	var collapseIcon = 'fa-plus-square';
	var expandedIcon = 'fa-minus-square';

	$('.list-faq').find('.answer').hide();
	$('.list-faq').find('.fa').addClass(collapseIcon);
	
	// check for any hash tags in URL and open up that item if present
	if (window.location.hash) {
		var hash = window.location.hash;
		$(hash).find('.answer').show();
		$(hash).children('.question').children('a').children('.fa').removeClass(collapseIcon);
		$(hash).children('.question').children('a').children('.fa').addClass(expandedIcon);
	}
	
	// item is clicked, toggle the answer field
	$('.question-link').on("click", function(event){
		//console.log('click');
	
		var thisAnswer = $(this).parent().parent().find('.answer');  // need to go up two parents
		var thisIcon = $(this).children('span.fa');
		var thisStatus = $(thisAnswer).css('display');	
		
		//console.log(thisAnswer.html() + " " + thisIcon.attr('class') + " " + thisStatus);
						  		
		if (thisStatus == 'none') {
	  		// show
	  		$(thisIcon).removeClass(collapseIcon);
	  		$(thisIcon).addClass(expandedIcon);
			$(this).attr('aria-expanded', 'true');
			$(thisAnswer).attr('aria-hidden', 'false');
		} else {
			// hide
	  		$(thisIcon).removeClass(expandedIcon);
	  		$(thisIcon).addClass(collapseIcon);	
			$(this).attr('aria-expanded', 'false');
			$(thisAnswer).attr('aria-hidden', 'true');
		}
		
		$(thisAnswer).toggle('fast');
	
		
		event.preventDefault();
	});
});