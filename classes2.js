//inheritance

class Animal {
constructor(energy, age){
        this.energy = energy;
        this.age = age;
}

eat() {
    this.energy += 1;
}
sleep() {
    this.energy += 5;
}

}

const myAnimal = new Animal(10, 10);
myAnimal.eat();
myAnimal.sleep();
console.log(myAnimal.energy);


class Dog extends Animal { //beya7'od men main class and adds to it
constructor(age, energy, breed){ // constructor has properties not functions
    super (energy, age); //calling parent constructor
    this.bread = breed;
    }

    bark() {
    this.energy -=1;

    }
}
const myDog =  new Dog (10, 10, "german shepard")
myDog.sleep(); //come from class Animal
myDog.eat();//come from class Animal
myDog(bark);

//create a class vehicle
//that has color and weight
//has the move function (console.log vehicle is moving)
//then create class car that inhert from vehicle that has color and weight and dooors
//create class plane inhert from vehicle has fly function

class Vehicle {
    constructor (color, weight, speed){
        this.color = color;
        this.weight = weight;
        this.speed = 0;
    }
move (){
    this.speed += 10;
    console.log("The vehicle is moving")
}
}

class Car extends Vehicle {
    constructor(color, weight, doors){
        this.doors = doors;
    }
    playRadio() {

    }
}

class Plane extends Vehicle {
    constructor(color, weight);
    super (color,weight);
    fly () {

    }
    changeColor(newColor){
        this.color = newColor;
    }
}

const myCar = new Car ("red", "100", "2")
myCar.move();
myCar.playRadio();
myCar.changeColor(blue);



//this is the right one

class Vehicle{
    constructor(color, weight){
        this.color=color;
        this.weight=weight;
    }
    move(){
        console.log('The vehicle is moving');
    }
    changeColor(newColor){
        this.color =newColor
    }
}
class Car extends Vehicle{
    constructor(color,weight, numberOfDoors){
        super(color,weight);
        this.numberOfDoors=numberOfDoors;
    }
}
class Plane extends Vehicle{
    constructor(color,weight){
        super(color,weight);
    }
    fly(){
        console.log('the plane fly');
    }
}