let GameManager = {
  setGameStart: function(classType){
    this.resetPlayer(classType);
    this.setPreFight();
  },
  resetPlayer: function(classType){
    switch (classType) {
      case "Sunshine":
      player = new Player(classType, 200, 50);
        break;
        case "Earth":
        player = new Player(classType, 80, 200);
          break;
    }
    let getInterface = document.querySelector(".interface");
    getInterface.innerHTML = '<img src = "img/' + classType.toLowerCase() + '.png" class = "img-avatar"><div><h3>' + classType + '</h3><p class="health-player">Health: '+ player.health + '</p><p>Power: '+ player.power + '</p></div>';
  },
  setPreFight: function(){
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getArena = document.querySelector(".arena");
    getHeader.innerHTML = '<p>Task: Find an enemy</p>';
    getActions.innerHTML = '<a href="#" class = "btn-prefight" onclick ="GameManager.setFight()">Search for enemy</a>';
    getArena.style.visibility = "visible";
  },
  setFight: function(){
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getEnemy = document.querySelector(".enemy");
    //Create enemy
    let enemy1 = new Enemy("Blood", 100, 100);
    let enemy2 = new Enemy("DarkerBlood", 200, 80);
    //Generate a random number between 0 and 1
    let chooseRandomEnemy = Math.floor(Math.random()* Math.floor(2));
    switch (chooseRandomEnemy) {
      case 0:
      enemy = enemy1;
        break;
      case 1:
        enemy = enemy2;
        break;
    }
    getHeader.innerHTML = '<p>Task: Choose your action</p>';
    getActions.innerHTML = '<a href="#" class = "btn-prefight" onclick ="PlayerMoves.calcAttack()">Attack</a>';
    getEnemy.innerHTML = '<img src = "img/' + enemy.enemyType.toLowerCase() + '.png" alt" '+  enemy.enemyType + '"img-avatar"><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: '+ enemy.health + '</p><p>Power: '+ enemy.power + '</p></div>';
  }
}
