const form = document.getElementsByTagName("form")[0];
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const span = document.querySelector(".close");
const error = document.querySelectorAll(".error");
const icon = document.querySelectorAll(".fa-exclamation-triangle");

const errors = {
	email: "",
	emailRequired: "Email is required",
	emailInvalid: "Sorry, but that email is invalid",
	phone: "",
	phoneRequired: "Phone number is required",
	phoneInvalid: "It should be a number",
};

email.addEventListener("input", (event) => {
	const value = event.target.value.trim();
	const validEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (validEmail.test(value)) {
		error[0].style.display = "none";
		email.focus();
		return true;
	} else if (value === "") {
		error[0].append(errors.emailRequired);
		error[0].style.display = "block";
		email.focus();
	} else {
		error[0].style.display = "block";
		error[0].append(errors.emailInvalid);
		errors.emailInvalid;
		email.focus();
		return false;
	}
	console.log(event);
});
phone.addEventListener("input", (event) => {
	const value = event.target.value.trim();
	if (value === "") {
		error[1].style.display = "block";
		errors.phoneRequired;
		phone.focus();
	} else {
		error[1].style.display = "none";
	}
	if (!event.target.value.includes("+")) {
		event.target.value = "+".concat(event.target.value);
		return;
	}
	if (isNaN(value)) {
		console.log(event.target.value, "log");
		error[1].style.display = "block";
		errors.phoneInvalid;
		phone.focus();
	} else {
		error[1].style.display = "none";
		return true;
	}
	const normalizedValue = value
		.replace("+", "")
		.split("")
		.reduce((acc, el, index) => {
			if ((index + 1) % 4 === 0 && el !== " ") {
				return `${acc} ${el}`;
			}
			return `${acc}${el}`;
		}, "");
	event.target.value = `+${normalizedValue}`;
});
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};
btn.addEventListener("click", (event) => {
	event.preventDefault();
	console.log(error);
	if (errors) {
		modal.style.display = "block";
		modalContent.textContent = "Something is wrong";
	} else {
		modal.style.display = "block";
		modalContent.textContent = "You loged in successfully";
	}
});

span.addEventListener("click", () => {
	modal.style.display = "none";
});
