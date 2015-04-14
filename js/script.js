$(document).ready(function(){
	$('.knob').on('click', function(){
		function stageUp(){
			var up = new TimelineLite();
			up.to($('.knobLed'), .3, {opacity:"1", ease:Linear.easeNone, delay:.3})
				.to($('.knob'), 0, {pointerEvents:'none'})
				.to($('.screen'), .2, {opacity:"1", ease:Linear.easeNone})
				.to($('.slice'), 0, {visibility:'hidden'})
				.to($('.zstage'), 2, {marginTop:"-30px", ease:Linear.easeNone,delay:.4})
				.to($('.carriage'), 1, {marginLeft:"95px", ease:Linear.easeNone, delay:.2})
				.to($('.carriage'), 1.2, {marginLeft:"158px", ease:Linear.easeNone, onComplete:carriageMove});
		}
		function carriageMove(){
			var move = new TimelineLite();
			move.to($('.carriage'), 2.5, {marginLeft:"95px", ease:Linear.easeNone})
				.to($('.b1'), 0, {visibility:"visible"})
				.to($('.zstage'), .2, {marginTop:"-22px", ease:Linear.easeNone})
				.to($('.carriage'), 2.5, {marginLeft:"158px", ease:Linear.easeNone})
				.to($('.b2'), 0, {visibility:"visible"})
				.to($('.zstage'), .2, {marginTop:"-14px", ease:Linear.easeNone})
				.to($('.carriage'), 2.5, {marginLeft:"95px", ease:Linear.easeNone})
				.to($('.b3'), 0, {visibility:"visible"})
				.to($('.zstage'), .2, {marginTop:"-6px", ease:Linear.easeNone})
				.to($('.carriage'), 2.5, {marginLeft:"158px", ease:Linear.easeNone})
				.to($('.b4'), 0, {visibility:"visible"})
				.to($('.zstage'), .2, {marginTop:"2px", ease:Linear.easeNone})
				.to($('.carriage'), 2.5, {marginLeft:"80px", ease:Linear.easeNone})
				.to($('.b5'), 0, {visibility:"visible"})
				.to($('.zstage'), .2, {marginTop:"10px", ease:Linear.easeNone})
				.to($('.carriage'), 2.5, {marginLeft:"158px", ease:Linear.easeNone})
				.to($('.b6'), 0, {visibility:"visible"})
				.to($('.zstage'), .2, {marginTop:"18px", ease:Linear.easeNone})
				.to($('.carriage'), 2.5, {marginLeft:"80px", ease:Linear.easeNone})
				.to($('.b7'), 0, {visibility:"visible"})
				.to($('.zstage'), .2, {marginTop:"26px", ease:Linear.easeNone})
				.to($('.carriage'), 1.5, {marginLeft:"100px", ease:Linear.easeNone})
				.to($('.b8'), 0, {visibility:"visible"})
				.to($('.zstage'), .2, {marginTop:"34px", ease:Linear.easeNone})
				.to($('.carriage'), 1, {marginLeft:"80px", ease:Linear.easeNone})
				.to($('.b9'), 0, {visibility:"visible"})
				.to($('.zstage'), .2, {marginTop:"42px", ease:Linear.easeNone})
				.to($('.carriage'), 1, {marginLeft:"110px", ease:Linear.easeNone})
				.to($('.b10'), 0, {visibility:"visible"})
				.to($('.zstage'), .2, {marginTop:"50px", ease:Linear.easeNone})
				.to($('.carriage'), 1, {marginLeft:"85px", ease:Linear.easeNone})
				.to($('.b11'), 0, {visibility:"visible"})
				.to($('.carriage'), 1, {marginLeft:"121px", ease:Linear.easeNone})
				.to($('.b12'), 0, {visibility:"visible"})
				.to($('.knob'), 0, {pointerEvents:'auto'});
		}
		stageUp();
	})
	// highlight multiple names at once
	$(".names").mousedown(function(e){
	    e.preventDefault();
	    var scroll = this.scrollTop;
	    e.target.selected = !e.target.selected;
	    this.scrollTop = scroll;
	    $(this).focus();
	}).mousemove(function(e){
		e.preventDefault()
	});
});