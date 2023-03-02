function reverseString(string: string) {
  const stringAsArray = string.split('');
  let left = 0;
  let right = stringAsArray.length - 1;

  while (left < right) {
    const tmp = stringAsArray[right];
    // Swapping the characters
    stringAsArray[right] = stringAsArray[left];
    stringAsArray[left] = tmp;

    left++;
    right--;
  }

  return stringAsArray.join('');
}

const strings = ['banana', 'rotieh', 'animal', 'amor'];

for (const string of strings) {
  const backwardsString = reverseString(string);
  console.log(`'${string}' ao contrário é '${backwardsString}'`);
}
