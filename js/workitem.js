// スマホテキスト内容

//upper js
const upper = document.querySelector('.up_btn');
const wright = document.querySelector('.workitem__right');
upper.addEventListener('click', () => {
	wright.classList.toggle('upper');
	const hsup = wright.classList.contains('upper');
	if (hsup) {
		upper.innerHTML = '<i class="fas fa-angle-down"></i>';
	} else {
		upper.innerHTML = '<i class="fas fa-angle-up"></i>';
	}
});

const ClassSlideshow = document.querySelector('.slideshow');
const Slidewindow = document.querySelector('.slidewindow');
const img = document.querySelectorAll('#slide');

for (let i = 0; i < img.length; i++) {
	let src = img[i].getAttribute('src');
	img[i].addEventListener('click', () => {
		Slidewindow.setAttribute('id', 'slidewindow');
		ClassSlideshow.setAttribute('id', 'slideshow');
		ClassSlideshow.setAttribute('src', src);
	});
	Slidewindow.addEventListener('click', () => {
		Slidewindow.removeAttribute('id', 'slidewindow');
		ClassSlideshow.removeAttribute('id', 'slideshow');
		ClassSlideshow.removeAttribute('src', src);
	});
}

//////////////////////////////iframe
const iframe = document.querySelector('iframe')
iframe.addEventListener('mouseenter',(e)=>{
	point.style.opacity = 0
})
iframe.addEventListener('mouseleave',(e)=>{
	point.style.opacity = 1
})
