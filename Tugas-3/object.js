// soal 9
const person = {
  name: 'John',
  age: 30,
  occupation: 'Developer',
}
console.log('person', person)

// soal 10
const people = [
  {
    name: 'John',
    age: 30,
  },
  {
    name: 'Doe',
    age: 18,
  },
  {
    name: 'Jane',
    age: 24,
  },
]

const peopleAbove25 = people.filter((p) => p.age > 25)
console.log(peopleAbove25)
