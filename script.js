// Rating buttons
let buttons = document.querySelectorAll('input[type="button"]');

// Add 'click' listener to every button
buttons.forEach( function(button) {
	button.addEventListener('click', function() {

		// Remove 'selected' class from every button
		buttons.forEach( function(button) {
			button.classList.remove('selected');
		});

		// Add 'selected' class to clicked button
		button.classList.add('selected');

		// Change rating
		rating.innerHTML = button.value;

	}, false);
});


// Submit button
let submit = document.querySelector('input[type="submit"]');

// Add 'click' event to submit button
submit.addEventListener('click', function() {
	// Hide rating card
	ratingCard.classList.add('hiding');

	setTimeout( function(){
		// Change rating card from 'hiding' to 'hidden'
		ratingCard.classList.remove('hiding');
		ratingCard.classList.add('hidden');

		// Show thank you card
		thankYouCard.classList.remove('hidden');
	}, 500);
}, false);