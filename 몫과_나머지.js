const num = prompt().split(" ");

const result = Math.floor(parseInt(num[0], 10) / parseInt(num[1], 10));
const left = parseInt(num[0], 10) % parseInt(num[1], 10);

console.log(result, left);
