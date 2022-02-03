<?php
	
	$connect = mysqli_connect('localhost', 'root', '', 'wayup-shop');

	if (!$connect) {
		echo "DB Error";
	}
}