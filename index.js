console.log("Welcome to the Conosle. Now go away. Thanks!");

document.addEventListener('DOMContentLoaded', function() {
	const nextButton = document.getElementById("nextButton");
	nextButton.addEventListener('click', function() {
		window.location = 'loginPages/'+(document.getElementById('personID').value)+'.html';
		console.log('clicked');
	});
});