const currentDate = new Date();
const month = 'січеня,лютого,березня,квітня,травня,червня,липня,серпня,вересня,жовтня,листопада,грудня'.split(',');
const weekDayArray = 'понеділок,вівторок,середа,четвер,п`ятниця,субота,неділя'.split(',')

export function formatDate() {
    const date = 'Дата: ' + currentDate.getDate() + ' ' + month[currentDate.getMonth()] + ' ' + currentDate.getFullYear() + ' року';
    const weekDay = 'День тижня: ' + weekDayArray[currentDate.getDay()];
    const time = 'Час: ' + currentDate.getHours() + ':' + currentDate.getMinutes();

    document.querySelector('.formatDateArea')
        .innerHTML = `<p>${date}</p><p>${weekDay}</p><p>${time}</p>`;
}

export function dateToWeekDate() {
    const weekDateObj = {
        dayNumber: currentDate.getDay(),
        dayName: weekDayArray[currentDate.getDay()]
    }

    document.querySelector('.weekDay')
        .innerHTML = `<p>Номер дня: ${weekDateObj.dayNumber}</p><br/><p>Назва дня: ${weekDateObj.dayName}</p>`;
}

export function daysAgo() {
    const userDay = document.querySelector('.daysAgo').value;
    let date = new Date();
    date.setDate(date.getDate() - userDay);
    console.log(date);
}

export function task4(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

export function task5() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    return {
        secondPast: Math.round(now - today),
        secondToNextDay: Math.round(tomorrow - now)
    };
}

export function task6(year) {
    return {
        'Половина століття :': 1 + ((year % 100) > 50),
        'Століття :': 1 + Math.trunc(year / 100),
        'Тисячоліття :': 1 + Math.trunc(year / 1000)
    };
}

export function task7(date1, date2) {
    let diffDate = new Date(date1 - date2);
    return Math.abs(diffDate.toISOString().slice(0, 4) - 1970);
}


