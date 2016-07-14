$( document ).ready(function() {

	// DESKTOP
	$("#paragraphButton").on("click", function() {
		console.log("paragraph button click");
	    $("#paragraphButton img").css("display", "block");
	    $("#sentenceButton img").css("display", "none");
	});

	$("#sentenceButton").on("click", function() {
	    $("#sentenceButton img").css("display", "block");
	    $("#paragraphButton img").css("display", "none");
	});

	// SLIDER SELECT
	$('.numberSlider').ionRangeSlider({
	    min: 1,
	    max: 6,
	    from: 1
	});

	// SET VARIABLE FOR SLIDER NUMBER
	var sliderNumber;

	$('.numberSlider').on('change',function() {
		sliderNumber = this.value;
		console.log(this.value);
	});

	//FIND USER'S SENTENCE/PARAGRAPH SELECTION 

	$('.button').on('click',function() {
		var userSelection = ($(this).find('input')[0]).value;
		var textArray = text[userSelection];
		// console.log(textArray);
		// CHOOSE RANDOM NUMBERED ITEM FROM ARRAY

		function getRandom(arr) {
		  return arr[Math.floor(Math.random() * arr.length)];
		}
		function grabRandomItems(count, sourceArray) {
		  var outputArray = [];
		  while (count) {
		    for(;;) {
		      var item = getRandom(sourceArray);
		      if (outputArray.indexOf(item) === -1) {
		        outputArray.push(item);
		        break;
		      }
		    }
			count--;
			}
			return result;
			console.log(outputArray);
		}
		// if (arraySelection)
		// var resultsToPage = textArray[arraySelectionNumber];
		// console.log(resultsToPage);	
		// $(".ipsumTextOutput").text(resultsToPage);
		// $(".ipsumOutput").append(`<p>${resultsToPage}</p>`);
		}
		
		grabRandomItems(sliderNumber, textArray);
		// DISPLAY ON PAGE


	// MOBILE

	// SET VARIABLE FOR INPUT NUMBER
	var numberSelect;

	// PLUS/MINUS SELECT
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

	//FIND USER'S SENTENCE/PARAGRAPH SELECTION 

	// var resultsToPost;

	$('[name="selection"]').on('click',function() {
		var textArray = text[this.value];
		// CHOOSE RANDOM NUMBERED ITEM FROM ARRAY

		for (var i = 0; i < numberSelect; i++) {
		var arraySelection = Math.floor(Math.random() * (textArray.length) + 1);
		var resultsToPost = (textArray[arraySelection])
		// DISPLAY ON PAGE
		// $(".ipsumOutput").append(`<p>${resultsToPost}</p>`);
		// console.log(resultsToPost);	
		}

	});

//DISPLAY WORDS ON PAGE
});

// SHOW/HIDE ON WINDOW RESIZE

// var screenSize = $(window).width();
// if (screenSize < 600px) {}





