// 평균 점수

const score = prompt().split(" ");

let sum = 0;

for (let i = 0; i < score.length; i++) {
  sum = sum + parseInt(score[i], 10);
}

console.log(Math.floor(sum / score.length));
