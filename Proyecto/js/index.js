$(document).on("ready", start);
	
function start(){
	$("#container img").on("click", openFull);
	$("#imgFull").on("click", closeFull);
}

function openFull(){
	//$(this).attr('alt'));
	var name = $(this).attr('alt') + "_big";
	var address = "img/" + name + ".jpg";
	
	$("#imgFull").attr('src', address);
	$("#preview").fadeIn();
}

function closeFull(){
	$("#preview").fadeOut(); 
}