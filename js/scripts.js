$(function() {
	// form elements obtained targeting by element and id
	var form = $('form');
	var submit = form.find('#form-submit');
	var name = form.find('#form-name')[0];
	var email = form.find('#form-email')[0];
	var message = form.find('#form-message')[0];

	// strings used for composing the email message
	var targetEmail = 'mailto:nenopantic@gmail.com';
	var subject = '?subject=Guest book entry';
	var href = '';
	var body = '&body=';

	// event which fires on clic submit button in the form
	submit.on('click', function () {
		// if input fields are not empty, add the value to body
		if (name.value) {
			body += 'From:' + name.value + '; ';
		}
		if (email.value) {
			body += 'Email:' + email.value + '; ';
		}
		if (message.value) {
			body += 'Message:' + message.value + '; ';
		}

		// we concatenate all segments together
		href = targetEmail + subject + body;

		// finally we send the message via url, bringing the users default email client with pre-populated fields
		window.location.href = href;

		//reset values
		href = '';
		body = '&body=';
	})
});