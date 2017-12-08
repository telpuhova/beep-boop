var beepBoop = function(number) {
	var result = [];
	for (var i=0; i <= number; i++) {
		// var numberString = i.toString
		var digits = (i.toString()).split("");
		flag = false;
		for (var j=0; j <= digits.length; j++) {
			if (digits[j] === "1") {
				flag = true;
			}
		}
		if (flag) {
			result.push("boop");
			flag = false;
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
