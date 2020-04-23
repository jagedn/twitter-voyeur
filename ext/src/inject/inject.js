
chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {		
            clearInterval(readyStateCheckInterval);
            var readyStateCheckInterval = setInterval(function() {                
                var divs = document.body.querySelectorAll('[data-testid=reply],[data-testid=retweet]');
                [].forEach.call(divs, function(div) {
                    div.style.visibility = "hidden";
                  });
            }, 5000)			
		}
	}, 10);
});