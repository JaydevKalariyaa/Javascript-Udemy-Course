let Person = function (name, birthyear) {
  this.name = name;
  this.birthyear = birthyear;
};

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthyear);
};

let jaydev = new Person('jaydev', 2003);
console.log(jaydev);
jaydev.calcAge();

let kushang = new Person('kushang', 2004);
console.log(kushang);
kushang.calcAge();

console.log(kushang.__proto__ === Person.prototye);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
//we can create anymethod for all arrays by adding method to array
console.log([1, 2, 3, 4, 4, 2].unique());

Array.prototype.onebyone = function () {
  return this.filter((elem, i) => i % 2 === 0);
};
console.log([1, 2, 3, 4, 4, 2].onebyone());

// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// let Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.speed);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(this.speed);
// };

// let car1 = new Car('BMW', 120);
// let car2 = new Car('Mercedes', 95);

// car1.accelerate();
// car2.brake();

// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
class Car {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  accelerator() {
    this.speed += 10;
    console.log(this.speed);
  }
  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = 1.6 * speed;
  }
}
let car1 = new Car('bmw', 160);
console.log(car1.speedUS);
car1.speedUS = 10;
console.log(car1.speedUS);
car1.accelerator();
