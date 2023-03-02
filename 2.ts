function checkIfNumberIsFromFibonacciSequence(number: number) {
  if (number < 0) return false;

  const lastTwoNumbers: [number, number] = [0, 1];

  // While the number is less than the last calculated number
  while (number > lastTwoNumbers[1]) {
    const currentLastNumber = lastTwoNumbers[1];
    const nextNumber = lastTwoNumbers[0] + lastTwoNumbers[1];

    // Updating the last two numbers from the sequence
    lastTwoNumbers[0] = currentLastNumber;
    lastTwoNumbers[1] = nextNumber;
  }

  const lastCalculatedNumber = lastTwoNumbers[1];
  return number === lastCalculatedNumber;
}

const numbersToTest = [2, 4, 8, 10, 15, 34];

for (const number of numbersToTest) {
  const result = checkIfNumberIsFromFibonacciSequence(number);
  console.log(
    `${number} faz parte da sequência de Fibonacci? ${result ? 'Sim' : 'Não'}`
  );
}
