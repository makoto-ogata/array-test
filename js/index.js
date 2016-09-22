var params = [
	{ text: 'あいうえお', color:'#ff0000'},
	{ text: 'かきくけこ', color:'#ffbf7f'},
	{ text: 'さしすせそ', color:'#f34aab'},
	{ text: 'たちつてと', color:'#5f8833'},
	{ text: 'なにぬねの', color:'#8bcffc'},
];

function putElements (){
	$.each( params, function(index, elem){
			$('<li style="color:'+ elem.color +'">' + elem.text + '</li>').appendTo('.text-list');
		});
}

putElements();
