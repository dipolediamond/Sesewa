(function() {
	/*landing page interaction*/
	var recordCount, trade, location;
	recordCount = 3;
	//trade selected
	$("#select-trade").change(function(){
		trade = $("#trade").val();
		$("#select-trade").hide();
		$("#select-location").removeClass("hidden");
	});
	//location selected
	$("#select-location").change(function(){
		location = $("#location").val();
		$("#select-location").hide();
		$("#result-count").text(recordCount);
		$("#search-trade").text(trade);
		$("#search-location").text(location);
		$(".search-results").removeClass("hidden");
		if(recordCount > 0){
			$(".artisans").removeClass("hidden");
		}
		else{
			$("#result-count").text("no");
			$(".no-result-action").removeClass("hidden");
			//if guest
			//$(".guest-message").removeClass("hidden");
			//if logged in user
			$(".user-message").removeClass("hidden");
		}
	});
})();
