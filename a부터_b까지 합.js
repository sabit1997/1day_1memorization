function sumAll(a, b) {
  let output = 0;
  for (i = a; i <= b; i++) {
    output += i;
  }
  return output;
}

console.log(`7부터 70까지의 합은 ${sumAll(7, 70)}입니다.`);
