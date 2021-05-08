const slides = document.querySelectorAll(".slidshow-item");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;
const action = (n) => {
	slides.forEach((slide) => {
		slide.style.display = "none";
		dots.forEach((dot) => {
			dot.classList.remove("active");
		});
	});

	slides[n].style.display = "block";
	dots[n].classList.add("active");
};
document.addEventListener("DOMContentLoaded", action(currentSlide));
const next = () => {
	currentSlide >= slides.length - 1 ? (currentSlide = 0) : currentSlide++;
	action(currentSlide);
};
const prev = () => {
	currentSlide <= 0 ? (currentSlide = slides.length - 1) : currentSlide--;
	action(currentSlide);
};
document.querySelector(".next").addEventListener("click", next);
document.querySelector(".prev").addEventListener("click", prev);

const paragraph = document.querySelector("p");

const changeTextColor = () => {
	const color = Math.random() > 0.5 ? "yellow" : "blue";
	paragraph.innerHTML = paragraph.innerText
		.split(" ")
		.map((word) =>
			word.length > 8
				? `<span style="background-color: ${color}">${word}</span>`
				: word
		)
		.join(" ")
		.replace(/\?/gi, "🤔")
		.replace(/\!/gi, "😲");
};

setInterval(() => {
	changeTextColor();
}, 1000);
