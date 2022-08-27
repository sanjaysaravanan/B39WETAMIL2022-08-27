// function Car(name, model) {
//   this.name = name;
//   this.model = model;
// }

// Car.prototype.run = function () {
//   console.log(`${this.name} is running`);
// }


// const audiCar = new Car("Audi", 'Sedan');

// console.log(audiCar);
// audiCar.run();


// Types of Function

// Function Keyword function ( includes some more feature init )
// function sum(a, b) {
//   console.log(a + b);
// }
// console.log(sum); // f (a, b) { console.log(a, b); }
// sum(10, 20);

// Function Expression
// const sum = function (a, b) {
//   console.log(a + b);
// }
// console.log(sum)
// sum(10, 20);

// Arrow Function ( light weight )
// const sum = (a, b) => {
//   console.log(a + b);
// }
// console.log(sum);
// sum(10, 20); // invoking / calling

// this keyword ---> using this inside function points the function itself

console.log(this);



// Blueprint
function Mobile(name, model, company) {
  this.name = name;
  this.model = model;
  this.company = company;
  function PlayMusic(songName) {
    console.log(this); // Points to Mobile
    console.log(`${this.name} by ${this.company} plays ${songName}`);
  };
  this.PlayMusic = PlayMusic;
  console.log(this); //points to windows
};

// console.log(Mobile); // printing the reference

// Invoking a function without new keyword
// const MotoG4 = Mobile('G4', 'Android', 'Motorola'); // this is invoking
// console.log(MotoG4);

// Construction ( Creation of a mobile) new( keyword )
const MotoG4 = new Mobile('G4', 'Android', 'Motorola'); // Object Instantiation/creation
console.log(MotoG4);


// const Mobile = (name, model, company) => {
//   this.name = name;
//   this.model = model;
//   this.company = company;

//   console.log(name, model, company);
// };

// Mobile('G4', 'Android', 'Motorola');

// // Construction ( Creation of a mobile) new( keyword )
// const MotoG4 = new Mobile('G4', 'Android', 'Motorola'); // Object Instantiation/creation
// console.log(MotoG4);







