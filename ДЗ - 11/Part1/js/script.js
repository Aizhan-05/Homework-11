// Часть 1

// 1-задание:
document.title = "Kadyr Aizhan";

// Чтобы изменить заголовок страницы. выполняем команду document.title, и пишем ФИО в внутри кавычек "" и сохраняем.

// 2-задание:
const header = document.getElementById("header");
console.log(header);

const h1 = header.querySelector("h1");
console.log(h1);

h1.textContent = "Изучение JavaScript";

// Чтобы найти элемента по Id используем метод getElementById;
// Чтобы найти h1 внутри header, используем метод querySelector, и вместо document уже ставим header;
// И чтобы изменить текст h1 используем метод textContent.

// 3-задание:
const allMenuElements = document.querySelectorAll(".menu-link");
console.log(allMenuElements[0].textContent);
console.log(allMenuElements[1].textContent);
console.log(allMenuElements[2].textContent);

// Чтобы получить все элементы меню используем метод querySelectorAll;
// Далее чтобы вывести в консоль используем console.log, и чтобы вывести по отдельности прописываем метод textContent и индексы каждого элемета (0, 1, 3). Таким образом получаем все текстовые содержимые в консоле.

// 4-задание:
const allElementsFeatures = document.querySelectorAll(".features-list li");
console.log(allElementsFeatures);

allElementsFeatures[1].innerHTML = "Поддержка <b>API</b>";

// Чтобы выбрать все элементы <li> используем метод querySelectorAll и внутри скобках прописываем (".features-list li");
// Чтобы выбрать второй элемент выбираем индекс 1, поскольку индексы начинаются с 0;
// Чтобы изменить содержимое второго элемента используем метод innerHTML и чтобы слово "API" было жирным вставляем тег <b>.
