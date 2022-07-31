function attachEventsListeners() {
	let daysButton = document.getElementById('daysBtn');
	let hoursButton = document.getElementById('hoursBtn');
	let minutesButton = document.getElementById('minutesBtn');
	let secondsButton = document.getElementById('secondsBtn');

	let daysInput = document.getElementById('days');
	let hoursInput = document.getElementById('hours');
	let minutesInput = document.getElementById('minutes');
	let secondsInput = document.getElementById('seconds');

	[seconds, minutes, hours, days] = [0, 0, 0, 0];

	let buttons = [daysButton, hoursButton, minutesButton, secondsButton];

	buttons.forEach(x => {
		x.addEventListener('click', checkButton)
	});


	function checkButton(e) {
		switch (e.target.id) {
			case 'daysBtn':
				days = Number(daysInput.value);
				hours = days * 24;
				minutes = hours * 60;
				seconds = minutes * 60;

				hoursInput.value = hours;
				minutesInput.value = minutes;
				secondsInput.value = seconds;
				break;
			case 'hoursBtn':
				hours = Number(hoursInput.value);
				days = hours / 24;
				minutes = hours * 60;
				seconds = minutes * 60

				daysInput.value = days;
				minutesInput.value = minutes;
				secondsInput.value = seconds;
				break;
			case 'minutesBtn':
				minutes = Number(minutesInput.value);
				hours = minutes / 60;
				days = hours / 24;
				seconds = minutes * 60;

				daysInput.value = days;
				hoursInput.value = hours;
				secondsInput.value = seconds;
				break;
			case 'secondsBtn':
				seconds = Number(secondsInput.value);
				minutes = seconds / 60;
				hours = minutes / 60;
				days = hours / 24;

				daysInput.value = days;
				hoursInput.value = hours;
				minutesInput.value = minutes;
				break;
		}
	}
}