//  4로 나누어 떨어지는 해는 윤년
// 100으로 나누어 떨어지는 해는 윤년아님
//  400으로 나누어 떨어지면 윤년

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(isLeapYear(2022));
console.log(isLeapYear(1997));
console.log(isLeapYear(1780));
