var objPrice = $('#input2').val();

var category = $('#select1').val();


function listIncome() {
	var income = $('#input1').val();
 	$('#showIncome').append(income);
}

function outputResults() {
	var answer = $('#select1').val();
	var input = $('#input2').val();
	var income = $('#input1').val();

	switch (answer) {
	  case "food":
	    $('#showFood').append(input);
	    break;
	  case "entertainment":
	    $('#showEntertainment').append(input);
	    break;
	  case "transportation":
	    $('#showTransportation').append(input);
	    break;
	  case "fixed":
	    $('#showFixed').append(input);
	    break;
	  case "mortgage":
	  	$('#showMortgage').append(input);
	  	break;
	  case "utilities":
	    $('#showUtilities').append(input);
	    break;
	  case "coffee":
	    $('#showCoffee').append(input);
	    break;
	  case "fitness":
	    $('#showFitness').append(input);
	    break;
	  case "savings":
	  	$('#showSavings').append(input);
	  	break;
	  case "alcohol":
	    $('#showAlcohol').append(input);
	    break;
	  default:
	    console.log("Default case works");
	}
	income = income - input;
	$('#showIncome').append(income);
}

$('#submit').on('click', listIncome);
$('#add').on('click', outputResults);









