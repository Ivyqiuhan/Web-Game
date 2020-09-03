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
    getInterface.innerHTML = '<img scr= ""'
  },
  setPreFight: function(){

  }
}
