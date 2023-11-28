const fs = require('fs');
const genders = ['male', 'female'];
const maleNames = [
  'Dominik',
  'Tomek',
  'Darek',
  'Staszek',
  'Adrian',
  'Rafal',
  'Kacper',
  'Marcin',
  'Arek',
  'Tymon',
];
const femaleNames = [
  'Monika',
  'Dominika',
  'Kasia',
  'Julka',
  'Alicja',
  'Nel',
  'Aga',
  'Ola',
  'Tola',
  'Jola',
];
const lastNames = [
  'Wilk',
  'Stepien',
  'Smith',
  'Doe',
  'Kowalski',
  'Hoak',
  'Wood',
  'Croack',
  'Zieba',
  'Jaskot',
];
const people = [];

const randChoice = arr => {
  const randomIndex = Math.floor(Math.random() * arr.length);

  return arr[randomIndex];
};

for (let i = 0; i < 20; i++) {
  const gender = randChoice(genders);
  const firstName =
    gender === 'male' ? randChoice(maleNames) : randChoice(femaleNames);
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const age = Math.floor(Math.random() * 60) + 18;

  const person = {
    gender: gender,
    firstName: firstName,
    lastName: lastName,
    age: age,
    mail: `${firstName}.${lastName}@gmail.com`,
  };
  people.push(person);
}
const jsonData = JSON.stringify(people, null, 2); // Drugi argument to spacje w celu formatowania z wcięciami
fs.writeFile('people.txt', jsonData, err => {
  if (err) throw err;
  console.log('The file has been saved!');
});
