// Завдання 1: Вивід ромба з цифр
function printDiamond(n) {
    let result = "";
    for (let i = 1; i <= n; i++) {
        result += " ".repeat(n - i) + "1 ".repeat(i).trim() + "\n";
    }
    for (let i = n - 1; i >= 1; i--) {
        result += " ".repeat(n - i) + "1 ".repeat(i).trim() + "\n";
    }
    console.log(result);
    alert(result);
}

let n = parseInt(prompt("Введіть розмір ромба:"));
if (!isNaN(n) && n > 0) printDiamond(n);

// Завдання 2: Числовий ряд та сума
let num = parseInt(prompt("Введіть число n:"));
let sum = 0;
let series = "";
for (let i = 1; i <= num; i++) {
    series += i + (i !== num ? ", " : "");
    sum += i;
}
console.log("Ряд: " + series);
console.log("Сума: " + sum);
alert("Ряд: " + series + "\nСума: " + sum);

// Завдання 3: Вгадування числа
let target = Math.floor(Math.random() * 100) + 1;
let guess;
do {
    guess = parseInt(prompt("Вгадайте число від 1 до 100:"));
    if (guess > target) {
        alert("Менше!");
    } else if (guess < target) {
        alert("Більше!");
    } else {
        alert("Вітаю! Ви вгадали число " + target);
    }
} while (guess !== target);
