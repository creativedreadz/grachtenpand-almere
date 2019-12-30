(function() {

	var hamburger = {
		navToggle: document.querySelector('.header__menu-btn'),
		nav: document.querySelector('.header__container'),
		body: document.querySelector('.body'),

		doToggle: function(e) {
			e.preventDefault();
			this.navToggle.classList.toggle('is-clicked');
			this.nav.classList.toggle('is-visible');
			this.body.classList.toggle('no-overflow');
		}
	};

	hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
	// hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });

}());