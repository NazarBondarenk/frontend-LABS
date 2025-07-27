const users = [
  {
    name: "Ірина",
    age: 25,
    city: "Львів",
    favoriteColors: ["рожевий", "бежевий", "фіолетовий"],
    isStudent: false,
    grades: [92, 88, 95, 91],
  },
  {
    name: "Олег",
    age: 19,
    city: "Харків",
    favoriteColors: ["жовтий", "зелений"],
    isStudent: true,
    grades: [60, 58, 62, 55],
  },
  {
    name: "Наталя",
    age: 30,
    city: "Київ",
    favoriteColors: ["чорний", "срібний"],
    isStudent: false,
    grades: [78, 81, 85, 80],
  },
];

const greet = (user) => console.log(`Привіт, ${user.name}!`);
const average = (arr) => arr.reduce((s, n) => s + n, 0) / arr.length;
const gradeLevel = (avg) =>
  avg >= 90 ? "Відмінно" : avg >= 70 ? "Добре" : "Задовільно";
const colorsString = (colors) => colors.join(", ");
const needRetake = (grades) => grades.some((g) => g < 60);

const sq = (x) => x ** 2;
const cube = (x) => x ** 3;
const percentOfMax = (v, max = 100) => ((v / max) * 100).toFixed(1);

function processUser(user) {
  greet(user);

  const avg = average(user.grades);
  const level = gradeLevel(avg);
  const colors = colorsString(user.favoriteColors);
  const msg = needRetake(user.grades) ? "Потрібна перездача" : "Хвостів немає";

  console.log(`Ім'я: ${user.name}
          Місто: ${user.city}
          Студент: ${user.isStudent}
          Середній бал: ${avg.toFixed(1)} — ${level}
          Улюблені кольори: ${colors}
          ${msg}`);

  console.log(`  ↳ квадрат віку:           ${sq(user.age)}`);
  console.log(`  ↳ куб першої оцінки:      ${cube(user.grades[0])}`);
  console.log(`  ↳ % середнього від 100:   ${percentOfMax(avg)}%\n`);
}

for (let i = 0; i < users.length; i++) {
  if (users[i].name === "Ірина") {
    processUser(users[i]);
    break;
  }
}

console.log();
for (const user of users) {
  if (user.name === "Олег") {
    processUser(user);
    break;
  }
}

console.log();
users.forEach((user) => {
  if (user.name === "Наталя") {
    processUser(user);
  }
});
