import {formatDate,dateToWeekDate,daysAgo,task4,task5,task6,task7} from './lab4.js';

function task1() {
    document.querySelector('.takeFormatDate').addEventListener('click', formatDate);
}

function task2() {
    document.querySelector('.getWeekDay').addEventListener('click', dateToWeekDate);
}

function task3() {
    document.querySelector('.daysAgo').addEventListener('input', daysAgo);
}

task1();
task2();
task3();
console.log('---task4---');
console.log(task4(2020, 3));
console.log('---task5---');
console.log(task5());
console.log('---task6---');
console.log(task6(1653));
console.log('---task7---');
console.log(task7(new Date(2019, 1, 1), new Date(2021, 1, 1)));

