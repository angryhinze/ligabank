function tabClick(numberOfTab) {
    const buttons = document.getElementsByClassName('section-second__chooseButton');
    const title = document.getElementsByClassName('section-second__title');
    const text = document.getElementsByClassName('section-second__text');
    const checks = document.getElementsByClassName('section-second__check');
    const button = document.getElementsByClassName('section-second__button');
    const img = document.getElementById('section-second__img');

    switch (numberOfTab) {
        case 0: tabFirstClick(); break;
        case 1: tabSecondClick(); break;
        case 2: tabThirdClick(); break;
        case 3: tabFourClick(); break;
    }

    function tabFirstClick() {
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

    function tabSecondClick() {
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

    function tabThirdClick() {
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

    function tabFourClick() {
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
}


//Ставка по кредиту_фиксированная
let creditPercentNotChange = 9.6;

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

    //Объявление переменных, содержащих значение полей ввода без лишних символов
    let creditCostValueClean = 0;
    let firstEntryValueClean = 0;
    let yearsValueClean = 0;

    function updateCleanValues() {
        //Обновление переменных, содержащих значение полей ввода без лишних символов
        creditCostValueClean = Number(creditCost.value.replace(' рублей', '').replace(/\s/g, ''));
        firstEntryValueClean = Number(firstEntry.value.replace(' рублей', '').replace(/\s/g, ''));
        yearsValueClean = Number(years.value.replace(' лет', '').replace(/\s/g, ''));
    }

    function inputRepair() {
        updateCleanValues();

        //Ограничения ввода значений
        switch (creditPercentNotChange) {
            case 9.6: {
                if (creditCostValueClean > 25000000) creditCostValueClean = 25000000;
                else if (creditCostValueClean < 1200000) creditCostValueClean = 1200000;
                if (yearsValueClean < 5) yearsValueClean = 5;
                else if (yearsValueClean > 30) yearsValueClean = 30;
                break;
            }
            case 3.5: {
                if (creditCostValueClean > 15000000) creditCostValueClean = 15000000;
                else if (creditCostValueClean < 400000) creditCostValueClean = 400000;
                if (yearsValueClean < 1) yearsValueClean = 1;
                else if (yearsValueClean > 10) yearsValueClean = 10;
                break;
            }
            case 14.5: {
                if (creditCostValueClean > 1000000) creditCostValueClean = 1000000;
                else if (creditCostValueClean < 300000) creditCostValueClean = 300000;
                if (yearsValueClean < 1) yearsValueClean = 1;
                else if (yearsValueClean > 5) yearsValueClean = 5;
                break;
            }
        }

        //Исправление ввода при вводе значений пользователем
        const firstEntryPercent = document.getElementsByClassName('section-third__range')[0].value;
        creditCost.value = creditCostValueClean.toLocaleString('ru') + " рублей";
        firstEntry.value = Math.round(creditCostValueClean / 100 * firstEntryPercent).toLocaleString('ru') + " рублей";
        years.value = yearsValueClean + " лет";
        updateCleanValues();
    }

    function makeMath() {
        //Рассчеты кредита
        creditCostResult = creditCostValueClean - firstEntryValueClean;
        everyMonthRate = creditPercentNotChange / 12 / 100;
        generalRate = Math.pow((1 + everyMonthRate), yearsValueClean * 12);
        costEveryResult = Math.round((creditCostResult * everyMonthRate * generalRate) / (generalRate - 1));
        monthMoney = Math.round(costEveryResult * 2.5);
        console.clear();
        console.log(creditCostValueClean);
        console.log(firstEntryValueClean);
        console.log(yearsValueClean);
    }

    function getResults() {
        //Вывод рассчетов
        creditCostResultElement.innerHTML = creditCostResult.toLocaleString('ru') + " рублей";
        creditPercentResultElement.innerHTML = creditPercentNotChange + "%";
        costEveryResultElement.innerHTML = costEveryResult.toLocaleString('ru') + " рублей";
        monthMoneyElement.innerHTML = monthMoney.toLocaleString('ru') + " рублей";
    }

    inputRepair();
    makeMath();
    getResults();
}

function creditTypeChange() {
    const creditType = document.getElementById('creditType');
    const calcLabelUp = document.getElementsByClassName('section-third__labelUp')[0];
    const saleTextResult = document.getElementsByClassName('section-third__saleText')[0];

    const calcLabelDown = document.getElementsByClassName('section-third__labelDown')[0];

    const firstEntryRange = document.getElementsByClassName('section-third__range')[0];
    const rangeDisplay = document.getElementsByClassName('section-third__rangeDisplay')[0];

    const minYear = document.getElementsByClassName('section-third__yearFive')[0];
    const maxYear = document.getElementsByClassName('section-third__yearThird')[0];
    const yearRange = document.getElementsByClassName('section-third__range')[1];

    //Изменение фиксированной ставки и названий кредита
    switch (creditType.selectedIndex) {
        case 0:
            {
                creditPercentNotChange = 9.6;
                calcLabelUp.innerHTML = "Стоимость недвижимости";
                saleTextResult.innerHTML = "Сумма ипотеки";
                calcLabelDown.innerHTML = 'От 1 200 000 до 25 000 000 рублей';
                firstEntryRange.setAttribute('min', 10);
                rangeDisplay.innerHTML = firstEntryRange.value + "%";
                yearRange.setAttribute('min', 5);
                yearRange.setAttribute('max', 30);
                minYear.innerHTML = '5 лет';
                maxYear.innerHTML = '30 лет';
                creditCalculator();
                break;
            }
        case 1:
            {
                creditPercentNotChange = 3.5;
                calcLabelUp.innerHTML = "Стоимость автомобиля";
                saleTextResult.innerHTML = "Сумма автокредита";
                calcLabelDown.innerHTML = 'От 400 000 до 15 000 000 рублей';
                firstEntryRange.setAttribute('min', 3);
                rangeDisplay.innerHTML = firstEntryRange.value + "%";
                yearRange.setAttribute('min', 1);
                yearRange.setAttribute('max', 10);
                minYear.innerHTML = '1 год';
                maxYear.innerHTML = '10 лет';
                creditCalculator();
                break;
            }
        case 2:
            {
                creditPercentNotChange = 14.5;
                calcLabelUp.innerHTML = "Стоимость кредита";
                saleTextResult.innerHTML = "Сумма кредита";
                calcLabelDown.innerHTML = 'От 300 000 до 1 000 000 рублей';
                firstEntryRange.setAttribute('min', 0);
                rangeDisplay.innerHTML = firstEntryRange.value + "%";
                yearRange.setAttribute('min', 1);
                yearRange.setAttribute('max', 5);
                minYear.innerHTML = '1 год';
                maxYear.innerHTML = '5 лет';
                creditCalculator();
                break;
            }
    }
}

function mapCheckChange() {
    const russiaCheck = document.getElementById('russia');
    const sngCheck = document.getElementById('sng');
    const europeCheck = document.getElementById('europe');

    const map = document.getElementById('map');

    if (russiaCheck.checked && sngCheck.checked == false && europeCheck.checked == false) {
        map.innerHTML = '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae01ef2cc2e4bb74ec5a695da5f90ab3d0b8a270164de9c175b8534e8f242d4e1&amp;source=constructor" width="100%" height="614" frameborder="0"></iframe>';
    }
    else if (russiaCheck.checked == false && sngCheck.checked && europeCheck.checked == false) {
        map.innerHTML = '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A9b1fbd2480f5c88e7ecaab677e0addcc0e7e06c62a3ad47d0a9e2f0492f006a2&amp;source=constructor" width="100%" height="614" frameborder="0"></iframe>';
    }
    else if (russiaCheck.checked == false && sngCheck.checked == false && europeCheck.checked) {
        map.innerHTML = '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A812aa6e0d9e0617162112cd7a4f1acc3be9c36b0f07f74a075bff57cf9d42f36&amp;source=constructor" width="100%" height="614" frameborder="0"></iframe>';
    }
    else if (russiaCheck.checked && sngCheck.checked && europeCheck.checked == false) {
        map.innerHTML = '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A90fc24d2483df140fcca0fede4fed33dba2265f225fe8ce3b293e851ea5a9ce1&amp;source=constructor" width="100%" height="614" frameborder="0"></iframe>';
    }
    else if (russiaCheck.checked == false && sngCheck.checked && europeCheck.checked) {
        map.innerHTML = '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Afe274563de9699faa6aac5c1d9c1eefd43414a68a381efb46c7ffd91d7b4fab2&amp;source=constructor" width="100%" height="614" frameborder="0"></iframe>';
    }
    else if (russiaCheck.checked && sngCheck.checked == false && europeCheck.checked) {
        map.innerHTML = '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac52249b5deefc8d455cd5fbdf3255d5a3893d4fc042391459fb4820a3ea7c101&amp;source=constructor" width="100%" height="614" frameborder="0"></iframe>';
    }
    else if (russiaCheck.checked && sngCheck.checked && europeCheck.checked) {
        map.innerHTML = '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A7c0de9151bf6de6399554a373845e736a6b3247928e1847319529e24a5ec8f27&amp;source=constructor" width="100%" height="614" frameborder="0"></iframe>';
    }

}