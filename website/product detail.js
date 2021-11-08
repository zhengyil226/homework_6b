var cost = 6.5;
var size_cost = 0;
var glazing_cost = 0;
var qty = 1;

/* Update price according to user selection. */

function updatePrice(button){
	if (button == 1) {
		size_cost = 0;
	}
	if (button == 2) {
		size_cost = 4;
	}
	if (button == 3) {
		glazing_cost = 0;
	}
	if (button == 4) {
		glazing_cost = 0.5;
	}
	if (button == 5) {
		glazing_cost = 0.5;
	}
	if (button == 6) {
		glazing_cost = 1;
	}
	displayPrice();
}

/* Display updated price in the add to cart button. */

function displayPrice(){
	document.getElementById("cost").innerText = "$" + (cost + size_cost + glazing_cost).toFixed(2);
}

/* When clicking on add to cart, cart menu is updated. */

function add(){
	qty = 2;
	document.getElementById("numItem").innerText = qty;
	var oldNumItem = document.getElementById('numItem_old');
	var oldItems = document.getElementById('items_old');
	oldNumItem.style.display = 'none';
	oldItems.style.display = 'none';
	var newNumItem = document.getElementById('numItem_new');
	var newItems = document.getElementById('items_new');
	newNumItem.style.display = 'block';
	newItems.style.display = 'block';
	var item2 = document.getElementsByClassName('item2');
	for (var i = 0; i < item2.length; i ++){
		item2[i].style.display = "block";
	}
	document.getElementById('item2Price').innerText = "$" + (cost + size_cost + glazing_cost).toFixed(2);
	document.getElementById('totalCost').innerText = (16.5 + cost + size_cost + glazing_cost).toFixed(2);
}

function remove(){
	qty = 1;
	document.getElementById("numItem").innerText = qty;
	var oldNumItem = document.getElementById('numItem_old');
	var oldItems = document.getElementById('items_old');
	oldNumItem.style.display = 'block';
	oldItems.style.display = 'block';
	var newNumItem = document.getElementById('numItem_new');
	var newItems = document.getElementById('items_new');
	newNumItem.style.display = 'none';
	newItems.style.display = 'none';
	var item2 = document.getElementsByClassName('item2');
	for (var i = 0; i < item2.length; i ++){
		item2[i].style.display = "none";
	}
	document.getElementById('totalCost').innerText = 16.5.toFixed(2);
}

/* Display or hide cart menu */

function showMenu() {
	var cartMenu = document.getElementsByClassName('cartMenu');
	var i;
	for (i = 0; i < cartMenu.length; i++){
		if (cartMenu[i].style.display == 'none'){
			cartMenu[i].style.display = 'block';
		} else {
			cartMenu[i].style.display = 'none';
		}
	}
}