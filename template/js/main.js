(function() {
	/*landing page interaction*/
	var trade, location;
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
		$("#result-count").text("3");
		$("#search-trade").text(trade);
		$("#search-location").text(location);
		$(".search-results").removeClass("hidden");
	});
})();
