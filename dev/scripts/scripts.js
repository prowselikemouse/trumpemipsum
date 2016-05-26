$( document ).ready(function() {

	// SLIDER SELECT
	$('.numberSlider').ionRangeSlider({
	    min: 1,
	    max: 6,
	    from: 1
	});

	// SET VARIABLE FOR INPUT NUMBER
	var numberSelect;

	// PLUS+MINUS- SELECT
	//FIND USER'S LENGTH SELECTION
	$('.plus, .minus').on('click', function() {

		// ASSIGN VALUE TO INPUT NUMBER VARIABLE
		numberSelect = parseInt($('#numberSelect').val());
		
		// MAKE SURE VALUE ENTERED IS A NUMBER, IF NOT CHANGE TO 1
		if (isNaN(numberSelect)) {
			numberSelect = 1;
		}

		// INCREMENT NUMBER BASED ON ITS DATASET
		numberSelect += parseInt($(this).data('increment'));

		// IF THE NEXT NUMBER IS LESS THAN 1 OR GREATER THAN 6, STOP THE FUNCTION FROM RUNNING
		if(numberSelect < 1 || numberSelect > 6) {
			return; // STOP THE FUNCTION FROM RUNNING
		}

		$('#numberSelect').val(numberSelect);
		console.log(numberSelect);
	});

	var sliderNumber = parseInt($('.irs-single').text());
	console.log(sliderNumber);

	//FIND USER'S SENTENCE/PARAGRAPH SELECTION 
	$('[name="selection"]').on('click',function() {
		var textArray = text[this.value];
		// CHOOSE RANDOM NUMBERED ITEM FROM ARRAY

		for (var i = 0; i < numberSelect; i++) {
		var arraySelection = Math.floor(Math.random() * (textArray.length) + 1);
		console.log(textArray[arraySelection]);	
		}

		// DISPLAY ON PAGE

	});





//DISPLAY WORDS ON PAGE
});


