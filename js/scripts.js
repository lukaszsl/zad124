$(function() {
var url = 'http://api.icndb.com/jokes/random',
	$paragraph = $('#joke'),
	$button = $('#get-joke').click(function() {
		getJoke();
	});

function getJoke() {
	$.ajax({
		method: 'GET',
		url: url,
		success: function(res){
			$paragraph.text(res.value.joke);
		}
	});
}

$button.click();
});