let buttons = document.getElementsByClassName('section-second__chooseButton');

let title = document.getElementsByClassName('section-second__title');
let text = document.getElementsByClassName('section-second__text');
let checks = document.getElementsByClassName('section-second__check');

let button = document.getElementsByClassName('section-second__button');

let img = document.getElementById('section-second__img');


let creditPercentNotChange = 9.6;


function buttonFirstClick() {
    buttons[0].style.backgroundColor = "rgb(246,247,255)";
    buttons[1].style.backgroundColor = "";
    buttons[2].style.backgroundColor = "";
    buttons[3].style.backgroundColor = "";
    title[0].innerHTML = "Вклады Лига Банка - это выгодная инвестиция в свое будущее";
    text[0].innerHTML = "Проценты по вкладам до 7%";
    text[1].innerHTML = "Разнообразие условий";
    text[2].innerHTML = "Возможность ежемесячной капитализации или вывод процентов на банковскую карту";
    checks[2].setAttribute('src', "image/svg/tick.svg");
    text[3].innerHTML = "";
    button[0].innerHTML = "Узнать подробнее";
    img.setAttribute('src', 'image/content/tab-piggybank-desctop@1x.jpg');
}

function buttonSecondClick() {
    buttons[0].style.backgroundColor = "";
    buttons[1].style.backgroundColor = "rgb(246,247,255)";
    buttons[2].style.backgroundColor = "";
    buttons[3].style.backgroundColor = "";
    title[0].innerHTML = "Лига банк выдает кредиты под любые цели";
    text[0].innerHTML = "Ипотечный кредит";
    text[1].innerHTML = "Автокредит";
    text[2].innerHTML = "Потребительский кредит";
    checks[2].setAttribute('src', "image/svg/tick.svg");
    text[3].innerHTML = "Рассчитайте ежемесячный платеж и ставку по кредиту воспользовавшись нашим кредитным калькулятором";
    button[0].innerHTML = "Рассчитать кредит";
    img.setAttribute('src', 'image/content/tab-car-desctop@1x.jpg');
}

function buttonThirdClick() {
    buttons[0].style.backgroundColor = "";
    buttons[1].style.backgroundColor = "";
    buttons[2].style.backgroundColor = "rgb(246,247,255)";
    buttons[3].style.backgroundColor = "";
    title[0].innerHTML = "Лига страхование - застрахуем все, что захотите";
    text[0].innerHTML = "Автомобильное страхование";
    text[1].innerHTML = "Страхование жизни и здоровья";
    text[2].innerHTML = "Страхование недвижимости";
    checks[2].setAttribute('src', "image/svg/tick.svg");
    text[3].innerHTML = "";
    button[0].innerHTML = "Узнать подробнее";
    img.setAttribute('src', 'image/content/tab-padlock-desctop@1x.jpg');
}

function buttonFourClick() {
    buttons[0].style.backgroundColor = "";
    buttons[1].style.backgroundColor = "";
    buttons[2].style.backgroundColor = "";
    buttons[3].style.backgroundColor = "rgb(246,247,255)";
    title[0].innerHTML = "Лига Банк - это огромное количество онлайн-сервисов для вашего удобства";
    text[0].innerHTML = "Мобильный банк, который всегда под рукой";
    text[1].innerHTML = "Приложение Лига-проездной позволит вам оплачивать билеты по всему миру";
    text[2].innerHTML = "";
    checks[2].setAttribute('src', "");
    text[3].innerHTML = "";
    button[0].innerHTML = "Узнать подробнее";
    img.setAttribute('src', 'image/content/tab-phone-desctop@1x.jpg');
}

function creditCalculator() {
    //Получение элементов ввода
    const creditCost = document.getElementsByClassName('section-third__input')[0];
    const firstEntry = document.getElementsByClassName('section-third__input')[1];
    const years = document.getElementsByClassName('section-third__input')[2];

    //Получение элементов вывода
    const creditCostResultElement = document.getElementsByClassName('section-third__saleTitle')[0];
    const creditPercentResultElement = document.getElementsByClassName('section-third__saleTitle')[1];
    const costEveryResultElement = document.getElementsByClassName('section-third__saleTitle')[2];
    const monthMoneyElement = document.getElementsByClassName('section-third__saleTitle')[3];

    //Объявление переменных для рассчетов
    let creditCostResult = 0;
    let costEveryResult = 0;
    let monthMoney = 0;

    let everyMonthRate = 0;
    let generalRate = 0;


    function inputClean() {
        //Очистка полей ввода от лишних символов
        creditCost.value = creditCost.value.replace(' рублей', '');
        creditCost.value = creditCost.value.replaceAll(" ", "");

        firstEntry.value = firstEntry.value.replace(' рублей', '');
        firstEntry.value = firstEntry.value.split(' ').join('');

        years.value = String(years.value).replace(" лет", "");

        console.log(firstEntry.value);
        console.log(creditCost.value);
    }

    function firstEntryRepair() {
        //Подстраивание значения "Первоначальный взнос под стоимость кредита"
        const firstEntryPercent = document.getElementsByClassName('section-third__range')[0];
        firstEntry.value = Number(creditCost.value / 100) * firstEntryPercent.value;
    }


    function makeMath() {
        //Рассчеты кредита
        creditCostResult = creditCost.value - firstEntry.value;
        everyMonthRate = creditPercentNotChange / 12 / 100;
        generalRate = Math.pow((1 + everyMonthRate), years.value * 12);
        costEveryResult = Math.round((creditCostResult * everyMonthRate * generalRate) / (generalRate - 1));
        monthMoney = Math.round(costEveryResult * 2.5);
    }

    function getResults() {
        //Вывод рассчетов
        creditCostResultElement.innerHTML = creditCostResult.toLocaleString('ru') + " рублей";
        creditPercentResultElement.innerHTML = creditPercentNotChange + "%";
        costEveryResultElement.innerHTML = costEveryResult.toLocaleString('ru') + " рублей";
        monthMoneyElement.innerHTML = monthMoney.toLocaleString('ru') + " рублей";
    }

    function inputRepair() {
        //Возврат лишних символов в поля ввода
        creditCost.value = String(Number(creditCost.value)) + " рублей";
        firstEntry.value = String(Number(firstEntry.value)) + " рублей";
        years.value = years.value + " лет"
    }

    inputClean();
    firstEntryRepair();
    makeMath();
    getResults();
    inputRepair();
}

function creditTypeChange() {
    let creditType = document.getElementById('creditType');
    let calcLabelUp = document.getElementsByClassName('section-third__labelUp')[0];
    switch (creditType.selectedIndex) {
        case 0:
            {
                creditPercentNotChange = 9.6;
                calcLabelUp.innerHTML = "Стоимость недвижимости";
                creditCalculator();
                break;
            }
        case 1:
            {
                creditPercentNotChange = 3.5;
                calcLabelUp.innerHTML = "Стоимость автомобиля";
                creditCalculator();
                break;
            }
        case 2:
            {
                creditPercentNotChange = 14.5;
                calcLabelUp.innerHTML = "Стоимость кредита";
                creditCalculator();
                break;
            }
    }
}