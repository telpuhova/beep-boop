var beepBoop = function(number) {
	var result = [];
	for (var i=0; i <= number; i++) {
		result.push(i);
	}
	return result;
}


$("document").ready(function() {
	$("#formBeep").submit(function(event) {
		event.preventDefault();
		var number = $("#number").val();
		var result = beepBoop(number);
		$(".result").text(result);
	});
});
