$(document).ready(function() {

	crystals = ['assets/images/red.png','assets/images/blue.png','assets/images/yellow.png','assets/images/green.png'];

	var counter = 0;
	var wins = 0;
	var losses = 0;
	$('#win').text(wins);
	$('#loss').text(losses);
	
	newCrystal();
	newGame();

	function newCrystal () {
		var numbers = []
			while(numbers.length < 4){
			  var randomnumber = Math.ceil(Math.random()*12)
			  var found = false;
			  for (var i=0; i< numbers.length; i++){
				if (numbers[i] == randomnumber){
					found = true; break
				}
			  }
			  if(!found)numbers[numbers.length]=randomnumber;
			}
		console.log(numbers);		
// Appending random number to the randomNumber id in the html doc
  //
		for (i = 0; i < numbers.length; i++) {
			var newCrystal = $('<img>');
			newCrystal.attr('data-num', numbers[i]);
			newCrystal.attr('src', crystals[i]);
			newCrystal.attr('alt', 'crystals');
			newCrystal.addClass('newCrystal')
			$('#crystals').append(newCrystal);
		}
	}
// Resets the game.
	function newGame() {

		counter = 0;
		$('#yourScore').text(counter);

		function randomIntFromInterval(min,max){
		   	return Math.floor(Math.random()*(max-min+1)+min);
			}
// Selects a random number to be shown at the start of the game
  // Number should be should be between 19 - 120
  //
		var numberToGuess = randomIntFromInterval(19,120);

		$('.value').text(numberToGuess);


		$('.newCrystal').on('click', function(){
		    counter = counter + parseInt($(this).data('num'));
		   
				$('#yourScore').text(counter);
				//adds the wins and losses to the userTotal

		    if (counter == numberToGuess){
		      $('#status').text('You won!!!!');
		      wins ++;
		      $('#win').text(wins);
		      console.log(wins)
		      $('#crystals').empty();
		      newCrystal();
		      newGame();
		        
		    } else if ( counter > numberToGuess){
		        $('#status').text('You lost!')
		        losses ++;
		        $('#loss').text(losses);
		        console.log(losses)
		        $('#crystals').empty();
		        newCrystal();
		        newGame();
		    }
		});
	}

});
