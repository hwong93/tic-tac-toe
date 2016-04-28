$(document).on('ready', function() {
  var winningCombos = [[1,2,3],[4,5,6],[7,8,9],[1,5,9],[3,5,7],[1,4,7],[2,5,8],[3,6,9]]
  var turn = 0;
  var board = [1, 2, 3, 4, 5, 6, 7, 8 ,9];
  // attachTDhandler();
  var player;


  if (player === undefined){
    $('td').on('click', function(){
      alert('Please Pick Game Mode!')
    })
  };

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
      alert('tie game');
    }
  };

  function attachTDhandler(){
    $('td').off('click');
    $('td').on('click', function(){
      if (turn % 2 === 0){
        $(this).html('X').addClass('x').css('border-color', '#97eef0');
      }
      else{
        $(this).html('O').addClass('o').css('border-color', '#e25471');
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
    $('td').html('').removeClass('o').removeClass('x').css('border-color', '#e8e8e8');
    turn = 0;
    board = [1,2,3,4,5,6,7,8,9];
    if(player === 0){
      attachTDhandler();
    }
    else{
      singleTDhandler();
    }
  };

  $('.reset').on('click', function(){
    clearBoard();
  });

  $('.double').on('click', function(){
    clearBoard();
    player = 0;
    attachTDhandler()
  })

  $('.single').on('click', function(){
    clearBoard();
    player = 1;
    singleTDhandler()
  });

function singleTDhandler(){
  $('td').off('click');
  $('td').on('click', function() {

    $(this).html('X').addClass('x').css('border-color', '#97eef0');
    $(compMove()).html('O').addClass('o').off('click').css('border-color', '#e25471');


    $(this).off('click');
    turn += 1.8;
    //check for a winner
    checkWinner();

    // turns off the click listener for one of the table cells
    checkTie();
  });
};

  function compMove() {
    // debugger
    console.log('USER MOVE')

    var ind = Math.floor(Math.random() * board.length)
    var place = board[ind]

    console.log(board)

    if ($('.' + place).hasClass('x')){
      console.log('USER fail x')
      board.splice(ind, 1)
      return compMove();
    } else if ($('.' + place).hasClass('o')) {
      console.log('USER fail o')
      board.splice(ind, 1)
      return compMove();
    } else { //if (!($('#' + place).hasClass('x')) || !($('#' + place).hasClass('o'))) {
      console.log('USER console')
      board.splice(ind, 1)
      return ('.' + place)
      // debugger   <=== AWESOME SHIT USE ALWAYS
    }
  }

});
