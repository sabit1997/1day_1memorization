function multiplAll(a, b) {
  let output = 1;
  for (let i = a; i <= b; i++) {
    output *= i;
  }
  return output;
}

console.log(`7부터 10까지의 합은 ${multiplAll(7, 10)}입니다.`);
