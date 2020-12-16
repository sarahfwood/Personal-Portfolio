const arrayOne = [1, 2, 3, 4];
const arrayTwo = [4, 5, 6, 7];

for (let i = 0; i < arrayOne.length; i++) {
  for (let j = 0; j < arrayTwo.length; j++) {
    if (arrayOne[i] === arrayTwo[j]) {
      console.log('Both loops have the number: ' + arrayTwo[j]);
    }
  }
}