const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal == 'elephant';
});


const startsWithS = animals.findIndex(animal => {
  return animal[0] == 's';
});

console.log(foundAnimal);
console.log(startsWithS);
