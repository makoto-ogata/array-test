function putElements (){

	var params = {
		url: 'tweets.json',
		dataType: 'json',
		success: function(result) {
				$.each( result, function(index, elem){
						$('<dt>'+ elem.name +'</dt><dd>' + elem.body + '</dd>').appendTo('.tweet-area');
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
