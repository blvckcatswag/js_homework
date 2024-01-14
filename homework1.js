// 'number' + 3 + 3
// Результат: "number33"
// Комментарий: Сначала соединяется строка number с числом 3, потом результат объединяется со след. числом 3

// null + 3
// Результат: 3
// Комментарий: null  конвертируется в 0, потому что Null + любое число равняется этому числу

// 5 && "qwerty"
// Результат: "qwerty"
// Комментарий: Оператор &&  возвращает последнее значение, если оба значения истинные. В нашем случае 5 ( истинно) и "qwerty" (тоже истинно) по этому результат "qwerty"


// +'40' + +'2' + "hillel";
// Результат: 42hillel
// Комментарий: Сначала числа 40 и 2 конвертируются в числа при помощи оператора (унарного) + , потом они прибавляются и результат прибавления объединяется со строкой "hillel"

// '10' - 5 === 6;
// Результат: false
/* Комментарий: Строка "10" клнвертируется в число из за арифметической операции, результат выражения "10" - 5 будет 5, потом идёт строгое сравнение значений и типов данных, 5 не 
 равно 6 по этому результатом сравнения будет false */

// true + false
// Результат: 1
// Комментарий: true  конвертируется в 1, false  конвертируется в 0, по этому результатом операции сложения будет 1

// '4px' - 3
// Результат: NaN
// Комментарий: Строка "4px" не может конвертироваться в число по этому результатом операции вычитания будет Not a Number (NaN)

// '4' - 3
// Результат: 1
//Комментарий: СТрока "4" из за последующей операции вычитания конвертируется в число и происходиь сама операция вычитания, результатом которой будет число 1

// '6' + 3 ** 0;
// Результат: "61"
// Комментарий: сначала происходит возведение в степень, результатом возведения любого числа в степень 0 будет 1, после этого происходит конкатенация строк  и получаем "61"

// 12 / '6'
// Результат: 2
// Комментарий: строка 6 конвертируется в число и дальше 12 делится на 6 и получаем результат - чичсло 2

// '10' + (5 === 6);
// Результат: "10false"
// Комментарий: Результат строгого стравнения будет false и после он конвертируется в строку при объединении со строкой "10"

// null == ''
// Результат: false
// Комментарий: Результат false  так как сравниваются разные типы данных null  и строка ( пустая )

// 3 ** (9 / 3);
// Результат: 27
// Комментария: в скобках получаем 3 и возводим 3 в степень 3 и получаем 27

// !!'false' == !!'true'
// Результат: true
//Комментарий: две строки конвентируются в true из за операторов !! по этому результат сравнения будет true

// 0 || '0' && 1
// Результат: 1
//Комментарий: Оператор ||  возвращает первое истинное значение, если два значения истинны. 0 конвертируется в  true  по этому результат 1

// (+null == false) < 1;
// Результат: false
/* Комментарий: (+null) конвентируется в 0 и выражение сравнивается с false, результатом сравнения выражения в скобочках будет true, true єто 1 а один не меньше 1, по этому 
пезультат false */

// false && true || true
// Результат: true
// Комментарий: Оператор &&  позвращает false так как false && true  будет false, но оператор ||  возвращает true так как false || true будет true

// false && (false || true);
// Результат: false
// Комментарий: Оператор &&  возвращает false так как false && (false || true) - false && true - false

// (+null == false) < 1 ** 5;
// Результат: false
// Комментарий: Выражение сравнивается с false а 1 в степени 5 будет 1,   true сравнивается с 1 и результат сравнения будет false

