// ==UserScript==
// @name        szervezo-login
// @namespace   https://mapei.instantwork.hu
// @include     https://mapei.instantwork.hu/_szervezo.php  
// @version     1
// @grant       none
// ==/UserScript==

$( document ).ready(function() {
	document.getElementsByName('user')[0].value = "boss";
	document.getElementsByName('password')[0].value = "F#tcW7T>d:*!VfC5";
	document.getElementById('submit').focus();
	var sub=document.getElementById('submit');
	sub.click();
});