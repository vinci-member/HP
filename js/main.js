const stalker = document.getElementById('stalker');
document.addEventListener('mousemove', (e) => {
	stalker.style.transform =
		'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});

const a = document.querySelectorAll('a');

a.forEach((e) => {
	e.addEventListener('mouseenter', () => {
		stalker.classList.add('active');
	});
	e.addEventListener('mouseleave', () => {
		stalker.classList.remove('active');
	});
});

const tl = new TimelineMax();

tl.from('.main__title span', 3.6, {
	y: 120,
	ease: 'power4.out',
	delay: 1,
	stagger: {
		amount: 0.3,
	},
});

tl.from('.main__sub span', 1.8, {
	y: 30,
	ease: 'power4.out',
	delay: -2,
	stagger: {
		amount: 0.3,
	},
});

const scrollanime = document.querySelectorAll('.scrollanime');
window.addEventListener('scroll', () => {
	scrollanime.forEach((e) => {
		const rect = e.getBoundingClientRect().top;
		const scroll = window.pageYOffset || document.documentElement.scrollTop;
		const offset = rect + scroll;
		const windowHeight = window.innerHeight; // 現在のブラウザの高さ
		if (scroll > offset - windowHeight + 150) {
			e.classList.add('fadeInDown');
		}
	});
});

// humberger menu
const hum = document.querySelector('.hamburger');
hum.addEventListener('click', (e) => {
	hum.classList.toggle('active');

	const hasactive = hum.classList.contains('active');
	const gmenusp = document.querySelector('.globalMenuSp');

	if (hasactive) {
		gmenusp.classList.add('active');
	} else {
		gmenusp.classList.remove('active');
	}
});

//loading animation
window.onload = function () {
	const spinner = document.getElementById('loading');

	// Add .loaded to .loading
	spinner.classList.add('loaded');
};





//////////////////
// const a = document.getElementById('target');
// console.log(a.href);