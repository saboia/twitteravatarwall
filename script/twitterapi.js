$(function(){
	$.getJSON(
			"http://search.twitter.com/search.json?callback=?",
			{
				"q":"carol",
				"rpp": "100",
				"lang": "pt-BR",
				"result_type" : "mixed",
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
		
		var text = $("<p>", {"class": "text"});
		
		text.html("<strong>" + item.from_user + ":<strong> " + item.text);
		
		tweet.append(avatar).append(text);
		
		return tweet;
	}
})
