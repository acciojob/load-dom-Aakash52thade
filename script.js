//your JS code here. If required.

function domLoaded() {
	let str = document.createElement('p');
	str.textContent = "Dom load Success";
	document.body.appendChild(str);
}

document.addEventListener("DOMContentLoaded", domLoaded);