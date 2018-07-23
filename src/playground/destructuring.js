const person = {
  name: 'Claudia',
  age: 23,
  location: {
    city: 'NY',
    temp: 92
  }
};

console.log(`${person.name} is ${person.age}.`);

//or

const {name, age} = person;
console.log (`${name} is ${age}.`);

//
// Array destructuring
//

const address = ['1299 S Jun Street', 'NYC', 'New York', '90987'];
console.log(`You are in ${address[1]} ${address[2]}.}`)

const [, city, state] = address; //can leave off last names but add commas to represent first ones
console.log(`You are in ${city} ${state}.}`)

//dafaults
const address = [];
const [, city='New York'];
console.log(`You are in ${city}`);
