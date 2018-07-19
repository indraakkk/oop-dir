// ================================================
// global variable
const humanButton = document.getElementById("human");
const outputHuman = document.getElementById("human-print");
const bossButton = document.getElementById("boss");
const outputBoss = document.getElementById("boss-print");
const employeeButton = document.getElementById("employee");
const outputEmployee = document.getElementById("employee-print");
const internButton = document.getElementById("intern");
const outputIntern = document.getElementById("intern-print");

// ================================================
// class & constructor
class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age || 1;
  }
}

const indra = new Human("Indra", 25);

const getHuman = () => {
    outputHuman.innerHTML = `<li>${indra.name}, ${indra.age}</li>`
}

humanButton.addEventListener('click', getHuman);
// console.log(indra);

// ================================================
// extends
class Employee extends Human {
  constructor(name, age, profession, salary) {
    super(name, age);
    this.profession = profession;
    this.salary = salary;
  }
}

class Boss extends Human {
  constructor(name, age, power, income) {
    super(name, age);
    this.power = power;
    this.income = income;
  }
}

const ani = new Employee("Ani", 23, "Front-end Developer", "IDR" + 4000000);
const budi = new Boss("Budi", 40, "Big Networking", "USD" + 3000);

const getBoss = () => {
  outputBoss.innerHTML = `<li>${budi.name}, ${budi.age}, ${budi.power}, ${
    budi.income}</li>`;
};

bossButton.addEventListener('click', getBoss);

const getEmployee = () => {
    outputEmployee.innerHTML = `<li>${ani.name}, ${ani.age}, ${ani.profession}, ${ani.salary}</li>`
}

employeeButton.addEventListener('click', getEmployee);
// console.log(ani);
// console.log(budi);

// ================================================
// method in class
class People {
  constructor(name, age) {
    this.name = name;
    this.age = age || 1;
  }
  walk() {
    console.log(`${this.name} is walking`);
  }
  run() {
    console.log(`${this.name} is running`);
  }
}

const putra = new People("Putra", 25);
putra.walk();

// ================================================
// extends + extends
class Intern extends Employee {
  constructor(name, age, profession, salary, workingtime) {
    super(name, age, profession, salary);
    this.workingtime = workingtime;
  }
}

const dudu = new Intern(
  "Dudu",
  19,
  "intern: back-end",
  "IDR" + 2000000,
  "13.00-17.00"
);

const getIntern = () => {
  outputIntern.innerHTML = `<li>${dudu.name}, ${dudu.age}, ${
    dudu.profession
  }, ${dudu.salary}, ${dudu.workingtime}</li>`;
};

internButton.addEventListener("click", getIntern);

// ================================================
// class -> toString
class Dog {
  constructor(name) {
    this.name = name;
  }
  toString() {
    return this.name;
  }
}

dog1 = new Dog("Gaby");

console.log(dog1.toString());
