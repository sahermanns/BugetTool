var answer;
var input;
var income;

function listIncome() {
	income = $('#input1').val();
 	$('#showIncome').append(income);
}

function outputResults() {
	answer = $('#select1').val();
	input = Number($('#input2').val());

	switch (answer) {
	  case "food":
		  if (Number($('#showFood').html()) > 0) {
		  	input += Number($('#showFood').html());
		  }
		    $('#showFood').html(input);
		    input = Number($('#input2').val());
		    break;
	  case "entertainment":
	    if (Number($('#showEntertainment').html()) > 0) {
	  		input += Number($('#showEntertainment').html());
	  	}
		    $('#showEntertainment').html(input);
		    input = Number($('#input2').val());
		    break;
	  case "transportation":
	    if (Number($('#showTransportation').html()) > 0) {
	  		input += Number($('#showTransportation').html());
	  	}
		    $('#showTransportation').html(input);
		    input = Number($('#input2').val());
		    break;
	  case "fixed":
	    if (Number($('#showFixed').html()) > 0) {
	  		input += Number($('#showFixed').html());
	  	}
		    $('#showFixed').html(input);
		    input = Number($('#input2').val());
		    break;
	  case "mortgage":
	  	if (Number($('#showMortgage').html()) > 0) {
	  		input += Number($('#showMortgage').html());
	  	}
		    $('#showMortgage').html(input);
		    input = Number($('#input2').val());
		  	break;
	  case "utilities":
	    if (Number($('#showUtilities').html()) > 0) {
	  		input += Number($('#showUtilities').html());
	  	}
		    $('#showUtilities').html(input);
		    input = Number($('#input2').val());
		    break;
	  case "coffee":
	    if (Number($('#showCoffee').html()) > 0) {
	  		input += Number($('#showCoffee').html());
	  	}
		    $('#showCoffee').html(input);
		    input = Number($('#input2').val());
		    break;
	  case "fitness":
	  	if (Number($('#showFitness').html()) > 0) {
	  		input += Number($('#showFitness').html());
	  	}
		    $('#showFitness').html(input);
		    input = Number($('#input2').val());
		    break;
	  case "savings":
	  	if (Number($('#showSavings').html()) > 0) {
	  		input += Number($('#showSavings').html());
	  	}
		    $('#showSavings').html(input);
		    input = Number($('#input2').val());
		  	break;
	  case "alcohol":
	  	if (Number($('#showAlcohol').html()) > 0) {
	  		input += Number($('#showAlcohol').html());
	  	}
		    $('#showAlcohol').html(input);
		    input = Number($('#input2').val());
		    break;
	  default:
	    console.log("Default case works");
	}

	income = income - input;
	$('#showIncome').html(income);

	$('#savFood').html((($('#showFood').html()) / ($('#input1').val())) * 100);
	$('#barFood').css({width : $('#savFood').html() + "px"});
}

$('#submit').on('click', listIncome);
$('#add').on('click', outputResults);






