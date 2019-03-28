$(function(){ //HTML-objekter
	var $searchTermTxt;

	function settHTMLObjekter(){
		$searchTermTxt = $("#searchTermTxt");
	};

	function settEvents(){
		$searchTermTxt.keyup(function(){
			var searchTerm = $(this).val().toLowerCase();

			$("#webtemaer article h3").each(function(){
				var textInH3 = $(this).text().toLowerCase(); //text()/html()

				//vil være -1 hvis ikke finnes, f.o.m. 0 hvis finnes
				var searchFound = textInH3.indexOf(searchTerm);

				if(searchFound>-1){
					//forbli vist/vises
					$(this).parent().dequeue().fadeTo(500, 1);
				}else{
					//gjemme
					$(this).parent().dequeue().fadeTo(500, 0.3);
				}
			});
		});
	};

	var init = function(){
		settHTMLObjekter();
		settEvents();
	}();
});
