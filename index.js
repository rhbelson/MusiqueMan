window.onload=function() {
	var w=document.getElementById("rnncontbutt");
  	w.addEventListener("click",cont);
}

function cont() {
	document.getElementById("rnn_cont").hidden=false;
	location.replace("#rnn_cont");
}