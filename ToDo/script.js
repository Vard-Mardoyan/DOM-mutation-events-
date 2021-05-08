const input = document.querySelector(".inp");
const btn = document.querySelector(".btn");

btn.addEventListener("click", addList);
// input.addEventListener("keyup", (e) => {
// 	e.keyCode === 13 ? addList(e) : null;
// });

function addList(e) {
	const notCompleted = document.querySelector(".notCompleted");
	const completed = document.querySelector(".completed");
	const liNotCompleted = document.createElement("li");
	const inpNotCompleted = document.createElement("input");
	const submitBtn = document.createElement("button");
	const editBtn = document.createElement("button");
	const delBtn = document.createElement("button");

	inpNotCompleted.style.border = "none";
	inpNotCompleted.style.background = "none";
	inpNotCompleted.style.padding = "5px";

	submitBtn.innerHTML =
		'	<i class="fa fa-check-square-o" aria-hidden="true"></i>';
	editBtn.innerHTML =
		'<i class="fa fa-pencil-square-o" aria-hidden="true"></i>';
	delBtn.innerHTML = '<i class="fa fa-trash"></i>';
	if (input.value !== "") {
		inpNotCompleted.value = input.value;
		input.value = "";
		notCompleted.appendChild(liNotCompleted);
		liNotCompleted.appendChild(submitBtn);
		liNotCompleted.appendChild(editBtn);
		liNotCompleted.appendChild(delBtn);
		liNotCompleted.appendChild(inpNotCompleted);
	}

	editBtn.addEventListener("click", function () {
		const parent = this.parentNode;
		console.log(parent);
		inpNotCompleted.value = "";
	});
	submitBtn.addEventListener("click", function () {
		const parent = this.parentNode;
		parent.remove();
		// completed.appendChild(parent);
		completed.appendChild(liNotCompleted);
		editBtn.style.display = "none";
		submitBtn.style.display = "none";
	});

	delBtn.addEventListener("click", function () {
		const parent = this.parentNode;
		parent.remove();
	});
}
input.addEventListener("input", (event) => {
	if (event.target.value.trim() !== "") {
		btn.removeAttribute("disabled");
	}
});
