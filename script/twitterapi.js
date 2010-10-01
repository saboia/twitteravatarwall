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
					$("#container").append(formattedTweet(index,item));
				})
			}
	);
	
	function formattedTweet(index, item){
		
		var tweet = $("<div>", {"id": item.id, "class": "tweet"})
		var avatar = $("<img>", {"src": item.profile_image_url, "class": "avatar"});
		
		tweet.append(avatar);
		
		return tweet;
	}
})
