function updateCartTotal() {
	if ("two-person"== "card-1")
		document.getElementsByClassName("total").innerHTML = "680000 تومان"; 
}else if ("two-person"== "card-2"){
	document.getElementsByClassName("total").innerHTML = "1300000 تومان";
}

//  var card1 = document.getElementByClassName("two-person");
//	var displayText = card1.options[card1.selectedIndex].text;
//	document.getElementByClassName('total').value = displayText;
