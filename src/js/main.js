const colors = [
	'rgba(0, 255, 8, .5)',
	'rgba(255, 213, 0, .5)',
	'rgba(0, 255, 247, .5)',
	'rgba(255, 0, 0, .5)',
	'rgba(119, 0, 255, .5)',
	'rgba(255, 0, 196, .5)',
	'rgba(153, 255, 0, .5)',
	'rgba(246, 255, 0, .5)',
	'rgba(255, 146, 0, .5)',
	'rgba(145, 145, 145, .5)',
	'rgba(0, 0, 255, .5)',
	'rgba(255, 0, 70, .5)'
];

let circles = document.querySelectorAll('.subjects__circle');

circles.forEach((item, index) => {
	item.style.backgroundColor = colors[index];
});