function lockedProfile() {
	let showButtons = document.querySelectorAll('button');
	let showButtonsArray = Array.from(showButtons);

	showButtonsArray.forEach(x => {
		x.addEventListener('click', function(e) {
			let radioButtonLocked = e.target.parentNode.querySelector(`input`);
			let hiddenField = e.target.parentNode.querySelector('div');
			if (!radioButtonLocked.checked) {
				if (x.textContent === 'Show more') {
					hiddenField.style.display = 'block';
					x.textContent = 'Hide it';
				} else if (x.textContent === 'Hide it') {
					hiddenField.style.display = 'none';
					x.textContent = 'Show more';
				}
			}
		})
	})
}