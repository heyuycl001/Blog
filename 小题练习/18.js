var a_game = function (pNum) {
  var players = [];
  for (var i = 1; i <= pNum; i++) {
    players.push(i);
  }
  var flag = 0;
  while (players.length > 1) {
    var outPlayerNum = 0, len = players.length;
    for (var i = 0; i < len; i++) {
      flag++;
      if (flag == 5) {
        flag = 0;
        players.splice(i - outPlayerNum, 1);
        outPlayerNum++;
      }
    }
  }
  return players[0];
};

console.log(a_game(100))