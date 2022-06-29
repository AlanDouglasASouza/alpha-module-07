function numPrime(num) {
  const bigNum = BigInt(num);

  for (i = 2n; i < bigNum; i++) {
    if (prime(i)) {
      console.log(i.toString());
    }
  }

  function prime(number) {
    for (let i = 2n; i * i <= number; i++) {
      if (number % i === 0n) return false;
    }
    return true;
  }
}

//numPrime(1000000);
