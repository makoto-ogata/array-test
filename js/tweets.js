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
		},
		beforeSend: function(){
			$('.more-button').prop('disabled', true);
			$('.more-button').text('通信中...');
		},
		complete: function(){
			$('.more-button').text('もっと読む');
			$('.more-button').prop('disabled', false);
		}
	}

	$.ajax(params);
}

putElements();

$('.more-button').on('click', function(){
		putElements();
});
