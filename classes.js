
// Blueprint to a certain object ( here Bike)
class Bike {
  constructor(name, company, cc, color) {
    this.name = name;
    this.company = company;
    this.cc = cc;
    this.color = color;
  }
  doRace = function (raceName) {
    console.log(this);
    console.log(`${this.name} from ${this.company} is racing ${raceName}`);
  }
}

// Prototype for Bike ---> stop, accelerate, Jump, Wheeling,()
Bike.prototype.stop = function () {
  // Apply Brake
  console.log("Applying Brake");
  console.log("Bike Stooped");
};

Bike.prototype.accelerate = function () {
  // Apply Throttle
  console.log("Applying Throttle");
  console.log("Bike Speed Improved");
};

const r15 = new Bike('R15', 'Yamaha', '250', "blue"); // construction / instantiation

console.log(r15);
