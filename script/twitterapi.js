$(function(){
	$.getJSON(
			"http://search.twitter.com/search.json?callback=?",
			{
				"q":"globo",
				"rpp": "100",
				"lang": "pt-BR",
				"result_type" : "mixed",
				"geocode" : "-23.559326,-46.658807,300km"
			},
			function(data, textStatus){
				$.each(data.results, function(index, item){
					$("#container").append()
				})
			}
	);
	
})
