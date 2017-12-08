var beepBoop = function(number, reverse, name) {
	var result = [];
	for (var i=0; i <= number; i++) {
		// var numberString = i.toString
		var digits = (i.toString()).split("");
		flag1 = false;
		flag0 = false;
		for (var j=0; j <= digits.length; j++) {
			if (digits[j] === "1") {
				flag1 = true;
			}
			if (digits[j] === "0") {
				flag0 = true;
			}
		}
		if (flag1) {
			result.push("boop");
			flag1 = false;
		}
		else if (flag0) {
			result.push("beep");
		}
		else if (i % 3 === 0) {
			result.push("<em>I'm sorry, " + name + ". I'm afraid I can't do that.</em>");
		}
		else {
			result.push("<span class='num'>" + i + "</span>");
		}
	}
	if (reverse === "reverse") {
		result.reverse();
	}
	return result.join(" ");
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

		$("#result").empty();
		$(".result").hide();

		var name = $("#name").val();
		var reverse = $("input:checkbox[name=reverse]:checked").val();
		var number = $("#number").val();

		if (inputCheck(number)) {
			var result = beepBoop(number, reverse, name);
			$("#result").append(result);
			$(".result").fadeIn();
		}
		else {
			$("#result").append("<em>please enter a number</em>");
			$(".result").fadeIn();
		}

	});
});
