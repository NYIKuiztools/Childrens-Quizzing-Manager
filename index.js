document.addEventListener('DOMContentLoaded', () => {

	console.log('Hello World!');

	const personId = window.document.getElementById('personId').value;
	const button = window.document.getElementById('next');

	var type = 'spectator'; //Base type
	if (personId == 'QM') {
		type = 'qm';
	} else if (personId == 'Score') {
		type = 'score';
	} else if (personId == 'Spectator') {
		type = 'spectator';
	} else if (personId == 'Stats') {
		type = 'stats';
	} else if (personId == 'Admin') {
		type = 'admin';
	} else if (personId == 'Coach') {
		type = 'coach';
	}
	});
	
	function clicked() {
		const url = 'loginPages/' + type + '.html';
		console.log("Clicked");
		window.location.href = url;
		console.log('Redirecting to: ' + url);
	}

	button.addEventListener('click', clicked()); 