document.addEventListener("DOMContentLoaded", function () {
	const message = document.createElement("p");
	message.textContent = "DOM load success";
	document.body.appendChild(message);
});
