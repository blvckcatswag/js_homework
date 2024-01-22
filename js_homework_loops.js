/*З
  А
  Д
  А
  Ч
  А

  1
  */

// Вариант 1: Используя цикл for
function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += symbol;
        }
        console.log(row);
    }
}

// Вариант 2: Используя строковые методы
function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
        console.log(symbol.repeat(i));
    }
}

// Вызов функции:
drawTriangle(5, '*');

/*З
  А
  Д
  А
  Ч
  А

  2
  */


  // Вариант 1: Используя цикл for
function sumNonMultipleOfThree() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 3 !== 0) {
            sum += i;
        }
    }
    console.log(sum);
}

// Вариант 2: Используя функцию reduce
function sumNonMultipleOfThree() {
    let sum = Array.from({ length: 100 }, (_, i) => i + 1)
        .filter(num => num % 3 !== 0)
        .reduce((acc, num) => acc + num, 0);
    console.log(sum);
}

// Вызов функции:
sumNonMultipleOfThree();


/*З
  А
  Д
  А
  Ч
  А

  3
  */

// Вариант 1: Используя цикл for
function pow(x, y) {
    let result = 1;
    for (let i = 0; i < y; i++) {
        result *= x;
    }
    return result;
}

// Вариант 2: Используя рекурсию
function pow(x, y) {
    if (y === 0) {
        return 1;
    }
    return x * pow(x, y - 1);
}

// Вызов функции:
console.log(pow(2, 3));


