var beepBoop = function(number) {
	var result = [];
	for (var i=0; i <= number; i++) {
		if (i === 1) {
			result.push("boop");
		}
		else if (i === 0) {
			result.push("beep");
		}
		else if (i === 3) {
			result.push("I'm sorry, Dave. I'm afraid I can't do that.");
		}
		else {
			result.push(i);
		}
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
