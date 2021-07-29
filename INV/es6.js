let person = {
  id: 1,
  name: "Janakiram",
};

const { id: personID, name: personName } = person;
console.log(personID, personName);

const { id, ...rest } = person;

[1, 2, 3].some((e) => e === 1);

[1, 2, 3].reduce((a, c) => (a += c), 0);

let todoList = [{}];
