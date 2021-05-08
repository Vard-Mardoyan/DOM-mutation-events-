const input = document.querySelector(".inp");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
	if (input.value.trim() !== "") {
		const todo_container = document.querySelector(".todo-container");
		const todolist_input = document.createElement("input");
		todolist_input.style.border = "1px solid red";
		todolist_input.style.background = "none";
		todo_container.appendChild(todolist_input);
		const container = document.querySelector(".container");
		const submit_icon = document.querySelectorAll("i")[0];
		const edit_icon = document.querySelectorAll("i")[1];
		const delete_icon = document.querySelectorAll("i")[2];

		const submitButton = document.createElement("button");
		submitButton.style.border = "none";
		submitButton.style.background = "none";
		submit_icon.style.display = "block";
		container.appendChild(submitButton);
		submitButton.appendChild(submit_icon);

		const editButton = document.createElement("button");
		editButton.style.border = "none";
		editButton.style.background = "none";
		edit_icon.style.display = "block";
		container.appendChild(editButton);
		editButton.appendChild(edit_icon);

		const deleteButton = document.createElement("button");
		deleteButton.style.border = "none";
		deleteButton.style.background = "none";
		delete_icon.style.display = "block";
		container.appendChild(deleteButton);
		deleteButton.appendChild(delete_icon);

		todolist_input.value = input.value;
		console.log(container.event);
		input.value = " ";

		todo_container.appendChild(todolist_input);

		todo_container.appendChild(container);

		// list_item.addEventListener("click", (event) => {
		// 	// event.target.classList.toggle("checked");
		// 	event.target.remove();
		// });
	}
});
input.addEventListener("input", (event) => {
	if (event.target.value.trim() !== "") {
		btn.removeAttribute("disabled");
	}
});
