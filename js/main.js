$(document).ready(function(){

	TweenMax.staggerTo(".heroChild", 1, {y:0, opacity:1, ease:Power1.easeOut}, 0.1);

	var controller = new ScrollMagic.Controller();
	var opportunityAnimation = new TimelineMax();
	var featuresAnimation = new TimelineMax();

	opportunityAnimation.staggerTo(".old .opportunity", .8, {y:0, opacity: .8, ease: Power4.easeOut,}, 0.1)
	.staggerTo(".new .opportunity", 1, {y:0, opacity: .8, ease: Power4.easeOut,}, 0.1);

	featuresAnimation.staggerFrom(".feature", .8, {y:50, opacity: 0, ease:Power1.easeOut}, 0.2);

	var scene = new ScrollMagic.Scene({
		triggerElement: ".comparison",
		triggerHook: 0
	})
	.setTween(opportunityAnimation)
	.addTo(controller);

	var scene2 = new ScrollMagic.Scene({
		triggerElement: ".textContent p",
		triggerHook: 0
	})
	.setTween(featuresAnimation)
	.addTo(controller);






});