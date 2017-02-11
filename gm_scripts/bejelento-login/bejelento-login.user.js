// ==UserScript==
// @name        bejelento-login
// @namespace   https://bejelento.mapei.instantwork.hu
// @include     https://bejelento.mapei.instantwork.hu/wp-login.php
// @version     1
// @grant       none
// ==/UserScript==

var login = document.getElementById("loginform");
login.elements.namedItem("user_login").value = "boss";
login.elements.namedItem("user_pass").value = "F#tcW7T>d:*!VfC5";
login.submit();