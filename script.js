// Достаю всякие теги
let form = document.getElementById("form");

// НЕ СТОИТ СЮДА СМОТРЕТЬ ИБО ЦЕ ТУПО
let card_link1 = document.getElementById("card-link1")
let card_link2 = document.getElementById("card-link2")
let card_link3 = document.getElementById("card-link3")
let card_link4 = document.getElementById("card-link4")
let card_link5 = document.getElementById("card-link5")

let cod_value = document.getElementById("cod-value");
let error = document.getElementById("error");

// Коды для активации карт
var cods = {
    cod1: "4136",
    cod2: "5730",
    cod3: "3854",
    cod4: "7357",
    cod5: "0664"
}

// Пути к карточкам
var card_links = {
    card1: "cards/card1.html",
    card2: "cards/card2.html",
    card3: "cards/card3.html",
    card4: "cards/card4.html",
    card5: "cards/card5.html"
}

// Проверяю былили актевированный карточки
let access_cards = {
    acc_card1: "",
    acc_card2: "",
    acc_card3: "",
    acc_card4: "",
    acc_card5: ""
}
// Ловлю "переменну" из памяти браузера
try {
    access_cards.acc_card1 += localStorage.getItem("card1_link_mem");
    access_cards.acc_card2 += localStorage.getItem("card2_link_mem");
    access_cards.acc_card3 += localStorage.getItem("card3_link_mem");
    access_cards.acc_card4 += localStorage.getItem("card4_link_mem");
    access_cards.acc_card5 += localStorage.getItem("card5_link_mem");
} catch {}
console.log(access_cards);
// Проверка пойманной переменной ( МНЕ СТЫДНО ЗА ЭТОТ СПИСОК if-оф )
if (access_cards.acc_card1 == "true") {
    card_link1.href = card_links.card1;
}
if (access_cards.acc_card2 == "true") {
    card_link2.href = card_links.card2;
}
if (access_cards.acc_card3 == "true") {
    card_link3.href = card_links.card3;
}
if (access_cards.acc_card4 == "true") {
    card_link4.href = card_links.card4;
}
if (access_cards.acc_card5 == "true") {
    card_link5.href = card_links.card5;
}

// Функция, которая позволяет активировать карточки
function Submit() {
    console.log(cod_value.value);

    if (cod_value.value == cods.cod1) {
        // Даю доступ к карточке
        console.log("Был введен код 4136")
        error.innerText = "Вы открыли карточку №1";
        card_link1.href = card_links.card1;

        // Сохраняю доступ к карточки в памяти браузера
        localStorage.setItem("card1_link_mem", true)
    } else if (cod_value.value == cods.cod2) {
        console.log("Был введен код 4136")
        error.innerText = "Вы открыли карточку №2";
        card_link2.href = card_links.card2;

        localStorage.setItem("card2_link_mem", true)
    } else if (cod_value.value == cods.cod3) {
        console.log("Был введен код 4136")
        error.innerText = "Вы открыли карточку №3";
        card_link3.href = card_links.card3;

        localStorage.setItem("card3_link_mem", true)
    } else if (cod_value.value == cods.cod4) {
        console.log("Был введен код 4136")
        error.innerText = "Вы открыли карточку №4";
        card_link4.href = card_links.card4;

        localStorage.setItem("card4_link_mem", true)
    } else if (cod_value.value == cods.cod5) {
        console.log("Был введен код 4136")
        error.innerText = "Вы открыли карточку №5";
        card_link5.href = card_links.card5;

        localStorage.setItem("card5_link_mem", true)
    } else {
        console.log("Был введен неверный код")
        error.innerText = "Код не подходит(";
    }
}