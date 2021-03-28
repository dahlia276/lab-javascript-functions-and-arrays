
// a class is a generic representaion of an object
//create instances of this class, that represents specific objects

class Soldier { //classes start with capital letter
 constructor(health, strength) {
    this.health = health;
    this.strength = strength;
    }
attack () {
    return this.strength
}

receiveDamage (amountOfDamage) {
    this.health = this.health - amountOfDamage;

    }

}

//creates a new instance of  the class Soldier
const soldier1 = new Soldier2(10,10);
const soldier2 = new Soldier2(5,15);
const soldier3 = new Soldier2(50,80);


const attackstrenght = soldier1.attack()
soldier2.recieveDamage(attackStreangth);
console.log(soldier2.health);