jQuery(document).ready(function($) {

	$('#carousel').carouFredSel({

		width: '100%',
                height: 260,
		items: 3,
		scroll: 1,

scroll: {
      pauseOnHover: true,
},

     items: {
// Below line is both the solution and the problem for the left aligned slide
          visible: 'odd',
},
		auto: {
                        items: 1,
// Use speed instead of duration - eliminates the jumpiness that occurs when the image slides -sbf 09/17/2019
			speed: 1400,
// Increased timeout from 2500 to 2700 based on WC input -sbf 10/03/2019
			timeoutDuration: 2700
		},
		prev: '#prev',
		next: '#next',
		pagination: '#pager'
	});
	
});