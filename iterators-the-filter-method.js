const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below


const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const smallNumbers = randomNumbers.filter(randomNumber => {
  return randomNumber < 250;
});

const longFavoriteWords = favoriteWords.filter(favoriteWord => {
  return favoriteWord.length > 7;
});

console.log(smallNumbers);
console.log(longFavoriteWords);
