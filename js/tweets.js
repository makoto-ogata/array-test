function putElements (){

	var params = {
		url: 'tweets.json',
		dataType: 'json',
		success: function(result) {
				$.each( result, function(index, elem){
						$('.tweet-area').append('<dt>'+ elem.name +'</dt><dd>' + elem.body + '</dd>');
				});
		},
		error: function(){
			alert('読み込めませんでした');
		}
	}

	$.ajax(params);
}

putElements();

$('.more-button').on('click', function(){
		putElements();
});
