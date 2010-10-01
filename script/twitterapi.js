$(function(){
	$.getJSON(
			"http://search.twitter.com/search.json?callback=?",
			{
				"q":"globo",
				"rpp": "100",
				"lang": "pt-BR",
				"result_type" : "mixed"
			},
			function(data, textStatus){
				$.each(data.results, function(index, item){
					$("#container").append(formattedTweet(index,item));
				})
			}
	);
	
	function formattedTweet(index, item){
		var tweet = $("<div>", {"id": item.id, "class": "tweet"})
		
		return tweet;
	}
})
