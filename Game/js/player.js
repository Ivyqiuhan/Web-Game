//Global scope obj, so the gameManager can have access of it
let player;


function Player(classType, health, power) {
  this.classType = classType;
  this.health = health;
  this.power = power;
}

let PlayerMoves = {
  calcAttack: function(){
    //who Attack first?
    let getPlayerSpeed = player.speed;
    let getEnemySpeed = enemy.speed;
    //Player attack
    let playerAttack = function(){
      let calcBaseDamage;
      //if(player.mana > 0)
      calcBaseDamage = player.health * player.power / 1000;
      let offsetDamage = Math.floor(Math.random()* Math.floor(10));
      let calcOutputDamage = calcBaseDamage + offsetDamage;
      //number of hits
      let numberOfHit = Math.floor(Math.random()* Math.floor(5));
      let attckValues = [calcOutputDamage, numberOfHit];
      return attckValues;
    }
    //Enemy attack
    let enemyAttack = function(){
      let calcBaseDamage;
      //if(player.mana > 0)
      calcBaseDamage = enemy.health * enemy.power / 1000;
      let offsetDamage = Math.floor(Math.random()* Math.floor(12));
      let calcOutputDamage = calcBaseDamage + offsetDamage;
      //number of hits
      let numberOfHit = Math.floor(Math.random()* Math.floor(4));
      let attckValues = [calcOutputDamage, numberOfHit];
      return attckValues;
    }
    //set the health for player and enemy
    let getPlayerHealth = document.querySelector(".health-player");
    let getEnemyHealth = document.querySelector(".health-enemy");
    //initil ATTACK
    if(getPlayerHealth >= getEnemyHealth) {
      let playerAttackValues = playerAttack();
      let totalDamage = playerAttackValues[0]*playerAttackValues[1];
      enemy.health = enemy.health - totalDamage;
      alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
      if(enemy.health <= 0){
        alert("You win! Refreash the browser to play again.");
        getPlayerHealth.innerHTML = "Health: " + player.health;
        getEnemyHealth.innerHTML = "Health: 0";
      } else {
        getEnemyHealth.innerHTML = "Health: " + enemy.health;
        //enemy attack
        let enemyAttackValues = enemyAttack();
        let totalDamage = enemyAttackValues[0]*enemyAttackValues[1];
        player.health = player.health - totalDamage;
        alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
        if(player.health <= 0){
          alert("You lose! Refreash the browser to play again.");
          getEnemyHealth.innerHTML = "Health: " + enemy.health;
          getPlayerHealth.innerHTML = "Health: 0";
        } else{
          getPlayerHealth.innerHTML = "Health: " + player.health;
        }
      }
    } else if(getPlayerHealth < getEnemyHealth) {
      let enemyAttackValues = enemyAttack();
      let totalDamage = enemyAttackValues[0]*enemyAttackValues[1];
      player.health = player.health - totalDamage;
      alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
      if(player.health <= 0){
        alert("You lose! Refreash the browser to play again.");
        getEnemyHealth.innerHTML = "Health: " + enemy.health;
        getPlayerHealth.innerHTML = "Health: 0";
      } else{
        getPlayerHealth.innerHTML = "Health: " + player.health;

        let playerAttackValues = playerAttack();
        let totalDamage = playerAttackValues[0]*playerAttackValues[1];
        player.health = player.health - totalDamage;
        alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
        if(enemy.health <= 0){
          alert("You win! Refreash the browser to play again.");
          getPlayerHealth.innerHTML = "Health: " + player.health;
          getEnemyHealth.innerHTML = "Health: 0";
      }
    }
  }
}
}
