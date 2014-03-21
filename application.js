cont = 0;
jogadorX = 0;
jogadorO = 0;
tabuleiro = [[], [], []];
marcar = function(e) {
	x = parseInt(e.id[2]);
	y = parseInt(e.id[4]);
	if (cont < 9) {
		var jogador;
		if (tabuleiro[x][y] != null) {
			return;
		}
		if (cont % 2 == 0) {
			jogador = "X";
		} else {
			jogador = "O";
		}
		e.innerHTML = jogador;
		tabuleiro[x][y] = jogador;
		cont++;
		verificarGanhador();
	} else {
		limparJogo();
	}
};
limparJogo = function() {
	cont = 0;
	tabuleiro = [[], [], []];
	for ( i = 0; i < 3; i++) {
		for ( j = 0; j < 3; j++) {
			e = document.getElementById("c_" + i + "_" + j);
			e.innerHTML = "";
		}
	}
};
verificarGanhador = function() {
	for ( i = 0; i < 3; i++) {
		if (tabuleiro[i][0] == tabuleiro[i][1] && tabuleiro[i][0] == tabuleiro[i][2]) {
			if (tabuleiro [i][0] == "X") {
				alert("X ganhou");
				limparJogo();
				jogadorX++;
			}
			if (tabuleiro [i][0] == "O") {
				alert("O ganhou");
				limparJogo();
				jogadorO++;
			}
		}
	}
	for ( i = 0; i < 3; i++) {
		if (tabuleiro[0][i] == tabuleiro[1][i] && tabuleiro[0][i] == tabuleiro[2][i]) {
			if (tabuleiro [0][i] == "X") {
				alert("X ganhou");
				limparJogo();
				jogadorX++;
			}
			if (tabuleiro [0][i] == "O") {
				alert("O ganhou");
				limparJogo();
				jogadorO++;
			}
		}
	}
	if (tabuleiro[0][0] == tabuleiro[1][1] && tabuleiro[0][0] == tabuleiro[2][2]) {
		if (tabuleiro [0][0] == "X") {
			alert("X ganhou");
			limparJogo();
			jogadorX++;
		}
		if (tabuleiro [0][0] == "O") {
			alert("O ganhou");
			limparJogo();
			jogadorO++;
		}
	}
	if (tabuleiro[0][2] == tabuleiro[1][1] && tabuleiro[0][2] && tabuleiro[2][0]) {
		if (tabuleiro [0][2] == "X") {
			alert("X ganhou");
			limparJogo();
			jogadorX++;
		}
		if (tabuleiro [0][2] == "O") {
			alert("O ganhou");
			limparJogo();
			jogadorO++;
		}
	}
};
function getCookieX(X) {
	jogadorX = X + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(jogadorX) == 0)
			return c.substring(jogadorX.length, c.length);
	}
	return "";
}

function getCookieY(Y) {
	jogadorY = Y + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(jogadorY) == 0)
			return c.substring(jogadorY.length, c.length);
	}
	return "";
}

function setCookieX(jogadorX, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toGMTString();
	document.cookie = jogadorX + "=" + cvalue + "; " + expires;
}

function setCookieY(jogadorY, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toGMTString();
	document.cookie = jogadorY + "=" + cvalue + "; " + expires;
}