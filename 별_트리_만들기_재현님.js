// 재현님 방법

const level = 5;

for (let i = 1; i <= level; i++) {
  let tree = "";
  for (let j = 1; j <= level - i; j++) {
    tree = tree + " ";
  }
  for (let k = 1; k <= i * 2 - 1; k++) {
    tree = tree + "*";
  }
  console.log(tree);
}
