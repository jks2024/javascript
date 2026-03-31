const prompt = require("prompt-sync")();

// 입력 받은 정수까지의 합을 구하기
// 입력 10 => 합 55
// 1. while문 사용
// 2. for문 사용

let num = Number(prompt("정수 입력 : "));
let sum = 0;
// while (num) {
//   sum += num;
//   num--;
// }
// console.log("합계 : " + sum);

for (let i = 1; i <= num; i++) {
  sum += i;
}
console.log("합계 : " + sum);

// 배열 객체 반복 하기
let brands = ["애플", "구글", "삼성전자", "아마존", true, 100];
for (let i = 0; i < brands.length; i++) {
  //console.log(brands[i]);
  process.stdout.write(brands[i] + " ");
}
console.log();

for (let e of brands) {
  process.stdout.write(e + " ");
}
console.log();

// for.. in : 객체의 모든 열거 가능한 속성(키)을 반복(iterate)할 때 사용
const person = {
  name: "곰돌이",
  job: "프로그래머",
  addr: "경기도 수원시",
};

for (let key in person) {
  process.stdout.write(person[key] + " ");
}
console.log();

const persons = [
  {
    name: "곰돌이",
    job: "프로그래머",
    addr: "경기도 수원시",
  },
  {
    name: "장원영",
    job: "아이돌",
    addr: "서울시 강남구",
  },
  {
    name: "안유진",
    job: "아이돌",
    addr: "대전시",
  },
  {
    name: "이서",
    job: "아이돌",
    addr: "대전시",
  },
  {
    name: "가을",
    job: "아이돌",
    addr: "대전시",
  },
];

for (let person of persons) {
  //console.log(person);
  for (let key in person) {
    console.log(`${key} : ${person[key]}`);
  }
}
