// Часть 2

// 1-задание:
const ul = document.createElement("ul");

const li1 = document.createElement("li");
li1.textContent = "Введение в DOM";
const li2 = document.createElement("li");
li2.textContent = "Создание элементов";
const li3 = document.createElement("li");
li3.textContent = "Изменение атрибутов";

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

const infoSection = document.getElementById("info");
infoSection.append(ul);

// Сперва создаем ul с помощью метода createElement;
// Далее создаем все li1, li2, li3 также с помощью метода createElement и задаем сразу им тексты по заданию с помощью метода textContent;
// Далее уже каждый li1, li2, li3 добавляем внутрь ul (родитель) как его дети с помощью метода appendChild.
// Потом находим раздел секции по Id "info" с помощью метода getElementById и добавляем внутрь него ul в конец с помощью метода append.

// 2-задание:
const newLink = document.createElement("a");
newLink.textContent = "Мой профиль в Instagram";
newLink.setAttribute("href", "https://www.instagram.com/kadyrova.a.d?");
newLink.setAttribute("target", "_blank");
const header = document.getElementById("header");
header.append(newLink);

// Создаем ссылку с помощью метода createElement и добавляем текстовое содержимое с помощью метода textContent;
// Далее добавляем атрибуты и их значения с помощью метода setAttribute;
// И эту ссылку добавляем в конец header с помощью метода append.

// 3-задание:
const section = document.createElement("section");
section.setAttribute("class", "dynamic");

const h1 = document.createElement("h1");
h1.textContent = "Обучение JavaScript";

const p = document.createElement("p");
p.textContent =
  "Динамическое создание элементов позволяет улучшить интерфейс пользователя";

section.appendChild(h1);
section.appendChild(p);

const main = document.getElementById("main");

main.prepend(section);

// Для начало создаем секцию с помощью метода createElement и задаем ему класс "dynamic" с помощью метода setAttribute;
// Создаем также h1 и p с помощью метода createElement и задаем к каждой текстовое содержимые с помощью метода textContent;
// h1 и p добавляем внутрь section (родитель) как его дети с помощью метода appendChild.
// Далее находим раздел с Id "main" и внутри него добавляем блок секции в начало с помощью метода prepend.

// 4-задание:
const parent = document.getElementById("info");
const child = parent.querySelector("p");
parent.removeChild(child);

// Сначало находим родителя с Id "info" с помощью метода getElementById и находим абзац внутри него с помощью метода querySelector;
// Далее удаляем этот абзац с помощью метода removeChild.

// 5-задание:
const footer = document.getElementById("footer");
footer.innerHTML = "";

// Находим footer с помощью метода getElementById и удаляем все содержимое с помощью метода innerHTML.
