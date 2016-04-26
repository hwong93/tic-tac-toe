$(document).on('ready', function() {
  var winningCombos = [[1,2,3],[4,5,6],[7,8,9],[1,5,9],[3,5,7],[1,4,7],[2,5,8],[3,6,9]]
  var turn = 0;
  var board = [1, 2, 3, 4, 5, 6, 7, 8 ,9]
  attachTDhandler();

  function checkWinner(){
    for(var prop in winningCombos){
        if($('.x').hasClass(winningCombos[prop][0]) && $('.x').hasClass(winningCombos[prop][1]) && $('.x').hasClass(winningCombos[prop][2]) ){

          alert('X wins');
          clearBoard();
          return true;
        }
        else if($('.o').hasClass(winningCombos[prop][0]) && $('.o').hasClass(winningCombos[prop][1]) && $('.o').hasClass(winningCombos[prop][2]) ){
          alert('O wins')
          clearBoard();
          return true
        }
    };
    return false
  };

  function checkTie(){
    if(turn === 9 && checkWinner() === false){
      alert('tie game')
    }
  }

  function attachTDhandler(){
    $('td').off('click');
    $('td').on('click', function(){
      if (turn % 2 === 0){
        $(this).html('X').addClass('x');
      }
      else{
        $(this).html('O').addClass('o');
      }

      turn++;
      // turns off the click listener for one of the table cells
      $(this).off('click');
      //check for a winner
      checkWinner();

      checkTie();
    });
  };

  function clearBoard(){
    $('td').html('').removeClass('o').removeClass('x');
    turn = 0;
    attachTDhandler();
  }

  $('.reset').on('click', function(){
    clearBoard();
  });

  // $('.double').on('click', function(){
  //   attachTDhandler()
  // })
  //
  // $('.single').on('click', function(){
  //   if (turn % 2 === 0){
  //     $(this).html('X').addClass('x');
  //   }
  //   else{
  //     compMove();
  //   }
  //
  //   //check for a winner
  //   checkWinner();
  //
  //   // turns off the click listener for one of the table cells
  //   $(this).off('click');
  //   turn++;
  //   checkTie();
  // });
  //
  // function compMove(){
  //
  // }

});
