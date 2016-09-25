//Check off an item from the list
$("ul").on("click", "li", function () {
	$(this).toggleClass('completed');
})

//Delete event handling
$("ul").on("click", "span",function (event) {
	event.stopPropagation();
	$(this).parent().fadeOut(500, function () {
		$(this).remove();
	});
})

//Event handler for adding items to the list
$("input[type='text'").keypress(function(event) {
	if(event.which === 13){
		//retrieve text from the input
		var inputText = $(this).val();
		//Create a new li for the ul
		$('ul').append("<li> <span>X</span> " + inputText + "</li>");
		$(this).val("");
	}	
});