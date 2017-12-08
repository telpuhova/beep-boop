var beepBoop = function(number) {
	var result = [];
	for (var i=0; i <= number; i++) {
		// var numberString = i.toString
		var digits = (i.toString()).split("");
		flag1 = false;
		flag0 = false;
		flag3 = false;
		for (var j=0; j <= digits.length; j++) {
			if (digits[j] === "1") {
				flag1 = true;
			}
			if (digits[j] === "0") {
				flag0 = true;
			}
			if (digits[j] === "3") {
				flag3 = true;
			}
		}
		if (flag1) {
			result.push("boop");
			flag1 = false;
		}
		else if (flag0) {
			result.push("beep");
		}
		else if (flag3) {
			result.push("I'm sorry, Dave. I'm afraid I can't do that.");
		}
		else {
			result.push(i);
		}
	}
	return result;
}

var inputCheck = function(number) {
	if (number.match(/[0-9]/)) {
		return true;
	}
	else {
		return false;
	}
}

$("document").ready(function() {
	$("#formBeep").submit(function(event) {
		event.preventDefault();
		var number = $("#number").val();
		if (inputCheck(number)) {
			var result = beepBoop(number);
			$("#result").text(result);
		}
		else {
			$("#result").text("please enter a number");
		}

	});
});
