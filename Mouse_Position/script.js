onmousemove = function (e) {
	let dot;
	dot = document.createElement("div");
	dot.className = "dot";
	dot.style.left = e.x + "px";
	dot.style.top = e.y + "px";
	document.body.appendChild(dot);
};
