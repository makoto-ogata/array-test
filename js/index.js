function putElements (){

	var params = {
		url: 'params.json',
		dataType: 'json',
		success: function(result) {
			console.log(result);
			// 8〜10行目まで関数にする
			$.each( result, function(index, elem){
					$('.text-list').append('<li style="color:'+ elem.color +'">' + elem.text + '</li>');
			});
			//var list1 = $('<li style="color:'+ elem.color +'">' + elem.text + '</li>').appendTo('.text-list');
			//$(list1).addClass('test');
		},
		error: function(){
			alert('読み込めませんでした');
		}
	}

	$.ajax(params);
}

putElements();
