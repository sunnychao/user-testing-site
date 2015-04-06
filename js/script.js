$(document).ready(function(){
	function gantryUp(){
		var up = new TimelineLite();
		up.to($('.gantry'), 2, {marginTop:"-30px", ease:Linear.easeNone, delay:.3})
			.to($('.carriage'), 1.5, {marginLeft:"55px", ease:Linear.easeNone, delay:.2})
			.to($('.carriage'), 2.5, {marginLeft:"176px", ease:Linear.easeNone, onComplete:carriageMove});
	};
	function carriageMove(){
		var move = new TimelineLite();
		move.to($('.carriage'), 2.5, {marginLeft:"55px", ease:Linear.easeNone})
			.to($('.carriage'), 2.5, {marginLeft:"176px", ease:Linear.easeNone, onComplete:carriageMove});
	}
	gantryUp();
});