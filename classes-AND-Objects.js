// There are two Classes which are Robot and Person
// According to the Robot Class, create two objects: Robot r1 and Robot r2;
// According to the Person Class, create two objects: Person p1 and Person p2
// Now we have to say r2 is the robot od p1, and r1 is the robot of p2

class Robot {
    constructor(name, color, weight){
        this.name=name;//if don't put this.name will return undefined
        this.color=color;
        this.weight=weight;
    }
    introduceSelf () {
        console.log('My name is ' + this.name);
    }
}
class Person {
    constructor (name, personality, isSitting, robotOwned) {
        this.name=name;
        this.personality=personality;
        this.isSitting=isSitting;
        this.robotOwned = robotOwned;
    }
    sitDown(){
        this.isSitting = true;
    }
    stansUp(){
        this.isSitting = false;
    }
}

let r1 = new Robot("Tom", "red", 30);
let r2 = new Robot("Jerry", "blue", 40);
let p1 = new Person("Alice", "aggressive", false);
let p2 = new Person("Becky", "talkative", true);

p1.robotOwned = r2;
p1.robotOwned.introduceSelf();