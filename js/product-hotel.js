function updateCartTotal() {
	var card1 = document.getElementByClassName("two-person");
	var displayText = card1.options[card1.selectedIndex].text;
	document.getElementByClassName('total').value = displayText;
}
