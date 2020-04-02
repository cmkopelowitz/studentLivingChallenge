function getChallenge() {
	var arr = ["Tell someone why you admire them",
		"Message someone you haven't reached out to in a while",
		"Email one of your teachers and tell them you are excited for the semester or thank them for their time",
		"Write a thank you note to someone",
		"Ask someone about their hobbies",
		"Learn about a trial someone has gone through that changed their life",
		"Clean up something in your living space",
		"Donate something",
		"Highlight someone on social media",
		"Call a loved one",
		"Pray for someone you have negative feelings for",
		"Dress up nice today",
		"Do something outside today",
		"Have a kneeling prayer today",];

		return arr[Math.floor(Math.random() * arr.length)];
}

$(document).ready(function () {
	//$('#displayChallenge').hide();

	$('#btn-challenge').click(() => {
		//$('#getChallenge').hide();
		$('#output').html(getChallenge()); 
		//$('#displayChallenge').show();
	});

	$('#anotherChallenge').click( ()=> {
		$('#output').html(getChallenge());
	});


});




