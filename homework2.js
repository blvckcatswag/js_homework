var userInputAge = prompt("Введите число лет:");

if (userInputAge !== null && userInputAge !== "" && !isNaN(userInputAge) && userInputAge >= 0) {
    var years = parseInt(userInputAge);
    var word;

    if (years % 10 === 1 && years % 100 !== 11) {
        word = "год";
    } else if (years % 10 >= 2 && years % 10 <= 4 && (years % 100 < 10 || years % 100 >= 20)) {
        word = "года";
    } else {
        word = "лет";
    }

   
    alert(`${years} ${word}`);
} else {
    alert("Пожалуйста, введите неотрицательное число.");
}
