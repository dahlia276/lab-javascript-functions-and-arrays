//
//batt;e game, we will have soldiers to battle each other
//each soldier will have energy and strength


//implicit binding
const soldier1 = {
    health: 10,
    strength: 5,
    attack: function () {
    return this.strenght // this represents soldier
},
recieveDamage: function (amountOfDamage) {
    this.health = this.health - amountOfDamage;
}
}




const strength =  soldier1.attack(); //the this keyword represents the object left to the dot
console.log(strength);

soldier1.recieveDamage(4);
console.log(soldier1.health); 




//explicit binding
function getHealth() {
  console.log(this.health); //undefined because there is nothing left
}

// binding the this (soldier1) to getHealth function
getHealth.call(soldier1);

const soldier2 = {
    health: 20,
    strength: 10,
    attack: function () {
    return this.strenght // this represents soldier
},
recieveDamage: function (amountOfDamage) {
    this.health = this.health - amountOfDamage;
}
}


const soldier3 = {
    health: 2,
    strength: 25,
    attack: function () {
    return this.strenght // this represents soldier
},
recieveDamage: function (amountOfDamage) {
    this.health = this.health - amountOfDamage;
}
}


//soldier3 attacking soldier2
const attackStreangth = soldier3.attack();
soldier2.recieveDamage(attackStreangth);

console.log(soldier2.health);
if (soldier2.health < 0){
    console.log("soldier 2 is down")
} else {
    console.log(" soldier 2 still stands")
}


//dry - dont repeat yourself