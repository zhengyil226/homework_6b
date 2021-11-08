var cartMenu = document.getElementsByClassName('cartMenu');

function showMenu() {
	var i;
	for (i = 0; i < cartMenu.length; i++){
		if (cartMenu[i].style.display == 'none'){
			cartMenu[i].style.display = 'block';
		} else {
			cartMenu[i].style.display = 'none';
		}
	}
}