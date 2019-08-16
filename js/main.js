var navBar = document.querySelector('.headerContainer');


window.addEventListener('scroll', function(){

	if(window.pageYOffset > 100){
	navBar.classList.add('scrolled');
	}
	else{
		navBar.classList.remove('scrolled');
	}
	
});

