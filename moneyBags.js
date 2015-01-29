var answer;
var input;
var income;

function listIncome() {
  income = $('#input1').val();
  $('#showIncome').html(income);
}

function outputResults() {
  answer = $('#select1').val();
  input = Number($('#input2').val());
  income = $('#showIncome').html()

  if (Number($('#input2').val()) > Number(income)) {
  alert("Sorry, you're too broke for that, get a second job to add that amount...");
  }
  else {
    income = income - input;
    $('#showIncome').html(income);

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

    $('#savPercent').html(Math.round((($('#showSavings').html()) / ($('#input1').val())) * 100));
    $('#barSavings').css({width : $('#savPercent').html() + "%"});
    if ($('#barSavings') > "0") {
      $('#barSavings').css({visibility: "visible"})
    }

    $('#percentFood').html(Math.round((($('#showFood').html()) / ($('#input1').val())) * 100));
    $('#barFood').css({width : $('#percentFood').html() + "%"});
    if ($('#barFood') > "0") {
      $('#barFood').css({visibility: "visible"})
    }

    $('#percentEnter').html(Math.round((($('#showEntertainment').html()) / ($('#input1').val())) * 100));
    $('#barEnter').css({width : $('#percentEnter').html() + "%"});
    if ($('#barEnter') > "0") {
      $('#barEnter').css({visibility: "visible"})
    }

    $('#percentTrans').html(Math.round((($('#showTransportation').html()) / ($('#input1').val())) * 100));
    $('#barTrans').css({width : $('#percentTrans').html() + "%"});
    if ($('#barTrans') > "0") {
      $('#barTrans').css({visibility: "visible"})
    }

    $('#percentFixed').html(Math.round((($('#showFixed').html()) / ($('#input1').val())) * 100));
    $('#barFixed').css({width : $('#percentFixed').html() + "%"});
    if ($('#barFixed') > "0") {
      $('#barFixed').css({visibility: "visible"})
    }

    $('#percentMortgage').html(Math.round((($('#showMortgage').html()) / ($('#input1').val())) * 100));
    $('#barMort').css({width : $('#percentMortgage').html()+ "%"});
    if ($('#barMort') > "0") {
      $('#barMort').css({visibility: "visible"})
    }

    $('#percentUtilities').html(Math.round((($('#showUtilities').html()) / ($('#input1').val())) * 100));
    $('#barUtil').css({width : $('#percentUtilities').html() + "%"});
    if ($('#barUtil') > "0") {
      $('#barUtil').css({visibility: "visible"})
    }

    $('#percentCoffee').html(Math.round((($('#showCoffee').html()) / ($('#input1').val())) * 100));
    $('#barCoff').css({width : $('#percentCoffee').html() + "%"});
    if ($('#barCoff') > "0") {
      $('#barCoff').css({visibility: "visible"})
    }

    $('#percentFit').html(Math.round((($('#showFitness').html()) / ($('#input1').val())) * 100));
    $('#barFit').css({width : $('#percentFit').html() + "%"});
    if ($('#barFit') > "0") {
      $('#barFit').css({visibility: "visible"})
    }

    $('#percentAlcohol').html(Math.round((($('#showAlcohol').html()) / ($('#input1').val())) * 100));
    $('#barAlc').css({width : $('#percentAlcohol').html() + "%"});
    if ($('#barAlc') > "0") {
      $('#barAlc').css({visibility: "visible"})
    }
  }
}

$('#submit').on('click', listIncome);
$('#add').on('click', outputResults);









