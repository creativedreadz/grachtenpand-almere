(function() {

	var hamburger = {
		navToggle: document.querySelector('.nav-toggle'),
		nav: document.querySelector('.nav-mob'),
		body: document.querySelector('.body'),

		doToggle: function(e) {
			e.preventDefault();
			this.navToggle.classList.toggle('is-active');
			this.nav.classList.toggle('is-active');
			this.body.classList.toggle('is-fixed');
		}
	};

	hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
	// hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });

}());