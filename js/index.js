function putElements (){

	var params = {
		url: 'params.json',
		dataType: 'json',
		success: function(result) {
			// 8〜10行目まで関数にする
			function trigger (){
				$.each( result, function(index, elem){
						$('.text-list').append('<li style="color:'+ elem.color +'">' + elem.text + '</li>');
				});
			}
			trigger();
		},
		error: function(){
			alert('読み込めませんでした');
		}
	}

	$.ajax(params);
}

putElements();
