let 출석부 = ["하림", "수빈", "나윤", "혜인", "선주"];

function isName(name) {
  for (i = 0; i <= 출석부.length; i++) {
    if (name == 출석부[i]) {
      console.log("있어요!");
      return;
    }
  }
}
