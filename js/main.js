"use strict";

const swiper = new Swiper('.skills-carousel', {
  loop: true,
	slidesPerView: 1,
	slidesPerGroup: 1,
	grabCursor: true,
  navigation: {
    nextEl: '.skills-carousel__navigation_next',
    prevEl: '.skills-carousel__navigation_prev',
  },
	breakpoints: {
		380: {
			slidesPerView: 2,
			slidesPerGroup: 2,
		},
		520: {
			slidesPerView: 3,
			slidesPerGroup: 3,
		},
		650: {
			slidesPerView: 4,
			slidesPerGroup: 4,
		},
		768: {
			slidesPerView: 2,
			slidesPerGroup: 2,
		},
		860: {
			slidesPerView: 3,
			slidesPerGroup: 3,
		},
		1160: {
			slidesPerView: 4,
			slidesPerGroup: 4,
		},
		1280: {
			slidesPerView: 5,
			slidesPerGroup: 5,
		}
	},
});


//mail send form
document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById('mail-form');
	form.addEventListener("submit", formSend);

	async function formSend(e) {
		e.preventDefault();
	 
		const formData = new FormData(form);
		let response = await fetch('sendmail.php', {
			method: "POST",
			body: formData,
		})

		if (response.ok) {
			let result = await response.json();
			alert(result.message);
			form.reset();
		} else {
			alert("error")
		}
	 }
});


