jQuery(document).ready(function($) {
	// Circle Progressbar 
	$('#html').circleProgress({
	    value: 0.95,
	    size: 150,
	    thickness: 3,
	    fill: {gradient: ['#C33764', '#1D2671']},
	}).on('circle-animation-progress', function(event, progress) {
    	$(this).find('.skill-count-no').html(Math.round(95 * progress) + '<i>%</i>');
  	});
	$('#css').circleProgress({
	    value: 0.9,
	    size: 150,
	    thickness: 3,
	    fill: {gradient: ["#03001e", "#7303c0", "#ec38bc", "#FF070B"]},
	}).on('circle-animation-progress', function(event, progress) {
    	$(this).find('.skill-count-no').html(Math.round(90 * progress) + '<i>%</i>');
  	});
  	$('#jquery').circleProgress({
	    value: 0.88,
	    size: 150,
	    thickness: 3,
	    fill: {gradient: ["red", "orange"]},
	}).on('circle-animation-progress', function(event, progress) {
    	$(this).find('.skill-count-no').html(Math.round(88 * progress) + '<i>%</i>');
  	});
  	$('#js').circleProgress({
	    value: 0.85,
	    size: 150,
	    thickness: 3,
	    //fill: { color: "#22bbc0" },
	    fill: {gradient: ["#5f2c82", "#49a09d"]},

	}).on('circle-animation-progress', function(event, progress) {
    	$(this).find('.skill-count-no').html(Math.round(85 * progress) + '<i>%</i>');
  	});
});

