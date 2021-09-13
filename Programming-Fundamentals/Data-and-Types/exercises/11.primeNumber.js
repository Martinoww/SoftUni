function primeNumber(num) {
  let isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(`true`);
  } else {
    console.log(`false`);
  }
}
primeNumber(4);
