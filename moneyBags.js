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

  $('#savPercent').html((($('#showSavings').html()) / ($('#input1').val())) * 100);
  $('#barSavings').css({width : $('#savPercent').html() + "px"});
  if ($('#barSavings') > "0") {
    $('#barSavings').css({visibility: "visible"})
  }

  $('#percentFood').html((($('#showFood').html()) / ($('#input1').val())) * 100);
  $('#barFood').css({width : $('#percentFood').html() + "px"});
  if ($('#barFood') > "0") {
    $('#barFood').css({visibility: "visible"})
  }
  if ($('#percentFood') > "100") {
    $('#barfood').css({width: "100px"});
  }

  $('#percentEnter').html((($('#showEntertainment').html()) / ($('#input1').val())) * 100);
  $('#barEnter').css({width : $('#percentEnter').html() + "px"});
  if ($('#barEnter') > "0") {
    $('#barEnter').css({visibility: "visible"})
  }

  $('#percentTrans').html((($('#showTransportation').html()) / ($('#input1').val())) * 100);
  $('#barTrans').css({width : $('#percentTrans').html() + "px"});
  if ($('#barTrans') > "0") {
    $('#barTrans').css({visibility: "visible"})
  }

  $('#percentFixed').html((($('#showFixed').html()) / ($('#input1').val())) * 100);
  $('#barFixed').css({width : $('#percentFixed').html() + "px"});
  if ($('#barFixed') > "0") {
    $('#barFixed').css({visibility: "visible"})
  }

  $('#percentMortgage').html((($('#showMortgage').html()) / ($('#input1').val())) * 100);
  $('#barMort').css({width : $('#percentMortgage').html() + "px"});
  if ($('#barMort') > "0") {
    $('#barMort').css({visibility: "visible"})
  }

  $('#percentUtilities').html((($('#showUtilities').html()) / ($('#input1').val())) * 100);
  $('#barUtil').css({width : $('#percentUtilities').html() + "px"});
  if ($('#barUtil') > "0") {
    $('#barUtil').css({visibility: "visible"})
  }

  $('#percentCoffee').html((($('#showCoffee').html()) / ($('#input1').val())) * 100);
  $('#barCoff').css({width : $('#percentCoffee').html() + "px"});
  if ($('#barCoff') > "0") {
    $('#barCoff').css({visibility: "visible"})
  }

  $('#percentFit').html((($('#showFitness').html()) / ($('#input1').val())) * 100);
  $('#barFit').css({width : $('#percentFit').html() + "px"});
  if ($('#barFit') > "0") {
    $('#barFit').css({visibility: "visible"})
  }

  $('#percentAlcohol').html((($('#showAlcohol').html()) / ($('#input1').val())) * 100);
  $('#barAlc').css({width : $('#percentAlcohol').html() + "px"});
  if ($('#barAlc') > "0") {
    $('#barAlc').css({visibility: "visible"})
  }
}

$('#submit').on('click', listIncome);
$('#add').on('click', outputResults);











