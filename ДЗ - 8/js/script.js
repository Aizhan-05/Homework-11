// 1 - задание

const firstName = "Айжан";
const lastName = "Кадыр";
const age = 29;
const message = `Меня зовут ${firstName} ${lastName}, и мне ${age} лет`;
console.log(message);

// Согласно зданию, создала три переменных как firstName, lastName и age. Для типа string используем кавычки (""), а тип number пишется без ничего. Все переменные желательно задавать как const.
//  Далее создала переменную message, где использовала интерполяцию строк. Написала текст по зданию и выше созданные переменные поставила на свои места, согласно тексту. Для этого текст берем в одинарные кривые кавычки (``) и для вставки переменных использовала знак $ и в фигурные скобки {} вставляем наименование переменных.
// Далее для вывода информации (в данном случае переменная message) в консоль браузера использовала метод JavaScript console.log().

// 2 - задание

const city = "Астана";
const message = "Я родом из города " + city;
console.log(message);

// Создала переменную city. Для типа string используем кавычки (""). Переменную задала как const.
// Далее создала переменную message. В задании прописана что нельзя использовать интерполяцию строк как в первом задании. Поэтому текст написала используя обычные двойные кавычки ("") и далее добавила знак + и наименование переменного city.
// Далее для вывода информации (в данном случае переменная message) в консоль браузера использовала метод JavaScript console.log().

// 3 - задание

const password = "Qwerty123";
const hasAccess = Boolean(password);
console.log(password);
console.log(hasAccess);

// Создала переменную password. Для типа string используем кавычки (""). Переменную задала как const.
// Также задавая const, создала переменную hasAccess.Логическую значению пишем как Boolean(password) - это значит, проверяя значения переменного password, выводится true - если есть какая либо запись в password (то есть не пустая), false - если password пустая.
// Далее в консоль выводим значения обеих переменных используя метод JavaScript console.log().

// Можно также проверить с пустым значением:
const password = "";
const hasAccess = Boolean(password);
console.log(password);
console.log(hasAccess);

// 4 - задание

const isMember = false;
const strIsMember = isMember.toString();
console.log(strIsMember, typeof strIsMember);

// Создала переменную isMember. Для типа boolean, так как согласно задании значение = false. Переменную задала как const.
// Далее создала переменную strIsMember, где в инициализации тип переменного isMember с boolean меняем на String, для этого использовала метод toString().
// Далее в консоль выводим значение обеих переменного strIsMember и за одно для проверки можно вывести его тип. Использовала метод JavaScript console.log() и для вывода типа используем оператор typeof.

// 5 - задание

let cartItems = 0;
cartItems = !!cartItems;
console.log(cartItems, typeof cartItems);

// Создала переменную cartItems, обьявила его как let. Значение согласно зданию 0. получается это цифра 0 и его тип number.
// Далее поменяла тип переменного на boolean используя двойные знаки !!, для проверки корзины пустая или нет.
// Далее в консоль выводим значения переменного cartItems и за одно для проверки можно вывести его тип. Использовала метод JavaScript console.log() и для вывода типа используем оператор typeof. В результате вышла false - так как значение 0 - и когда пусто всегда выводится значение false. А если бы было другое значение, то вышла бы true (так как в остальных случаях всегда выводится значение true).
// Для проверки можем поставить значение например 5:
let cartItems = 5;
cartItems = !!cartItems;
console.log(cartItems, typeof cartItems);

// 6 - задание

const averageScore = 89.75695;
const toFixedAverageScore = averageScore.toFixed(1);
console.log(toFixedAverageScore);

// Создала переменную averageScore, обьявляя как const. И задала значение согласно заданию.
// Далее создала переменную как toFixedAverageScore. Для переопределение значение переменной averageScore использовала метод toFixed(), и для округления число до одного знака после запятой поставила цифру 1.
// и значение переменной toFixedAverageScore как обычно выводим в консоль используя метод JavaScript console.log().

// 7 - задание

const greetingMessage =
  "      Приветствуем вас в мире программирования!        ";
const trimmedGreetingMessage = greetingMessage.trim();
const upperCaseGreetingMessage = trimmedGreetingMessage.toUpperCase();
const greetingMessageHasJavaScript =
  trimmedGreetingMessage.includes("программирования");
console.log(greetingMessage);
console.log(trimmedGreetingMessage);
console.log(upperCaseGreetingMessage);
console.log(greetingMessageHasJavaScript);

// Создала переменную  greetingMessage, обьявляя как const. И задала значение согласно заданию.
// Далее для удаления пробелов использовала метод trim();
// После для преобразования строку в верхний регистр использовала метод toUpperCase();
// Для проверки содержит ли строка слова "программирования" использовала метод includes();
// Для вывода результатов каждого шага в консоль браузера использовала метод JavaScript console.log().
